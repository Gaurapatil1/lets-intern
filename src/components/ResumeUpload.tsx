import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

interface ResumeUploadProps {
  onUpload: () => void;
  getText: (key: string) => string;
}

const ResumeUpload: React.FC<ResumeUploadProps> = ({ onUpload, getText }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedSkills, setExtractedSkills] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      processResume(file);
    }
  };

  const processResume = async (file: File) => {
    setIsProcessing(true);
    
    // Mock processing delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock extracted skills
    const mockSkills = ['JavaScript', 'React', 'Python', 'Machine Learning', 'SQL', 'Git'];
    setExtractedSkills(mockSkills);
    
    // Mock recommendations
    const mockRecommendations = [
      {
        id: 1,
        title: 'AI Research Intern',
        company: 'AICTE',
        match: 95,
        reason: 'Perfect match for your Machine Learning and Python skills'
      },
      {
        id: 2,
        title: 'Web Development Intern',
        company: 'PrivateTech',
        match: 88,
        reason: 'Strong alignment with your JavaScript and React experience'
      },
      {
        id: 3,
        title: 'Data Science Intern',
        company: 'AICTE',
        match: 82,
        reason: 'Your Python and SQL skills are highly relevant'
      }
    ];
    
    setRecommendations(mockRecommendations);
    setIsProcessing(false);
    setShowResults(true);
  };

  const dragOverHandler = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      processResume(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI-Powered Resume Analysis</h1>
        <p className="text-gray-600 text-lg">
          Upload your resume and get personalized internship recommendations powered by AI
        </p>
      </div>

      {!showResults ? (
        <div className="bg-white rounded-xl shadow-lg p-8">
          {!uploadedFile ? (
            <div
              onDragOver={dragOverHandler}
              onDrop={dropHandler}
              className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors cursor-pointer"
            >
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
                id="resume-upload"
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload your resume</h3>
                <p className="text-gray-500 mb-4">
                  Drag and drop your PDF resume here, or click to browse
                </p>
                <div className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
                  Choose File
                </div>
              </label>
            </div>
          ) : (
            <div className="text-center">
              {isProcessing ? (
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="h-8 w-8 text-blue-600 animate-spin" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing your resume...</h3>
                    <p className="text-gray-600">Our AI is analyzing your skills and experience</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Resume processed successfully!</h3>
                    <p className="text-gray-600">File: {uploadedFile.name}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-8">
          {/* Extracted Skills */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-yellow-500" />
              <span>Extracted Skills</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {extractedSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Internships</h2>
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{rec.title}</h3>
                      <p className="text-gray-600">{rec.company}</p>
                    </div>
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        rec.match >= 90 ? 'bg-green-100 text-green-800' :
                        rec.match >= 80 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {rec.match}% Match
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{rec.reason}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Upload Another Resume */}
          <div className="text-center">
            <button
              onClick={() => {
                setUploadedFile(null);
                setShowResults(false);
                setExtractedSkills([]);
                setRecommendations([]);
              }}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Upload Another Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;