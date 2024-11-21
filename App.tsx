import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './components/Layout';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Appointment } from './components/Appointment';
import { VideoCall } from './components/VideoCall';
import { Chat } from './components/Chat';
import { Profile } from './components/Profile';
import { MedicalRecords } from './components/MedicalRecords';
import { Prescription } from './components/Prescription';
import { Notification } from './components/Notification';
import { Calendar } from './components/Calendar';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated ? <>{children}</> : <Login setIsAuthenticated={setIsAuthenticated} />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/appointment" element={<Appointment />} />
                  <Route path="/video-call" element={<VideoCall />} />
                  <Route path="/chat" element={<Chat socket={socket} />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/medical-records" element={<MedicalRecords />} />
                  <Route path="/prescription" element={<Prescription />} />
                  <Route path="/notifications" element={<Notification />} />
                  <Route path="/calendar" element={<Calendar />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;