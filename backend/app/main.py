from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import uvicorn
from pathlib import Path
import tempfile
import os
from crew.cv_analysis_crew import CVAnalysisCrew

app = FastAPI(title="CV Analyzer API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class JobMatch(BaseModel):
    position: str
    match_score: float
    skills_match: List[str]
    missing_skills: List[str]
    growth_potential: str

class CVAnalysis(BaseModel):
    analysis: str
    positions: List[str]
    skills: List[str]
    experience: List[dict]
    education: List[dict]
    job_matches: List[JobMatch]

@app.get("/")
async def root():
    return {"message": "CV Analyzer API is running"}

@app.post("/analyze-cv", response_model=CVAnalysis)
async def analyze_cv(file: UploadFile = File(...)):
    if not file.filename:
        raise HTTPException(status_code=400, detail="No file uploaded")
    
    # Check file extension
    file_ext = Path(file.filename).suffix.lower()
    if file_ext not in ['.pdf', '.docx', '.doc']:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and Word documents are supported"
        )
    
    # Save uploaded file temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix=file_ext) as temp_file:
        content = await file.read()
        temp_file.write(content)
        temp_file_path = temp_file.name
    
    try:
        # Initialize the CV analysis crew
        crew = CVAnalysisCrew()
        
        # Run the analysis
        result = crew.analyze_cv(temp_file_path)
        
        return CVAnalysis(
            analysis=result["analysis"],
            positions=result["cv_data"]["positions"],
            skills=result["cv_data"]["skills"],
            experience=result["cv_data"]["experience"],
            education=result["cv_data"]["education"],
            job_matches=result["matches"]
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        # Clean up temporary file
        if os.path.exists(temp_file_path):
            os.remove(temp_file_path)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 