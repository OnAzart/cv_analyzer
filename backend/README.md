# CV Analyzer Backend

This is the backend service for the CV Analyzer application. It provides an API for analyzing CVs and matching them with job opportunities using FastAPI and CrewAI.

## Features

- CV parsing (PDF and Word documents)
- Skills extraction
- Experience and education analysis
- Job matching using AI
- RESTful API endpoints

## Prerequisites

- Python 3.8+
- pip (Python package manager)

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
# Create a .env file with the following variables
SERPER_API_KEY=your_serper_api_key  # Get from https://serper.dev
```

## Running the Application

1. Start the development server:
```bash
cd app
uvicorn main:app --reload
```

2. The API will be available at `http://localhost:8000`

## API Endpoints

### POST /analyze-cv
Upload and analyze a CV file.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: file (PDF or Word document)

**Response:**
```json
{
    "positions": ["Software Engineer", "Full Stack Developer"],
    "skills": ["Python", "JavaScript", "React"],
    "experience": [
        {
            "title": "Software Engineer",
            "company": "Example Corp",
            "duration": "2020-2023"
        }
    ],
    "education": [
        {
            "degree": "Bachelor of Science",
            "field": "Computer Science",
            "institution": "Example University"
        }
    ],
    "job_matches": [
        {
            "position": "Senior Software Engineer",
            "match_score": 0.85,
            "skills_match": ["Python", "JavaScript", "React"],
            "missing_skills": ["Kubernetes", "AWS"]
        }
    ]
}
```

## Development

The backend is built with:
- FastAPI for the web framework
- CrewAI for job matching
- PyPDF2 and python-docx for document parsing
- LangChain for AI tools integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request 