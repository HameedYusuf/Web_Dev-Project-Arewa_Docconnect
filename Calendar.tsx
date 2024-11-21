import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export function Calendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  // Example appointments
  const appointments = [
    { date: 15, time: '10:00 AM', doctor: 'Dr. Sarah Johnson', type: 'General Checkup' },
    { date: 18, time: '2:30 PM', doctor: 'Dr. Michael Chen', type: 'Follow-up' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Calendar</h2>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="h-5 w-5 mr-2" />
          New Appointment
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Calendar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h3 className="text-lg font-semibold text-gray-900">
                {currentMonth} {currentYear}
              </h3>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="p-4">
          {/* Days of week */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {days.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-500"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, index) => {
              const day = index + 1;
              const hasAppointment = appointments.some((apt) => apt.date === day);

              return (
                <div
                  key={index}
                  className={`aspect-square p-2 border rounded-lg ${
                    hasAppointment
                      ? 'bg-indigo-50 border-indigo-200'
                      : 'border-gray-200'
                  } ${
                    day === currentDate.getDate()
                      ? 'bg-indigo-600 text-white'
                      : ''
                  }`}
                >
                  <div className="text-sm">{day}</div>
                  {hasAppointment && (
                    <div className="mt-1">
                      <div className="h-1 w-1 bg-indigo-600 rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="border-t border-gray-200 p-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4">
            Upcoming Appointments
          </h4>
          <div className="space-y-4">
            {appointments.map((appointment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {appointment.doctor}
                  </p>
                  <p className="text-sm text-gray-500">{appointment.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {`March ${appointment.date}`}
                  </p>
                  <p className="text-sm text-gray-500">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}