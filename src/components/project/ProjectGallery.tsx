import { useCallback, useEffect, useRef, useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { ZoomIn, X, ChevronLeft, ChevronRight } from '@/components/ui/Icons';
import { projectImageUrl, smallImage } from '@/utils/images';

interface ProjectGalleryProps {
  folder: string;
  /** Imágenes a mostrar (la principal ya aparece en la cabecera) */
  images: string[];
  projectTitle: string;
}

function describe(projectTitle: string, filename: string) {
  return `${projectTitle} — ${filename.replace(/\.\w+$/, '').replace(/[-_]/g, ' ')}`;
}

export function ProjectGallery({ folder, images, projectTitle }: ProjectGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  // Teclado + bloqueo de scroll mientras el visor está abierto
  useEffect(() => {
    if (active === null) return;
    lastFocused.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      lastFocused.current?.focus();
    };
  }, [active, close, prev, next]);

  if (images.length === 0) return null;

  return (
    <section className="py-12 md:py-16" aria-label={`Galería de capturas de ${projectTitle}`}>
      <div className="container-narrow">
        <Reveal className="mb-8">
          <p className="eyebrow !mb-2">Galería</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight">Más capturas del proyecto</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {images.map((file, index) => (
            <Reveal key={file} delay={(index % 2) * 90}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative block w-full overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card aspect-video"
                aria-label={`Ampliar imagen: ${describe(projectTitle, file)}`}
              >
                <img
                  src={projectImageUrl(folder, smallImage(file))}
                  alt={describe(projectTitle, file)}
                  width={720}
                  height={405}
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
                  <span className="w-12 h-12 rounded-full bg-white text-ink flex items-center justify-center">
                    <ZoomIn size={22} />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-4 animate-fade-up"
          role="dialog"
          aria-modal="true"
          aria-label={describe(projectTitle, images[active])}
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Cerrar imagen"
          >
            <X size={24} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 md:left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <img
            src={projectImageUrl(folder, images[active])}
            alt={describe(projectTitle, images[active])}
            className="max-w-full max-h-[88vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
