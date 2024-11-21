import React, { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, Phone } from 'lucide-react';

export function VideoCall() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Video Consultation</h2>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Video Area */}
        <div className="aspect-video bg-gray-900 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Video className="h-16 w-16 text-gray-500" />
            <p className="text-gray-500 mt-4">Waiting for connection...</p>
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-3 rounded-full ${
                  isMuted ? 'bg-red-500' : 'bg-gray-700'
                } hover:bg-opacity-80 transition-colors`}
              >
                {isMuted ? (
                  <MicOff className="h-6 w-6 text-white" />
                ) : (
                  <Mic className="h-6 w-6 text-white" />
                )}
              </button>
              <button
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`p-3 rounded-full ${
                  !isVideoOn ? 'bg-red-500' : 'bg-gray-700'
                } hover:bg-opacity-80 transition-colors`}
              >
                {isVideoOn ? (
                  <Video className="h-6 w-6 text-white" />
                ) : (
                  <VideoOff className="h-6 w-6 text-white" />
                )}
              </button>
              <button className="p-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors">
                <Phone className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Call Info */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Dr. Sarah Johnson</h3>
              <p className="text-sm text-gray-500">General Consultation</p>
            </div>
            <div className="text-sm text-gray-500">
              Duration: 00:00:00
            </div>
          </div>
        </div>
      </div>

      {/* Connection Status */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Connection Status: Excellent</span>
        </div>
      </div>
    </div>
  );
}