import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollManager } from '@/components/layout/ScrollManager';
import { StickyCta } from '@/components/layout/StickyCta';
import { Home } from '@/pages/Home';

// La portada se carga de inmediato (es lo primero que ve el visitante).
// El resto de páginas se cargan bajo demanda para mantener el JS inicial mínimo.
const ProjectPage = lazy(() =>
  import('@/pages/ProjectPage').then((m) => ({ default: m.ProjectPage }))
);
const NotFound = lazy(() =>
  import('@/pages/NotFound').then((m) => ({ default: m.NotFound }))
);

function PageFallback() {
  return (
    <div className="min-h-[100svh] flex items-center justify-center" role="status" aria-label="Cargando">
      <div className="w-8 h-8 rounded-full border-[3px] border-cream-200 border-t-brand animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-[100svh] flex flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-full focus:bg-ink focus:text-white focus:font-bold"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <div id="contenido" className="flex-1">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <StickyCta />
      </div>
    </BrowserRouter>
  );
}
