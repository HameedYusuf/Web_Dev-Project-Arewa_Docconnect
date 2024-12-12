# Arewa Docconnect - Telemedicine Application

## Overview
Arewa Docconnect is a full-stack telemedicine application that allows patients and doctors to connect remotely for healthcare services. The application provides features such as video consultations, chat, appointment scheduling, and medical record management, offering a secure and efficient platform for healthcare needs.

## Features
- **User Authentication**: Secure registration and login for patients and doctors.
- **Appointment Scheduling**: Patients can schedule appointments with available doctors.
- **Video Consultation**: Real-time video calls between patients and doctors.
- **Real-Time Chat**: Patients and doctors can communicate through secure messaging.
- **Medical Records Management**: Patients can upload and share medical records with doctors.
- **Notification System**: Push notifications for upcoming appointments and other updates.
- **Electronic Prescription**: Doctors can provide prescriptions electronically.

## Tech Stack
- **Frontend**: React, TypeScript, Axios, Socket.IO Client, Tailwind CSS
- **Backend**: Flask, SQLAlchemy, Flask-JWT-Extended, Flask-SocketIO, Flask-Cors
- **Database**: SQLite (can be replaced with PostgreSQL or MySQL)
- **Build Tool**: Vite

## Project Structure
### Frontend
- **`src/App.js`**: Main file that manages routes and renders different components.
- **Components** (in `src/components/`): 
  - `Login.js`: Handles user login.
  - `Dashboard.js`: User dashboard for navigating different features.
  - `Appointment.js`: Interface for appointment scheduling and management.
  - `Chat.js`: Real-time messaging interface.
  - Other components: `VideoCall.js`, `Profile.js`, `MedicalRecords.js`, `Prescription.js`, `Notification.js`, `Calendar.js`.
- **`App.css`**: Styling for the frontend.

### Backend
- **`server/app.py`**: Main backend server handling API requests, authentication, and WebSocket communication.
- **`server/requirements.txt`**: Lists all dependencies required for the backend.
- **Database Models**: User, Appointment, MedicalRecord, and ChatMessage.

## Prerequisites
- **Node.js and npm** (for the frontend)
- **Python 3 and pip** (for the backend)
- **Git** (for version control)

## Installation Guide
### Backend Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/HameedYusuf/arewa-docconnect.git
   ```
2. **Navigate to the backend folder**:
   ```bash
   cd arewa-docconnect/server
   ```
3. **Create a virtual environment**:
   ```bash
   python -m venv venv
   ```
4. **Activate the virtual environment**:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`
5. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
6. **Run the server**:
   ```bash
   flask run
   ```
7. **Run with Socket.IO support**:
   ```bash
   python app.py
   ```

### Frontend Setup
1. **Navigate to the frontend folder**:
   ```bash
   cd arewa-docconnect
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the React app**:
   ```bash
   npm start
   ```

## Deployment Guide
### Backend Deployment
- **Hosting Platforms**: Use platforms like **Heroku**, **AWS**, or **Google Cloud** for hosting.
- **Environment Variables**: Set environment variables like `JWT_SECRET_KEY` securely on the cloud platform.
- **Scaling**: For Socket.IO, use **Redis** as a message broker to handle multiple server instances.

### Frontend Deployment
- **Platforms**: Use platforms like **Netlify** or **Vercel** to deploy the React application.
- **API Endpoint**: Update API endpoint URLs in the frontend to point to the deployed backend.

## Usage
1. **User Registration**: Register as a patient or doctor.
2. **Login**: Log in to access the dashboard.
3. **Dashboard**: Use the dashboard to book appointments, start video calls, chat, and manage medical records.

## License
MIT License

## Contact
For any questions or issues, please reach out via GitHub issues.
