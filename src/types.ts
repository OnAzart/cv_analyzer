export interface Company {
  name: string;
  overview: string;
  rating: number;
  reviews: string[];
  culture: string;
  techStack: string[];
}

export interface CVMatch {
  overallMatch: number;
  strengths: string[];
  gaps: string[];
  recommendations: string[];
}

export interface Interview {
  likelyQuestions: string[];
  technicalAreas: string[];
  preparationTips: string[];
}

export interface AnalysisData {
  company: Company;
  cvMatch: CVMatch;
  interview: Interview;
}