import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const dbPromise = open({
  filename: join(__dirname, 'database.sqlite'),
  driver: sqlite3.Database
});

// Initialize database tables
async function initializeDatabase() {
  const db = await dbPromise;
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      name TEXT,
      role TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_id INTEGER,
      doctor_id INTEGER,
      date TEXT,
      time TEXT,
      type TEXT,
      status TEXT,
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (patient_id) REFERENCES users (id),
      FOREIGN KEY (doctor_id) REFERENCES users (id)
    );

    CREATE TABLE IF NOT EXISTS medical_records (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_id INTEGER,
      doctor_id INTEGER,
      type TEXT,
      description TEXT,
      file_path TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (patient_id) REFERENCES users (id),
      FOREIGN KEY (doctor_id) REFERENCES users (id)
    );

    CREATE TABLE IF NOT EXISTS prescriptions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_id INTEGER,
      doctor_id INTEGER,
      medication TEXT,
      dosage TEXT,
      frequency TEXT,
      duration TEXT,
      status TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (patient_id) REFERENCES users (id),
      FOREIGN KEY (doctor_id) REFERENCES users (id)
    );

    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sender_id INTEGER,
      receiver_id INTEGER,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (sender_id) REFERENCES users (id),
      FOREIGN KEY (receiver_id) REFERENCES users (id)
    );
  `);
}

initializeDatabase().catch(console.error);

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Routes
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const db = await dbPromise;

  try {
    const user = await db.get('SELECT * FROM users WHERE email = ?', email);
    
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({ access_token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Appointments
app.get('/appointments', authenticateToken, async (req, res) => {
  const db = await dbPromise;
  try {
    const appointments = await db.all(
      'SELECT * FROM appointments WHERE patient_id = ? OR doctor_id = ?',
      req.user.id,
      req.user.id
    );
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/appointments', authenticateToken, async (req, res) => {
  const { doctor_id, date, time, type, notes } = req.body;
  const db = await dbPromise;

  try {
    const result = await db.run(
      'INSERT INTO appointments (patient_id, doctor_id, date, time, type, status, notes) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [req.user.id, doctor_id, date, time, type, 'pending', notes]
    );
    res.json({ id: result.lastID });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Medical Records
app.get('/medical-records', authenticateToken, async (req, res) => {
  const db = await dbPromise;
  try {
    const records = await db.all(
      'SELECT * FROM medical_records WHERE patient_id = ?',
      req.user.id
    );
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Prescriptions
app.get('/prescriptions', authenticateToken, async (req, res) => {
  const db = await dbPromise;
  try {
    const prescriptions = await db.all(
      'SELECT * FROM prescriptions WHERE patient_id = ?',
      req.user.id
    );
    res.json(prescriptions);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Socket.IO chat handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join_room', (roomId) => {
    socket.join(roomId);
  });

  socket.on('send_message', async (data) => {
    const db = await dbPromise;
    try {
      await db.run(
        'INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)',
        [data.sender_id, data.receiver_id, data.message]
      );
      io.to(data.room).emit('receive_message', data);
    } catch (error) {
      console.error('Error saving message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});