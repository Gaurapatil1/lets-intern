import React from 'react';
import { ArrowRight, Award, Building2, MapPin, Clock, IndianRupee, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
  getText: (key: string) => string;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, getText }) => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-300 via-rose-500 to-rose-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
              <img
                src="/emblem.svg.png"
                alt="Government of India"
                className="w-30 h-30 bg-white p-1 rounded"
              />
              </div>
              {/* <Sparkles className="h-8 w-8 text" /> */}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Intern
              <span className="block text-yellow-400 text-2xl md:text-3xl font-normal mt-2">
                {getText('tagline')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-red-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-powered platform connecting students with government AICTE internships and premium private opportunities. 
              Find your perfect internship match today.
            </p>

            <button
              onClick={onGetStarted}
              className="bg-yellow-400 hover:bg-yellow-500 text-red-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Let's Intern?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform offers comprehensive internship solutions for students across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Government Verified</h3>
              <p className="text-gray-600">
                Access official AICTE internship schemes and government-backed opportunities with guaranteed authenticity and credibility.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Matching</h3>
              <p className="text-gray-600">
                Upload your resume and let our AI recommend perfect internships based on your skills, interests, and career goals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Partnerships</h3>
              <p className="text-gray-600">
                Connect with top private companies and startups offering high-quality paid internship opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Internship Categories
            </h2>
            <p className="text-xl text-gray-600">
              Explore diverse opportunities across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Government Internships */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-red-900 text-white p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-red-900 font-bold text-sm">GOV</span>
                  </div>
                  <h3 className="text-2xl font-bold">Government Internships</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-red-700" />
                    <span className="text-gray-700">AICTE Certified Programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <IndianRupee className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">₹8,000 - ₹15,000 Stipend</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">1-3 Months Duration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-red-300" />
                    <span className="text-gray-700">Pan-India Locations</span>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-600 text-sm">
                    Domains: AI/ML, Data Science, Cybersecurity, IoT, Blockchain
                  </p>
                </div>
              </div>
            </div>

            {/* Private Internships */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-10 w-10" />
                  <h3 className="text-2xl font-bold">Private Internships</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Top Companies & Startups</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <IndianRupee className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">₹5,000 - ₹25,000 Stipend</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">2-6 Months Duration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">Major IT Hubs</span>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-600 text-sm">
                    Domains: Web Development, Mobile Apps, Design, Marketing, Finance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Internship?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of students who have found their dream internships through Let's Intern
          </p>
          <button
            onClick={onGetStarted}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start Your Journey Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;