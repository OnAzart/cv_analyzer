import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-2 transition-colors duration-300 flex-shrink-0">
      <div className="container mx-auto px-4 max-w-7xl text-center text-xs font-medium text-gray-600 font-sans">
        Made by <a href="#" className="text-purple-600 hover:underline">CV Analyzer Team</a>
      </div>
    </footer>
  );
};

export default Footer;