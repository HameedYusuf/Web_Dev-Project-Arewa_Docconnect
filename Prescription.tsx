import React from 'react';
import { Pill, Calendar, Clock, Download } from 'lucide-react';

export function Prescription() {
  const prescriptions = [
    {
      id: 1,
      medication: 'Amoxicillin',
      dosage: '500mg',
      frequency: 'Three times daily',
      duration: '7 days',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-03-10',
      status: 'Active',
    },
    {
      id: 2,
      medication: 'Ibuprofen',
      dosage: '400mg',
      frequency: 'As needed',
      duration: '5 days',
      doctor: 'Dr. Michael Chen',
      date: '2024-03-05',
      status: 'Completed',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Prescriptions</h2>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="space-y-6">
            {prescriptions.map((prescription) => (
              <div
                key={prescription.id}
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Pill className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-lg font-medium text-gray-900">
                          {prescription.medication}
                        </h4>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            prescription.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {prescription.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {prescription.dosage} - {prescription.frequency}
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2" />
                          Duration: {prescription.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          Prescribed: {new Date(prescription.date).toLocaleDateString()}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Prescribed by: {prescription.doctor}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-500">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}