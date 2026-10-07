import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'gastrova',
    title: 'Gastrova',
    category: 'Software para restaurantes',
    tagline: 'La plataforma SaaS que digitaliza restaurantes desde cero.',
    badge: 'Proyecto Fundador',
    badgeVariant: 'founder',
    type: 'saas',
    status: 'in-progress',
    duration: '2 meses — en evolución',
    year: '2024',
    problem:
      'Los restaurantes pequeños y medianos carecen de herramientas digitales accesibles. Los sistemas existentes son caros, complejos de implementar y no están diseñados para la realidad operativa del sector.',
    solution:
      'Gastrova es una plataforma SaaS marca blanca que permite a cualquier restaurante tener carta digital, sistema de reservas, analítica, página web generada automáticamente y panel de control cloud. Sin conocimientos técnicos. Sin fricción.',
    result:
      'Una plataforma multiempresa completamente operativa con configuración dinámica, personalización por marca, widgets embebibles y panel de administración cloud. Diseñada para escalar a cientos de restaurantes.',
    technologies: [
      'React 19', 'TypeScript', 'Vite', 'TailwindCSS',
      'Supabase', 'PostgreSQL', 'Framer Motion', 'Zustand',
    ],
    features: [
      'Carta digital interactiva',
      'Sistema de reservas online',
      'Panel cloud multiempresa',
      'Generación automática de webs',
      'Widgets embebibles',
      'Analítica de comportamiento',
      'Configuración dinámica por marca',
      'Personalización completa',
      'IA integrada',
    ],
    imageFolder: 'gastrova',
    heroImage: 'gastrova.webp',
    images: [
      'gastrova.webp',
      'Gastrova-gestion.webp',
      'Gastrova-webs.webp',
    ],
    accentColor: '#6366f1',
    url: 'https://www.gastrova.es',
    order: 3,
  },
  {
    id: 'laconcordia',
    title: 'La Concòrdia',
    category: 'Restaurante',
    tagline: 'Digitalización completa de un restaurante con IA y analítica avanzada.',
    type: 'product',
    status: 'completed',
    duration: '3 meses',
    year: '2024',
    problem:
      'La Concòrdia operaba con procesos manuales: carta impresa, reservas por teléfono, sin datos de comportamiento del cliente y sin visibilidad sobre el rendimiento real del negocio.',
    solution:
      'Desarrollo de una plataforma completa con carta digital inteligente activada por QR, sistema de reservas, dashboard analytics en tiempo real, sistema de fidelización, PDFs automáticos y panel de administración con monitorización de tráfico y comportamiento.',
    result:
      'Reducción de carga operativa del equipo, trazabilidad completa del comportamiento del cliente y primeros datos de conversión y fidelización. El restaurante dispone ahora de una plataforma digital comparable a las grandes cadenas.',
    technologies: [
      'Next.js 16', 'React 19', 'TypeScript', 'TailwindCSS',
      'Framer Motion', 'Supabase', 'PostgreSQL', 'NextAuth',
      'OpenAI', 'Google GenAI', 'Groq', 'i18next',
    ],
    features: [
      'Carta digital con IA',
      'Sistema QR por mesa',
      'Dashboard analytics en tiempo real',
      'Sistema de reservas',
      'Programa de fidelización',
      'Generación de PDFs automática',
      'Panel de administración completo',
      'Heatmaps de comportamiento',
      'Monitorización de servidores',
      'Sistema multilenguaje',
      'SEO avanzado',
    ],
    imageFolder: 'laconcordia',
    heroImage: 'la-concordia-dashboard.webp',
    images: [
      'la-concordia-dashboard.webp',
      'la-concordia-carta.webp',
      'la-concordia-reservas.webp',
      'la-concordia-cabrils.webp',
    ],
    accentColor: '#f59e0b',
    url: 'https://www.laconcordiacabrils.es',
    order: 1,
  },
  {
    id: 'doctoresya',
    title: 'Doctores Ya',
    category: 'Clínica dental',
    tagline: 'Web corporativa para clínica dental con foco en conversión y SEO.',
    type: 'web',
    status: 'completed',
    duration: '2 semanas y media',
    year: '2024',
    problem:
      'La clínica dental no tenía presencia digital propia. Sus pacientes potenciales no podían encontrarla en búsquedas locales ni acceder fácilmente a información sobre sus servicios.',
    solution:
      'Diseño y desarrollo de web corporativa profesional con WordPress, optimizada para SEO local, experiencia de usuario cuidada, formularios de contacto y cita previa, y diseño responsive que transmite confianza desde el primer segundo.',
    result:
      'La clínica obtuvo su primera presencia digital profesional, con posicionamiento local en Google, formulario de captación de leads funcional y una imagen de marca coherente con su propuesta de valor.',
    technologies: [
      'WordPress', 'PHP', 'CSS personalizado', 'SEO local',
      'Google Analytics', 'Google Search Console',
    ],
    features: [
      'Diseño corporativo profesional',
      'Optimización SEO local',
      'Formulario de cita previa',
      'Responsive completo',
      'Integración Google Analytics',
      'Schema markup para clínicas',
    ],
    imageFolder: 'doctoresya',
    heroImage: 'Clinica-dental-doctores-ya.webp',
    images: [
      'Clinica-dental-doctores-ya.webp',
    ],
    accentColor: '#10b981',
    url: 'https://www.doctoresya.es',
    order: 4,
  },
  {
    id: 'reformas6j',
    title: 'Reformas 6J',
    category: 'Empresa de reformas',
    tagline: 'SPA ultra-optimizada para empresa de reformas con captación de leads.',
    type: 'spa',
    status: 'completed',
    duration: '3 días',
    year: '2024',
    problem:
      'Reformas 6J carecía de presencia online y perdía clientes potenciales frente a competidores con web. Necesitaban una solución rápida, económica y efectiva para captar leads.',
    solution:
      'Single Page Application con React 19, diseño moderno, formulario avanzado de solicitud de presupuesto, botón de WhatsApp directo, Lazy Loading, animaciones fluidas y rendimiento máximo. Desarrollada y entregada en 3 días.',
    result:
      'La empresa dispone de presencia digital profesional con captación activa de leads mediante formulario y WhatsApp. Puntuación Lighthouse superior a 95 en todas las métricas.',
    technologies: [
      'React 19', 'TypeScript', 'TailwindCSS', 'EmailJS',
      'Framer Motion', 'Vite',
    ],
    features: [
      'SPA ultra-optimizada',
      'Formulario de presupuesto avanzado',
      'Integración WhatsApp directo',
      'Lazy Loading de imágenes',
      'Animaciones con Framer Motion',
      'Lighthouse +95',
      'Entrega en 3 días',
    ],
    imageFolder: 'reformas6j',
    heroImage: 'Reformas6j.webp',
    images: [
      'Reformas6j.webp',
      'reformas6j-proyecto.webp',
    ],
    accentColor: '#ef4444',
    url: 'https://www.reformas6j.com',
    order: 5,
  },
  {
    id: 'elbalconet',
    title: 'El Balconet',
    category: 'Restaurante',
    tagline: 'Web de restaurante mediterráneo con reservas online y carta digital.',
    type: 'web',
    status: 'in-progress',
    duration: 'En desarrollo',
    year: '2026',
    problem:
      'El Balconet, restaurante mediterráneo en Premià de Dalt, necesitaba una presencia digital a la altura de su terraza y su cocina: mostrar su carta y menú del día, y permitir reservar mesa sin depender del teléfono.',
    solution:
      'Diseño y desarrollo de una web elegante y cálida, alineada con la identidad de marca, con hero inmersivo, carta y menú del día, y un sistema de reservas online con selección de fecha, comensales, ubicación (interior o terraza) y horario.',
    result:
      'El restaurante dispone de una web profesional y multilenguaje que transmite su ambiente desde el primer segundo y convierte visitas en reservas de forma directa, simplificando la gestión del día a día.',
    technologies: [
      'React', 'TypeScript', 'TailwindCSS', 'Framer Motion',
      'Supabase', 'Vite',
    ],
    features: [
      'Sistema de reservas online',
      'Selección interior / terraza',
      'Carta y menú del día',
      'Sistema multilenguaje',
      'Diseño alineado con la marca',
      'Responsive completo',
      'Enlaces a redes sociales',
    ],
    imageFolder: 'Elbalconet',
    heroImage: 'El-balconet-premia-de-dalt.webp',
    images: [
      'El-balconet-premia-de-dalt.webp',
      'El-balconet-premia-de-dalt-reservar.webp',
    ],
    accentColor: '#d4af37',
    url: 'https://www.elbalconet.netlify.app',
    order: 2,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getAdjacentProjects(currentId: string): {
  prev: Project | null;
  next: Project | null;
} {
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const index = sorted.findIndex((p) => p.id === currentId);
  return {
    prev: index > 0 ? sorted[index - 1] : null,
    next: index < sorted.length - 1 ? sorted[index + 1] : null,
  };
}
