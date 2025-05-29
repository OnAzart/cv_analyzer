import React, { useState } from 'react';
import { AnalysisData } from '../types';
import CompanySection from './analysis/CompanySection';
import CVMatchSection from './analysis/CVMatchSection';
import InterviewSection from './analysis/InterviewSection';

interface AnalysisResultsProps {
  data: AnalysisData;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'company' | 'cv' | 'interview'>('all');

  return (
    <div className="h-full flex flex-col animate-fadeIn">
      <div className="flex justify-center mb-2 flex-shrink-0">
        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg inline-flex p-0.5 border border-gray-200">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('company')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              activeTab === 'company'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Company
          </button>
          <button
            onClick={() => setActiveTab('cv')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              activeTab === 'cv'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            CV Match
          </button>
          <button
            onClick={() => setActiveTab('interview')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              activeTab === 'interview'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Interview
          </button>
        </div>
      </div>

      <div className="space-y-2 flex-1 overflow-auto custom-scrollbar">
        {(activeTab === 'all' || activeTab === 'company') && (
          <CompanySection company={data.company} />
        )}
        
        {(activeTab === 'all' || activeTab === 'cv') && (
          <CVMatchSection cvMatch={data.cvMatch} />
        )}
        
        {(activeTab === 'all' || activeTab === 'interview') && (
          <InterviewSection interview={data.interview} />
        )}
      </div>
    </div>
  );
};

export default AnalysisResults;