import React from 'react';

const Header: React.FC = () => {

  return (
    <header className="bg-white border-b border-gray-200 transition-colors duration-300 flex-shrink-0">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center max-w-7xl">
        <div className="flex items-center space-x-1 font-sans text-lg font-extrabold">
          <span className="text-black">CV</span>
          <span className="text-purple-600">Analyzer</span>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium text-black">
          <a href="#" className="hover:underline">How it works</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center space-x-1 hover:underline">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.1.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
          <div className="flex items-center space-x-1">
            <svg className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <span>2.1k</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;