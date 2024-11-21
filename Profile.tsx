import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit } from 'lucide-react';

export function Profile() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-32"></div>
        <div className="px-6 pb-6">
          <div className="relative flex items-center">
            <div className="-mt-16">
              <div className="relative">
                <div className="h-32 w-32 bg-white rounded-full p-2">
                  <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full text-white hover:bg-indigo-700">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="ml-6 -mt-6">
              <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
              <p className="text-sm text-gray-500">Patient ID: #123456</p>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="border-t border-gray-200">
          <dl>
            <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="text-sm text-gray-900">john.doe@example.com</dd>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd className="text-sm text-gray-900">+1 (555) 123-4567</dd>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div>
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="text-sm text-gray-900">123 Main St, City, Country</dd>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                  <dd className="text-sm text-gray-900">January 1, 1990</dd>
                </div>
              </div>
            </div>
          </dl>
        </div>

        {/* Medical Information */}
        <div className="border-t border-gray-200 px-6 py-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4">Medical Information</h4>
          <div className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Blood Type</dt>
              <dd className="text-sm text-gray-900">A+</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Allergies</dt>
              <dd className="text-sm text-gray-900">Penicillin, Peanuts</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Chronic Conditions</dt>
              <dd className="text-sm text-gray-900">None</dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}