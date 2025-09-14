import React, { useState } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  getText: (key: string) => string;
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose, getText }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Parasol Bot, your internship assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const predefinedResponses: Record<string, string> = {
    'how to apply for aicte internship': 'To apply for AICTE internships: 1) Create your profile on Let\'s Intern 2) Search for government internships 3) Click "Apply Now" on AICTE certified programs 4) Submit required documents. Government internships offer ₹8,000-₹15,000 stipend!',
    'what is stipend': 'A stipend is a monthly payment provided to interns during their internship period. Government AICTE internships offer ₹8,000-₹15,000, while private internships range from ₹5,000-₹25,000 depending on the company and role.',
    'where can i see notifications': 'You can see notifications by clicking the bell icon (🔔) in the top navigation bar. Notifications include new internship matches, application updates, and important announcements.',
    'how does ai recommendation work': 'Our AI analyzes your uploaded resume to extract skills, education, and experience. Then it matches you with relevant internships based on skill compatibility, location preferences, and stipend requirements.',
    'what documents needed': 'For most internships you need: 1) Updated resume/CV 2) Academic transcripts 3) College ID card 4) Passport size photo 5) Cover letter (for some positions). Government internships may require additional verification documents.',
    'difference between government and private': 'Government internships (AICTE) offer: Official certification, structured programs, fixed stipends (₹8K-₹15K), 1-3 months duration. Private internships offer: Higher stipends (₹5K-₹25K), flexible duration (2-6 months), diverse domains, startup experience.',
    'how to upload resume': 'Go to "Upload Resume" section, drag & drop your PDF resume or click "Choose File". Our AI will automatically extract your skills and recommend matching internships based on your profile.',
    'help': 'I can help you with: 🎓 AICTE internship applications 💰 Stipend information 🔔 Notifications 🤖 AI recommendations 📄 Document requirements 🏢 Government vs Private internships'
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Find matching response
    const lowerInput = inputMessage.toLowerCase();
    let botResponse = "I'm sorry, I didn't understand that. You can ask me about:\n\n🎓 How to apply for AICTE internship\n💰 What is stipend\n🔔 Where can I see notifications\n🤖 How does AI recommendation work\n📄 What documents needed\n🏢 Difference between government and private internships\n📤 How to upload resume\n❓ Help";

    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(key)) {
        botResponse = response;
        break;
      }
    }

    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-xl shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-900 text-white p-4 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <Bot className="h-6 w-6 text-blue-900" />
          </div>
          <div>
            <h3 className="font-semibold">Parasol Bot</h3>
            <p className="text-xs text-blue-200">Internship Assistant</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-blue-200 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-lg ${
              message.isUser
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}>
              <div className="flex items-start space-x-2">
                {!message.isUser && (
                  <Bot className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                )}
                <div>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isUser ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
                {message.isUser && (
                  <User className="h-4 w-4 mt-0.5 text-blue-200 flex-shrink-0" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about internships..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;