import React, { useState } from 'react';

const exampleRepos = ['FastAPI', 'Streamlit', 'Flask', 'api-analytics', 'Monkeytype'];

const UploadSection: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState('');

  const handleDiagram = () => {
    // Implement diagram generation logic here or trigger parent callback if needed
    alert(`Diagram for: ${repoUrl}`);
  };

  const handleExampleClick = (repo: string) => {
    setRepoUrl(`https://github.com/${repo}`);
  };

  return (
    <div className="relative bg-gold-50 rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      {/* Decorative stars */}
      <div className="absolute -top-6 -left-6 text-blue-600">
        <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
        </svg>
      </div>
      <div className="absolute -bottom-6 -right-6 text-blue-600">
        <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
        </svg>
      </div>

      <div className="flex space-x-4">
        <input
          type="text"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          placeholder="https://github.com/username/repo"
          className="flex-grow px-4 py-3 rounded-md border border-blue-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
        />
        <button
          onClick={handleDiagram}
          disabled={!repoUrl}
          className={`px-6 py-3 rounded-md font-semibold shadow-md transition-colors duration-200 ${
            repoUrl ? 'bg-blue-700 hover:bg-blue-800 text-white' : 'bg-blue-300 cursor-not-allowed text-gray-200'
          }`}
        >
          Diagram
        </button>
      </div>

      <p className="mt-4 text-sm text-black">Try these example repositories:</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {exampleRepos.map((repo) => (
          <button
            key={repo}
            onClick={() => handleExampleClick(repo)}
            className="bg-blue-700 text-white px-3 py-1 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
          >
            {repo}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UploadSection;