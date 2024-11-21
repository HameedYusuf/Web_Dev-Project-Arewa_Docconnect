import React from 'react';
import { Bell, Calendar, MessageSquare, FileText } from 'lucide-react';

export function Notification() {
  const notifications = [
    {
      id: 1,
      type: 'appointment',
      title: 'Upcoming Appointment',
      message: 'Reminder: You have an appointment with Dr. Sarah Johnson tomorrow at 10:00 AM',
      time: '1 hour ago',
      read: false,
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      message: 'Dr. Michael Chen sent you a message regarding your last consultation',
      time: '2 hours ago',
      read: true,
    },
    {
      id: 3,
      type: 'record',
      title: 'Medical Record Updated',
      message: 'Your latest lab results have been added to your medical records',
      time: '1 day ago',
      read: true,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'appointment':
        return <Calendar className="h-6 w-6 text-blue-500" />;
      case 'message':
        return <MessageSquare className="h-6 w-6 text-green-500" />;
      case 'record':
        return <FileText className="h-6 w-6 text-purple-500" />;
      default:
        return <Bell className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
        <button className="text-sm text-indigo-600 hover:text-indigo-500">
          Mark all as read
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 hover:bg-gray-50 transition-colors ${
                !notification.read ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </p>
                    <span className="text-sm text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
                </div>
                {!notification.read && (
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}