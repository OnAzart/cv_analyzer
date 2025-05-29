import React, { useState } from 'react';
import { Building2, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Company } from '../../types';

interface CompanySectionProps {
  company: Company;
}

const CompanySection: React.FC<CompanySectionProps> = ({ company }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-200">
      <div
        className="p-3 cursor-pointer flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
            <Building2 className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Company Analysis
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-base font-medium text-gray-900 mb-1">
                {company.name}
              </h3>
              <p className="text-gray-600 mb-2 text-sm">
                {company.overview}
              </p>
              
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-900 font-medium text-sm">
                    {company.rating}
                  </span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-600 text-xs">
                  Employee Rating
                </span>
              </div>
              
              <div className="mb-2">
                <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">
                  Company Culture
                </h4>
                <p className="text-gray-600 text-sm">
                  {company.culture}
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">
                Employee Reviews
              </h4>
              <ul className="space-y-1.5">
                {company.reviews.slice(0, 2).map((review, index) => (
                  <li key={index} className="bg-gray-50 p-2 rounded-lg text-gray-600 text-xs">
                    "{review}"
                  </li>
                ))}
              </ul>
              
              <div className="mt-2">
                <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1">
                  {company.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanySection;