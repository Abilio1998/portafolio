// ── Global Types ──────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  tagline: string;
  badge?: string;
  badgeVariant?: 'founder' | 'saas' | 'web' | 'spa';
  type: 'product' | 'saas' | 'web' | 'spa';
  status: 'live' | 'in-progress' | 'completed';
  duration: string;
  year: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  features: string[];
  imageFolder: string;
  heroImage: string;
  images: string[];       // filenames inside /public/projects/{imageFolder}/
  accentColor: string;
  url?: string;
  github?: string;
  order: number;
}

export interface Skill {
  category: string;
  icon: string;
  description: string;
  items: string[];
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'devops' | 'tools';
  logo?: string;
}

export interface PhilosophyItem {
  number: string;
  title: string;
  description: string;
}

export type Theme = 'dark' | 'light';
