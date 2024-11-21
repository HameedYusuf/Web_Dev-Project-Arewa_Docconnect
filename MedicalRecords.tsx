import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

export function MedicalRecords() {
  const records = [
    {
      id: 1,
      type: 'Lab Results',
      date: '2024-03-10',
      doctor: 'Dr. Sarah Johnson',
      description: 'Blood Test Results',
    },
    {
      id: 2,
      type: 'Prescription',
      date: '2024-03-05',
      doctor: 'Dr. Michael Chen',
      description: 'Medication for Hypertension',
    },
    {
      id: 3,
      type: 'Imaging',
      date: '2024-02-28',
      doctor: 'Dr. Emily Brown',
      description: 'Chest X-Ray Report',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Medical Records</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Upload New Record
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="space-y-4">
            {records.map((record) => (
              <div
                key={record.id}
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <FileText className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        {record.type}
                      </h4>
                      <p className="text-sm text-gray-500">{record.description}</p>
                      <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                        <span>{record.doctor}</span>
                        <span>•</span>
                        <span>{new Date(record.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-500">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-500">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}