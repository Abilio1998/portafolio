import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Gestiona el scroll al navegar: sube arriba en páginas nuevas
 * y hace scroll suave hasta el ancla (#seccion) cuando existe.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Espera un frame para que la sección ya esté montada (lazy routes)
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
