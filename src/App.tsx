import React, { useState, useEffect } from 'react';
import { Search, Upload, MessageCircle, Bell, User, Menu, X, Globe, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import ProfilePage from './components/ProfilePage';
import SearchPage from './components/SearchPage';
import ResumeUpload from './components/ResumeUpload';
import Chatbot from './components/Chatbot';
import NotificationsPanel from './components/NotificationsPanel';
import { User as UserType, Internship, Notification } from './types';
import { mockInternships, mockNotifications } from './data/mockData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [language, setLanguage] = useState<'en' | 'mr'>('en');
  const [internships, setInternships] = useState<Internship[]>(mockInternships);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Load user data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setCurrentUser(user);
      setNotifications(mockNotifications.filter(n => n.userId === user.id));
    }
  }, []);

  const handleLogin = (email: string, password: string) => {
    // Mock login logic
    const user: UserType = {
      id: Date.now(),
      name: email.split('@')[0],
      email,
      college: 'Sample College',
      university: 'Sample University',
      marks: 85,
      skills: ['JavaScript', 'React', 'Python'],
      location: 'Mumbai',
      stipendPreference: '10000-15000'
    };
    
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    setNotifications(mockNotifications.filter(n => n.userId === user.id));
    setShowAuthModal(false);
    setCurrentPage('profile');
  };

  const handleSignup = (userData: any) => {
    const user: UserType = {
      id: Date.now(),
      ...userData,
      skills: userData.skills.split(',').map((s: string) => s.trim())
    };
    
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    setShowAuthModal(false);
    setCurrentPage('profile');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setCurrentPage('home');
    setNotifications([]);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mr' : 'en');
  };

  const getText = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      'home': { en: 'Home', mr: 'मुख्यपृष्ठ' },
      'search': { en: 'Search Internships', mr: 'इंटर्नशिप शोधा' },
      'upload': { en: 'Upload Resume', mr: 'रेझ्युमे अपलोड करा' },
      'profile': { en: 'Profile', mr: 'प्रोफाइल' },
      'about': { en: 'About Us', mr: 'आमच्याबद्दल' },
      'login': { en: 'Login', mr: 'लॉगिन' },
      'signup': { en: 'Sign Up', mr: 'साइन अप' },
      'tagline': { en: 'Your Smart Gateway to Internships', mr: 'इंटर्नशिपसाठी तुमचा स्मार्ट गेटवे' }
    };
    return translations[key]?.[language] || key;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        currentUser={currentUser}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onAuthClick={() => setShowAuthModal(true)}
        onLogout={handleLogout}
        onNotificationsClick={() => setShowNotifications(!showNotifications)}
        language={language}
        onLanguageToggle={toggleLanguage}
        getText={getText}
        notificationCount={notifications.length}
      />

      <main className="pt-16">
        {currentPage === 'home' && (
          <LandingPage 
            onGetStarted={() => currentUser ? setCurrentPage('search') : setShowAuthModal(true)}
            getText={getText}
          />
        )}
        {currentPage === 'profile' && currentUser && (
          <ProfilePage 
            user={currentUser} 
            notifications={notifications}
            getText={getText}
          />
        )}
        {currentPage === 'search' && (
          <SearchPage 
            internships={internships}
            currentUser={currentUser}
            getText={getText}
          />
        )}
        {currentPage === 'upload' && (
          <ResumeUpload 
            onUpload={() => setCurrentPage('recommendations')}
            getText={getText}
          />
        )}
      </main>

      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onModeSwitch={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
          getText={getText}
        />
      )}

      {showNotifications && (
        <NotificationsPanel
          notifications={notifications}
          onClose={() => setShowNotifications(false)}
          getText={getText}
        />
      )}

      <Chatbot
        isOpen={showChatbot}
        onClose={() => setShowChatbot(false)}
        getText={getText}
      />

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setShowChatbot(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-40"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}

export default App;