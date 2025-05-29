import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Lightbulb, Target } from 'lucide-react';
import { Interview } from '../../types';

interface InterviewSectionProps {
  interview: Interview;
}

const InterviewSection: React.FC<InterviewSectionProps> = ({ interview }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-200">
      <div
        className="p-3 cursor-pointer flex justify-between items-center bg-gradient-to-r from-orange-50 to-yellow-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg">
            <Target className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Interview Preparation
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <h4 className="flex items-center text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                <HelpCircle className="h-3 w-3 text-orange-500 mr-1" />
                Questions
              </h4>
              <ul className="space-y-1.5">
                {interview.likelyQuestions.slice(0, 2).map((question, index) => (
                  <li key={index} className="bg-gray-50 p-2 rounded-lg text-gray-700 text-xs">
                    <span className="text-orange-500 font-semibold mr-1">Q{index + 1}:</span>
                    {question}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="flex items-center text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                <Target className="h-3 w-3 text-blue-500 mr-1" />
                Technical Areas
              </h4>
              <ul className="space-y-1.5">
                {interview.technicalAreas.slice(0, 2).map((area, index) => (
                  <li key={index} className="bg-blue-50 p-2 rounded-lg text-gray-700 text-xs flex items-start">
                    <span className="mr-1 text-blue-500">•</span>
                    {area}
                  </li>
                ))}
              </ul>
              
              <h4 className="flex items-center text-xs font-medium text-gray-700 uppercase tracking-wider mt-2 mb-1.5">
                <Lightbulb className="h-3 w-3 text-yellow-500 mr-1" />
                Tips
              </h4>
              <ul className="space-y-1.5">
                {interview.preparationTips.slice(0, 2).map((tip, index) => (
                  <li key={index} className="bg-yellow-50 p-2 rounded-lg text-gray-700 text-xs flex items-start">
                    <span className="text-yellow-600 font-semibold mr-1">{index + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewSection;