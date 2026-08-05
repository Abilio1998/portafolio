import type { Skill } from '@/types';

export const skills: Skill[] = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    description: 'Interfaces modernas, performantes y accesibles.',
    items: ['React 19', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    description: 'APIs y lógica de servidor robusta.',
    items: ['Node.js', 'Next.js API Routes', 'REST APIs', 'Autenticación', 'Middleware'],
  },
  {
    category: 'Bases de datos',
    icon: 'Database',
    description: 'Diseño de esquemas y consultas eficientes.',
    items: ['PostgreSQL', 'Supabase', 'SQL avanzado', 'Row Level Security'],
  },
  {
    category: 'Inteligencia Artificial',
    icon: 'Brain',
    description: 'Integración de IA en productos reales.',
    items: ['OpenAI API', 'Google GenAI', 'Groq', 'Prompt Engineering', 'RAG'],
  },
  {
    category: 'UX / Diseño',
    icon: 'Palette',
    description: 'Experiencias de usuario intuitivas y elegantes.',
    items: ['Design Systems', 'Prototipado', 'Accesibilidad', 'Responsive Design'],
  },
  {
    category: 'SEO',
    icon: 'Search',
    description: 'Posicionamiento técnico y estrategia de contenido.',
    items: ['SEO Técnico', 'Structured Data', 'Core Web Vitals', 'Meta Tags', 'Lighthouse'],
  },
  {
    category: 'Deploy & DevOps',
    icon: 'Cloud',
    description: 'Despliegue y operaciones en producción.',
    items: ['Netlify', 'Vercel', 'Git', 'GitHub', 'CI/CD básico'],
  },
  {
    category: 'Producto',
    icon: 'Lightbulb',
    description: 'Del problema real a la solución digital.',
    items: ['Product Thinking', 'User Research', 'Business Analysis', 'Feature Prioritization'],
  },
];
