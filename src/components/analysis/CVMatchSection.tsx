import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp, FileText, XCircle } from 'lucide-react';
import { CVMatch } from '../../types';

interface CVMatchSectionProps {
  cvMatch: CVMatch;
}

const CVMatchSection: React.FC<CVMatchSectionProps> = ({ cvMatch }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-200">
      <div
        className="p-3 cursor-pointer flex justify-between items-center bg-gradient-to-r from-purple-50 to-pink-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <FileText className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            CV Match & Gaps
          </h2>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </div>
      
      {isExpanded && (
        <div className="p-3 border-t border-gray-200 animate-expandDown">
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-medium text-gray-900">
                Overall Match Score
              </h3>
              <span className="text-base font-bold text-gray-900">
                {cvMatch.overallMatch}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${cvMatch.overallMatch}%` }}
              ></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <h4 className="flex items-center text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                Strengths
              </h4>
              <ul className="space-y-1.5">
                {cvMatch.strengths.slice(0, 2).map((strength, index) => (
                  <li key={index} className="bg-green-50 p-2 rounded-lg text-gray-700 text-xs flex items-start">
                    <span className="mr-1 text-green-500">•</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="flex items-center text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                <XCircle className="h-3 w-3 text-red-500 mr-1" />
                Gaps
              </h4>
              <ul className="space-y-1.5">
                {cvMatch.gaps.slice(0, 2).map((gap, index) => (
                  <li key={index} className="bg-red-50 p-2 rounded-lg text-gray-700 text-xs flex items-start">
                    <span className="mr-1 text-red-500">•</span>
                    {gap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-3">
            <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
              Recommendations
            </h4>
            <ul className="space-y-1.5">
              {cvMatch.recommendations.slice(0, 2).map((recommendation, index) => (
                <li key={index} className="bg-blue-50 p-2 rounded-lg text-gray-700 text-xs flex items-start">
                  <span className="text-blue-500 font-semibold mr-1">{index + 1}.</span>
                  {recommendation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVMatchSection;