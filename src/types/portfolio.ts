export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface ProfileData {
  name: string;
  role: string;
  roles: string[];
  headline: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  leetcode: string;
  leetcodeSolved: number;
  education: Education;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillDetail {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  roleInStack: string;
  verifiedByResume: boolean;
  relatedProjects: string[];
  color?: string;
  icon?: string;
}

export interface SkillCategoryGroup {
  id: string;
  name: string;
  description: string;
  skills: SkillDetail[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  liveUrl: string;
  githubUrl?: string;
  techStack: string[];
  keyHighlights: string[];
  accentColor: string;
  category: 'Full-Stack' | 'AI / LLM' | 'FinTech' | 'Healthcare' | 'SaaS';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badge?: string;
  description: string;
  verified: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export type GameDifficulty = 'easy' | 'medium' | 'hard';

export interface GameHUDStats {
  score: number;
  timeRemaining: number;
  targetCount: number;
  collectedCount: number;
  difficulty: GameDifficulty;
  status: 'idle' | 'playing' | 'paused' | 'completed' | 'gameover';
}
