// ── Global Types ──────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  /** Sector del cliente (se muestra en las tarjetas) */
  category: string;
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

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'devops' | 'tools';
  logo?: string;
}
