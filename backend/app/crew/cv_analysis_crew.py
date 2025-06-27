import os
from crewai import Agent, Task, Crew, Process
from crewai.tools import BaseTool
from crewai_tools import ScrapeWebsiteTool
from pypdf import PdfReader
from typing import Dict, Any

class PDFReaderTool(BaseTool):
    name: str = "PDF Reader"
    description: str = "Reads the content of a PDF file and returns the text."

    def _run(self, pdf_path: str) -> str:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
        return text

pdf_reader_tool = PDFReaderTool()
scrape_tool = ScrapeWebsiteTool()

MOCK_ANALYSIS_DATA = {
    "company": {
        "name": "TechCorp Solutions",
        "overview": "A leading software development company focused on enterprise solutions.",
        "rating": 4.2,
        "reviews": [
            "Great work-life balance, but slow promotion track.",
            "Strong technical team, collaborative environment.",
            "Challenging projects with good learning opportunities."
        ],
        "culture": "Engineering-driven with emphasis on quality code.",
        "techStack": ["React", "Node.js", "TypeScript", "AWS"]
    },
    "cvMatch": {
        "overallMatch": 76,
        "strengths": [
            "Strong React.js experience aligns with their tech stack.",
            "Previous work in enterprise solutions matches their focus.",
            "Test-driven development experience is valued by their team."
        ],
        "gaps": [
            "Limited AWS experience - might want to highlight any cloud work.",
            "No mention of Node.js backend experience they require.",
            "Lacks enterprise-scale deployment experience mentioned in job."
        ],
        "recommendations": [
            "Highlight any cloud platform work, even if not AWS specific.",
            "Emphasize your full-stack capabilities if you have them.",
            "Add metrics or scale details to existing projects."
        ]
    },
    "interview": {
        "likelyQuestions": [
            "Describe a complex technical problem you solved with React.",
            "How do you approach testing in your frontend applications?",
            "Explain your experience with cloud deployment pipelines.",
            "How would you debug a performance issue in a React application?"
        ],
        "technicalAreas": [
            "React performance optimization",
            "State management patterns",
            "API integration best practices",
            "CI/CD pipeline knowledge"
        ],
        "preparationTips": [
            "Review React hooks and context API implementation details.",
            "Prepare examples of optimizing component re-renders.",
            "Study their product to mention specific improvement ideas.",
            "Prepare questions about their development workflow."
        ]
    }
}

class CVAnalysisCrew:
    def __init__(self):
        # Agents use only the PDF reader and scrape tool
        self.cv_analyst = Agent(
            role='CV Analyst',
            goal='Extract and analyze information from PDF CVs',
            backstory="You are an expert CV analyst. You can read PDF CVs and extract relevant information.",
            tools=[pdf_reader_tool],
            verbose=True
        )
        self.job_scraper = Agent(
            role='Job Scraper',
            goal='Scrape job position information from the web',
            backstory="You are an expert at retrieving job position information from web pages.",
            tools=[scrape_tool],
            verbose=True
        )

    def analyze_cv(self, file_path: str, job_url: str = None) -> Dict[str, Any]:
        # Task 1: Read and analyze the PDF CV
        analysis_task = Task(
            description=f"Read and analyze the PDF CV at {file_path}. Extract key skills, experience, and education.",
            agent=self.cv_analyst
        )
        # Task 2: Scrape job info if a URL is provided
        if job_url:
            scrape_task = Task(
                description=f"Scrape the job position information from {job_url} and summarize the requirements.",
                agent=self.job_scraper
            )
            crew = Crew(
                agents=[self.cv_analyst, self.job_scraper],
                tasks=[analysis_task, scrape_task],
                process=Process.sequential,
                verbose=True
            )
        else:
            crew = Crew(
                agents=[self.cv_analyst],
                tasks=[analysis_task],
                process=Process.sequential,
                verbose=True
            )
        result = crew.kickoff()
        return {"result": result} 