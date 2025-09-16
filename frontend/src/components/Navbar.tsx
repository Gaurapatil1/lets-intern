import React, { useState } from 'react';
import { Search, Upload, User, Bell, Menu, X, Globe, LogOut } from 'lucide-react';
import { User as UserType } from '../types';

interface NavbarProps {
  currentUser: UserType | null;
  currentPage: string;
  onPageChange: (page: string) => void;
  onAuthClick: () => void;
  onLogout: () => void;
  onNotificationsClick: () => void;
  language: 'en' | 'mr';
  onLanguageToggle: () => void;
  getText: (key: string) => string;
  notificationCount: number;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  currentPage,
  onPageChange,
  onAuthClick,
  onLogout,
  onNotificationsClick,
  language,
  onLanguageToggle,
  getText,
  notificationCount
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', icon: null },
    { key: 'search', icon: Search },
    { key: 'upload', icon: Upload },
    { key: 'profile', icon: User, requiresAuth: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-red-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {/* Government Emblem Image */}
              <img
                src="/emblem.svg.png"
                alt="Government of India"
                className="w-10 h-10 bg-white p-1 rounded"
              />

              <div>
                <h1 className="text-white font-bold text-xl">Let's Intern</h1>
                <p className="text-red-200 text-xs hidden sm:block">
                  {getText('tagline')}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.requiresAuth && !currentUser) return null;
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => onPageChange(item.key)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.key
                      ? 'bg-red-700 text-white'
                      : 'text-red-200 hover:text-white hover:bg-red-800'
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span>{getText(item.key)}</span>
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">

            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="flex items-center space-x-1 text-red-200 hover:text-white p-2 rounded-md hover:bg-red-800 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            {/* Auth Section */}
            {currentUser ? (
              <div className="flex items-center space-x-3">
                {/* Notifications */}
                <button
                  onClick={onNotificationsClick}
                  className="relative p-2 text-red-200 hover:text-white hover:bg-red-800 rounded-md transition-colors"
                >
                  <Bell className="h-5 w-5" />
                  {notificationCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </button>

                {/* User Info */}
                <div className="flex items-center space-x-2 text-white">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block text-sm">{currentUser.name}</span>
                </div>

                {/* Logout */}
                <button
                  onClick={onLogout}
                  className="p-2 text-red-200 hover:text-white hover:bg-red-800 rounded-md transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-yellow-400 hover:bg-yellow-500 text-red-900 px-4 py-2 rounded-md font-medium transition-colors"
              >
                {getText('login')}
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-red-200 hover:text-white hover:bg-red-800 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-red-800 rounded-lg mt-2 mb-4 p-4">
            {navItems.map((item) => {
              if (item.requiresAuth && !currentUser) return null;
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => {
                    onPageChange(item.key);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-3 py-3 rounded-md text-left transition-colors ${
                    currentPage === item.key
                      ? 'bg-red-700 text-white'
                      : 'text-red-200 hover:text-white hover:bg-red-700'
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span>{getText(item.key)}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

