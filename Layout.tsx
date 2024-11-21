import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Calendar as CalendarIcon, 
  MessageSquare, 
  Video, 
  FileText, 
  Bell, 
  User, 
  Calendar, 
  ClipboardList,
  LogOut
} from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-indigo-600">Arewa Docconnect</h1>
        </div>
        <nav className="mt-6">
          <Link to="/dashboard" className="flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
            <ClipboardList className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link to="/appointment" className="flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
            <CalendarIcon className="w-5 h-5 mr-3" />
            Appointments
          </Link>
          <Link to="/video-call" className="flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
            <Video className="w-5 h-5 mr-3" />
            Video Call
          </Link>
          <Link to="/chat" className="flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
            <MessageSquare className="w-5 h-5 mr-3" />
            Chat
          </Link>
          <Link to="/medical-records" className="flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
            <FileText className="w-5 h-5 mr-3" />
            Medical Records
          </Link>
          <Link to="/notifications" className="flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
            <Bell className="w-5 h-5 mr-3" />
            Notifications
          </Link>
          <Link to="/profile" className="flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
            <User className="w-5 h-5 mr-3" />
            Profile
          </Link>
          <Link to="/calendar" className="flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
            <Calendar className="w-5 h-5 mr-3" />
            Calendar
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-6 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}