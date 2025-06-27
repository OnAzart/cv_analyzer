import React, { useState } from 'react';

const UploadSection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobUrl, setJobUrl] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    if (!file) {
      setError('Please select a PDF file.');
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      if (jobUrl) {
        formData.append('job_url', jobUrl);
      }
      const response = await fetch('http://localhost:8000/analyze-cv', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to analyze CV');
      }
      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-gold-50 rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1 text-black">Upload your CV (PDF only):</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full text-black"
          />
      </div>
        <div>
          <label className="block font-semibold mb-1 text-black">Job Position URL (optional):</label>
        <input
          type="text"
            value={jobUrl}
            onChange={(e) => setJobUrl(e.target.value)}
            placeholder="https://example.com/job-posting"
            className="w-full px-4 py-2 rounded-md border border-blue-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
        />
        </div>
        <button
          type="submit"
          disabled={loading || !file}
          className={`px-6 py-3 rounded-md font-semibold shadow-md transition-colors duration-200 ${
            file ? 'bg-blue-700 hover:bg-blue-800 text-white' : 'bg-blue-300 cursor-not-allowed text-gray-200'
          }`}
        >
          {loading ? 'Analyzing...' : 'Analyze CV'}
        </button>
      </form>
      {error && <div className="mt-4 text-red-600">{error}</div>}
      {result && (
        <div className="mt-6 bg-white rounded-md p-4 shadow">
          <h3 className="font-bold mb-2 text-black">Analysis Result:</h3>
          <pre className="text-xs text-black whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
      </div>
      )}
    </div>
  );
};

export default UploadSection;