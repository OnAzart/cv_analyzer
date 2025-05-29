import React, { useState, useEffect } from 'react';
import AnalysisResults from '../components/AnalysisResults';
import { AnalysisData } from '../types';

const PrepDashboard: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [jobUrl, setJobUrl] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!cvFile || !jobUrl) return;

    setIsAnalyzing(true);

    // Simulate API call for analysis
    setTimeout(() => {
      const mockAnalysisData: AnalysisData = {
        company: {
          name: 'TechCorp Solutions',
          overview: 'A leading software development company focused on enterprise solutions.',
          rating: 4.2,
          reviews: [
            'Great work-life balance, but slow promotion track.',
            'Strong technical team, collaborative environment.',
            'Challenging projects with good learning opportunities.'
          ],
          culture: 'Engineering-driven with emphasis on quality code.',
          techStack: ['React', 'Node.js', 'TypeScript', 'AWS']
        },
        cvMatch: {
          overallMatch: 76,
          strengths: [
            'Strong React.js experience aligns with their tech stack.',
            'Previous work in enterprise solutions matches their focus.',
            'Test-driven development experience is valued by their team.'
          ],
          gaps: [
            'Limited AWS experience - might want to highlight any cloud work.',
            'No mention of Node.js backend experience they require.',
            'Lacks enterprise-scale deployment experience mentioned in job.'
          ],
          recommendations: [
            'Highlight any cloud platform work, even if not AWS specific.',
            'Emphasize your full-stack capabilities if you have them.',
            'Add metrics or scale details to existing projects.'
          ]
        },
        interview: {
          likelyQuestions: [
            'Describe a complex technical problem you solved with React.',
            'How do you approach testing in your frontend applications?',
            'Explain your experience with cloud deployment pipelines.',
            'How would you debug a performance issue in a React application?'
          ],
          technicalAreas: [
            'React performance optimization',
            'State management patterns',
            'API integration best practices',
            'CI/CD pipeline knowledge'
          ],
          preparationTips: [
            'Review React hooks and context API implementation details.',
            'Prepare examples of optimizing component re-renders.',
            'Study their product to mention specific improvement ideas.',
            'Prepare questions about their development workflow.'
          ]
        }
      };

      setAnalysisData(mockAnalysisData);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="h-full bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex flex-col items-center justify-center py-3 px-4 relative overflow-auto">
      {/* Enhanced Decorative elements */}
      <div className="absolute top-4 left-4 animate-pulse">
        <div className="w-6 h-6 text-purple-500 opacity-70">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>
      <div className="absolute top-8 right-4 animate-pulse delay-300">
        <div className="w-5 h-5 text-blue-400 opacity-60">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 animate-pulse delay-700">
        <div className="w-5 h-5 text-indigo-500 opacity-50">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"/>
          </svg>
        </div>
      </div>
      <div className="absolute top-1/3 right-8 animate-pulse delay-500">
        <div className="w-4 h-4 text-purple-300 opacity-40">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/3 right-4 animate-pulse delay-1000">
        <div className="w-3 h-3 text-blue-300 opacity-30">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
      </div>

      {/* Enhanced Title Block - Larger and Higher */}
      <div className="text-center mb-4 mt-2">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
          Is your CV suitable for position?
        </h1>
        
        {/* Compact Explanatory Text */}
        <p className="text-sm text-gray-700 mb-1 max-w-3xl mx-auto">
          Upload your CV and provide a job position URL to get detailed analysis on your match.
        </p>
        <p className="text-sm text-gray-600 mb-0 max-w-3xl mx-auto">
          Get insights on company culture, CV compatibility, and interview preparation.
        </p>
      </div>

      {/* Enhanced Input Block with More Shadow */}
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-5xl w-full border-2 border-gray-200 backdrop-blur-sm bg-white/95 transform hover:scale-[1.01] transition-all duration-300">
        <div className="flex gap-4 items-center justify-center">
          {/* CV Upload Button */}
          <div>
            <input
              id="cv-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="cv-upload"
              className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-xl cursor-pointer shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 text-sm transform hover:scale-105"
            >
              CV
            </label>
          </div>

          {/* Job URL Input */}
          <div className="flex-1 max-w-2xl">
            <input
              id="job-url"
              type="url"
              value={jobUrl}
              onChange={(e) => setJobUrl(e.target.value)}
              placeholder="https://example.com/job-position"
              className="w-full h-14 px-4 rounded-xl border-2 border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:shadow-xl bg-white text-gray-900 text-base transition-all duration-200"
            />
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={!cvFile || !jobUrl || isAnalyzing}
            className={`h-14 px-6 font-bold rounded-xl shadow-lg transition-all duration-200 text-base transform hover:scale-105 ${
              !cvFile || !jobUrl || isAnalyzing
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white hover:shadow-xl'
            }`}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>

        {/* File name display */}
        {cvFile && (
          <div className="mt-2 text-xs text-gray-600 text-center">
            Selected: {cvFile.name}
          </div>
        )}
      </div>

      {/* Beautiful Arrow Pointing to URL Input */}
      <div className="relative mt-6 flex justify-center">
        <div className="flex flex-col items-center animate-pulse">
          {/* Clean Simple Arrow */}
          <div className="relative">
            <svg
              className="w-12 h-16 text-purple-400 drop-shadow-lg"
              viewBox="0 0 48 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main Arrow Shaft */}
              <line
                x1="24" y1="56"
                x2="24" y2="16"
                stroke="#a855f7"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Left Arrow Direction Line */}
              <line
                x1="24" y1="16"
                x2="12" y2="28"
                stroke="#a855f7"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Right Arrow Direction Line */}
              <line
                x1="24" y1="16"
                x2="36" y2="28"
                stroke="#a855f7"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          
          {/* Stylized Label */}
          <div className="mt-3 relative">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold tracking-wide">
              Put URL of position
            </div>
            {/* Small decorative elements around the label */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {analysisData && (
        <div className="mt-3 w-full max-w-4xl flex-1 min-h-0">
          <AnalysisResults data={analysisData} />
        </div>
      )}
    </div>
  );
};

export default PrepDashboard;