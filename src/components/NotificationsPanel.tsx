import React from 'react';
import { X, Bell, Clock } from 'lucide-react';
import { Notification } from '../types';

interface NotificationsPanelProps {
  notifications: Notification[];
  onClose: () => void;
  getText: (key: string) => string;
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ 
  notifications, 
  onClose, 
  getText 
}) => {
  return (
    <div className="fixed top-16 right-4 w-96 bg-white rounded-xl shadow-xl z-50 max-h-[70vh] overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <Bell className="h-5 w-5 text-blue-600" />
            <span>Notifications</span>
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        {notifications.length > 0 ? (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
              >
                <p className="text-gray-800 text-sm">{notification.message}</p>
                <div className="flex items-center space-x-1 mt-2 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{notification.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Bell className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No new notifications</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPanel;