# CV Analyzer

An AI-powered application that analyzes CVs against job positions to provide comprehensive insights including company information, CV compatibility scoring, and interview preparation guidance.

## 🚀 Features

- **CV Upload & Analysis**: Support for PDF and Word document formats
- **Job Position Matching**: Paste job URLs for intelligent comparison
- **Company Insights**: Automated research on company culture, tech stack, and reviews
- **CV Compatibility Scoring**: Detailed analysis of strengths, gaps, and recommendations
- **Interview Preparation**: Likely questions, technical areas, and preparation tips
- **Modern UI**: Responsive React interface with dark/light theme support

## 🏗️ Architecture

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend**: FastAPI + CrewAI + LangChain for AI processing
- **AI Features**: PDF parsing, web scraping, intelligent analysis

## 📋 Prerequisites

### System Requirements
- **Node.js**: 18+ and npm
- **Python**: 3.8+ and pip
- **Git**: For version control

### API Keys
- **SERPER_API_KEY**: Required for web scraping (get from [serper.dev](https://serper.dev))

## 🛠️ Quick Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd cvanalyzer
```

### 2. Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Frontend will be available at `http://localhost:5173`

### 3. Backend Setup
```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
echo "SERPER_API_KEY=your_serper_api_key_here" > .env

# Start backend server
cd app
uvicorn main:app --reload
```
Backend API will be available at `http://localhost:8000`

## 🔧 Development Commands

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Backend
```bash
cd backend/app
uvicorn main:app --reload    # Start with auto-reload
uvicorn main:app --host 0.0.0.0 --port 8000    # Custom host/port
```

## 📝 Current Implementation Status

### ✅ Completed
- React frontend with file upload and job URL input
- Responsive UI with theme support
- FastAPI backend structure with CORS configuration
- File upload handling with temporary storage
- Type definitions and component architecture

### 🚧 In Development
- CV parsing and analysis logic (currently uses mock data)
- CrewAI integration for intelligent job matching
- Frontend-backend API integration
- Error handling and validation

### 📋 Next Steps
1. Complete `CVAnalysisCrew.analyze_cv()` implementation
2. Replace mock data with real API calls
3. Add comprehensive error handling
4. Implement file size limits and validation
5. Add test coverage

## 🔍 API Endpoints

### POST /analyze-cv
Upload and analyze a CV file against job requirements.

**Request:**
- Content-Type: `multipart/form-data`
- Body: `file` (PDF or Word document)

**Response:**
```json
{
  "analysis": "Detailed analysis text",
  "positions": ["Software Engineer", "Full Stack Developer"],
  "skills": ["Python", "JavaScript", "React"],
  "experience": [...],
  "education": [...],
  "job_matches": [...]
}
```

## 🗂️ Project Structure

```
cvanalyzer/
├── src/                    # React frontend
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── context/           # React contexts
│   └── types.ts           # TypeScript definitions
├── backend/               # FastAPI backend
│   ├── app/
│   │   ├── main.py        # FastAPI application
│   │   └── crew/          # CrewAI implementation
│   └── requirements.txt   # Python dependencies
├── package.json           # Node.js dependencies
└── CLAUDE.md             # Claude Code documentation
```

## 🐛 Troubleshooting

### Common Issues

**Frontend won't start:**
- Ensure Node.js 18+ is installed
- Run `npm install` to install dependencies
- Check for port conflicts (default: 5173)

**Backend won't start:**
- Ensure Python 3.8+ is installed
- Activate virtual environment before running
- Check SERPER_API_KEY is set in .env file
- Verify all dependencies installed with `pip install -r requirements.txt`

**File upload not working:**
- Currently using mock data - backend implementation needed
- Check browser console for errors
- Ensure file is PDF or Word format

### Development Tips
- Use browser dev tools to inspect network requests
- Check console for frontend errors
- Monitor backend logs for API issues
- Verify CORS settings if experiencing cross-origin issues

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues and questions:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include system information and error messages

---

**Note**: This application is currently in development. The frontend is fully functional with mock data, while the backend AI analysis features are being implemented.