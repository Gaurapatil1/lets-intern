import React, { useState } from 'react';
import { Search, Filter, MapPin, IndianRupee, Clock, Building2, ExternalLink } from 'lucide-react';
import { Internship, User } from '../types';

interface SearchPageProps {
  internships: Internship[];
  currentUser: User | null;
  getText: (key: string) => string;
}

const SearchPage: React.FC<SearchPageProps> = ({ internships, currentUser, getText }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    domain: '',
    type: '',
    stipend: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.domain.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !filters.location || internship.location === filters.location;
    const matchesDomain = !filters.domain || internship.domain === filters.domain;
    const matchesType = !filters.type || internship.type === filters.type;
    
    return matchesSearch && matchesLocation && matchesDomain && matchesType;
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      domain: '',
      type: '',
      stipend: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Internships</h1>
        <p className="text-gray-600">
          Find the perfect internship opportunity from our database of {internships.length} available positions
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, company, or domain..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Locations</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Pune">Pune</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Domain</label>
                <select
                  value={filters.domain}
                  onChange={(e) => handleFilterChange('domain', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Domains</option>
                  <option value="AI/ML">AI/ML</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Types</option>
                  <option value="government">Government</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredInternships.length} internship{filteredInternships.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Internship Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredInternships.map((internship) => (
          <div
            key={internship.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Card Header */}
            <div className={`p-4 ${internship.type === 'government' ? 'bg-blue-900' : 'bg-gradient-to-r from-purple-600 to-pink-600'} text-white`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-1">{internship.title}</h3>
                  <p className="text-sm opacity-90">{internship.company}</p>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  internship.type === 'government' ? 'bg-yellow-400 text-blue-900' : 'bg-white text-purple-600'
                }`}>
                  {internship.type === 'government' ? 'GOV' : 'PVT'}
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{internship.location}</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-600">
                  <IndianRupee className="h-4 w-4" />
                  <span className="text-sm">{internship.stipend}</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{internship.duration}</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-600">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm">{internship.domain}</span>
                </div>
              </div>

              {/* Apply Button */}
              <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                currentUser 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!currentUser}
              >
                <span>{currentUser ? 'Apply Now' : 'Login to Apply'}</span>
                <ExternalLink className="h-4 w-4" />
              </button>

              {internship.type === 'government' && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  AICTE Certified Program
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredInternships.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No internships found matching your criteria.</p>
          <button
            onClick={clearFilters}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;