# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CV Analyzer is a full-stack application that analyzes CVs against job positions using AI. The frontend is built with React + TypeScript + Vite, and the backend uses FastAPI with CrewAI for intelligent CV analysis and job matching.

## Architecture

### Frontend (React + TypeScript + Vite)
- **Entry Point**: `src/main.tsx` → `src/App.tsx`
- **Main Dashboard**: `src/pages/PrepDashboard.tsx` - handles file upload, job URL input, and analysis workflow
- **Theme System**: `src/context/ThemeContext.tsx` provides dark/light mode
- **Components**: Organized in `src/components/` with analysis-specific components in `src/components/analysis/`
- **Type Definitions**: `src/types.ts` defines `Company`, `CVMatch`, `Interview`, and `AnalysisData` interfaces

### Backend (FastAPI + CrewAI)
- **Main API**: `backend/app/main.py` - FastAPI server with CORS enabled
- **CV Analysis Engine**: `backend/app/crew/cv_analysis_crew.py` - CrewAI implementation with PDF reading and web scraping capabilities
- **API Endpoint**: `POST /analyze-cv` accepts PDF/Word documents and returns structured analysis

### Key Data Flow
1. User uploads CV (PDF/Word) and provides job URL in `PrepDashboard`
2. Frontend sends file to `/analyze-cv` endpoint
3. Backend uses CrewAI agents to parse CV and scrape job requirements
4. Analysis results are displayed in `AnalysisResults` component with three sections: Company info, CV match analysis, and Interview preparation

## Development Commands

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
uvicorn main:app --reload    # Start API server on localhost:8000
```

### Setup Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate     # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Environment Variables

Backend requires:
- `SERPER_API_KEY` - for web scraping functionality (get from https://serper.dev)

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Lucide React for icons

### Backend
- FastAPI for REST API
- CrewAI for AI agent orchestration
- PyPDF for PDF parsing
- python-docx for Word document parsing
- LangChain for AI tools integration

## Important Development Notes

### Current Implementation Status
- **Frontend**: Fully functional with mock data in `PrepDashboard.tsx` (line 22-79)
- **Backend**: CV analysis crew in `cv_analysis_crew.py` needs completion - currently returns placeholder data
- **Integration**: Frontend-backend connection not yet tested with real API calls

### Critical TODOs for Production
1. **Complete Backend Implementation**: 
   - `CVAnalysisCrew.analyze_cv()` method needs proper CV parsing and job matching logic
   - Remove mock data from `MOCK_ANALYSIS_DATA` (lines 22-73 in cv_analysis_crew.py)
   - Implement proper error handling for file parsing failures

2. **API Integration**: 
   - Update frontend API call in `PrepDashboard.tsx` to replace mock setTimeout with actual fetch
   - Add proper error handling for API failures
   - Test file upload functionality end-to-end

3. **Security & Configuration**:
   - Set specific CORS origins for production (currently allows all in `main.py:16`)
   - Ensure SERPER_API_KEY is properly configured
   - Add request validation and file size limits

### File Processing Notes
- Supports PDF (.pdf) and Word (.docx, .doc) formats
- Files are stored temporarily and cleaned up after processing
- Maximum file size not currently enforced (should be added)

## Quick Development Workflow

### Getting Started Fast
1. **Check Prerequisites**: Node.js 18+, Python 3.8+, Git
2. **Setup Commands**:
   ```bash
   # Frontend (Terminal 1)
   npm install && npm run dev
   
   # Backend (Terminal 2)
   cd backend && python -m venv venv && source venv/bin/activate
   pip install -r requirements.txt
   echo "SERPER_API_KEY=your_key_here" > .env
   cd app && uvicorn main:app --reload
   ```
3. **URLs**: Frontend `http://localhost:5173`, Backend `http://localhost:8000`

### Common Development Tasks

#### Working on Frontend
- **Components**: Located in `src/components/` - follow existing patterns
- **Main Page**: `src/pages/PrepDashboard.tsx` contains upload/analysis logic
- **API Integration**: Currently mock data (line 22-79), replace with real fetch calls
- **Styling**: Uses Tailwind CSS - check existing classes before adding custom styles
- **Theme**: Dark/light mode via `src/context/ThemeContext.tsx`

#### Working on Backend
- **Main API**: `backend/app/main.py` - FastAPI app with CORS enabled
- **CV Analysis**: `backend/app/crew/cv_analysis_crew.py` - needs completion
- **Add Endpoints**: Follow FastAPI patterns, add to main.py
- **Dependencies**: Add to `requirements.txt`, reinstall with `pip install -r requirements.txt`

#### Testing Changes
- **Frontend**: Check browser console, network tab for API calls
- **Backend**: Check terminal logs, visit `http://localhost:8000/docs` for API docs
- **Full Flow**: Upload file → check network requests → verify backend receives data

### Troubleshooting Guide

#### Setup Issues
- **Node/npm errors**: Check Node.js version with `node -v` (need 18+)
- **Python venv issues**: Ensure using correct Python version, try `python3` instead of `python`
- **Port conflicts**: Kill processes using `lsof -ti:5173` or `lsof -ti:8000`, then `kill -9 <PID>`
- **Backend won't start**: Check virtual environment is activated (should see `(venv)` in terminal)

#### Development Issues
- **Frontend not updating**: Hard refresh browser (Cmd/Ctrl + Shift + R)
- **API not connecting**: Check CORS settings in `main.py:14-20`, verify both servers running
- **File upload failing**: Currently expected (mock data) - backend needs implementation
- **Styling issues**: Check Tailwind classes, use browser dev tools to inspect

#### Key Files to Check When Debugging
- `src/pages/PrepDashboard.tsx:17-80` - Frontend upload logic
- `backend/app/main.py:41-80` - Backend file handling
- `backend/app/crew/cv_analysis_crew.py:93-119` - Analysis logic (incomplete)
- Browser Network tab - Check API requests/responses
- Terminal logs - Both frontend (Vite) and backend (uvicorn) output

### Priority Implementation Order
1. **Complete Backend**: Implement real CV parsing in `cv_analysis_crew.py`
2. **Connect Frontend**: Replace mock setTimeout with real API calls
3. **Error Handling**: Add try/catch blocks and user-friendly error messages  
4. **Validation**: File size limits, type checking, form validation
5. **Testing**: Add unit tests for both frontend and backend components

### Environment Variables
- **Required**: `SERPER_API_KEY` for web scraping functionality
- **Optional**: Can add `PORT`, `HOST`, `DEBUG` for backend configuration
- **Location**: Create `.env` file in `backend/` directory (already in .gitignore)