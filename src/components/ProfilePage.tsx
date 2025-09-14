import React from 'react';
import { User, GraduationCap, MapPin, IndianRupee, Award, Bell, Edit } from 'lucide-react';
import { User as UserType, Notification } from '../types';

interface ProfilePageProps {
  user: UserType;
  notifications: Notification[];
  getText: (key: string) => string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, notifications, getText }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-blue-900" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-blue-200 text-lg">{user.email}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="flex items-center space-x-1 text-blue-200">
                  <GraduationCap className="h-4 w-4" />
                  <span>{user.college}</span>
                </span>
                <span className="flex items-center space-x-1 text-blue-200">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </span>
              </div>
            </div>
            <div className="ml-auto">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <Edit className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Academic Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Academic Information</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">College Details</h3>
                <p className="text-gray-600">{user.college}</p>
                <p className="text-gray-600">{user.university}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Academic Performance</h3>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-lg font-semibold text-gray-900">{user.marks}%</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Preferences</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Location Preference</h3>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <span className="text-gray-600">{user.location}</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Stipend Preference</h3>
                <div className="flex items-center space-x-2">
                  <IndianRupee className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">₹{user.stipendPreference}/month</span>
                </div>
              </div>

              {/* Recent Notifications */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-blue-500" />
                  <span>Recent Notifications</span>
                </h3>
                {notifications.length > 0 ? (
                  <div className="space-y-2">
                    {notifications.slice(0, 3).map((notification) => (
                      <div
                        key={notification.id}
                        className="p-3 bg-white rounded border-l-4 border-blue-500"
                      >
                        <p className="text-sm text-gray-600">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notification.createdAt}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No new notifications</p>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-medium transition-colors">
                Search Internships
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-medium transition-colors">
                Upload Resume
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg font-medium transition-colors">
                View Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;