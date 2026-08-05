import { useState } from 'react';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { ZoomIn, Images } from 'lucide-react';
import { useProjectImages } from '@/hooks/useProjectImages';
import { staggerContainer, fadeInUp, viewport } from '@/utils/motion';

interface ProjectGalleryProps {
  folder: string;
  images: string[];
  accentColor: string;
  projectTitle: string;
}

export function ProjectGallery({
  folder,
  images,
  projectTitle,
}: ProjectGalleryProps) {
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());

  // Build full URLs from filenames
  const imageUrls = useProjectImages(folder, images);
  const validImages = imageUrls.filter((url) => !imgErrors.has(url));

  if (validImages.length === 0) {
    return (
      <section className="py-8 container-narrow">
        <div className="flex items-center gap-3 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 text-zinc-600">
          <Images size={18} />
          <p className="text-sm">
            Añade los nombres de archivo en{' '}
            <code className="text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
              data/projects.ts → images[]
            </code>{' '}
            y copia las imágenes en{' '}
            <code className="text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
              /public/projects/{folder}/
            </code>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-16"
      aria-label={`Galería de capturas de ${projectTitle}`}
    >
      <div className="container-narrow">
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-600 mb-2">
            Galería
          </p>
          <h2 className="text-2xl font-semibold text-zinc-200 tracking-tight">
            Capturas del proyecto
          </h2>
        </motion.div>

        <PhotoProvider
          speed={() => 300}
          easing={(type) =>
            type === 2
              ? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
              : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
          }
          toolbarRender={() => null}
        >
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            {validImages.map((src, index) => {
              const filename = src.split('/').pop() ?? `imagen-${index + 1}`;
              const altText = `${projectTitle} — ${filename.replace(/\.\w+$/, '').replace(/[-_]/g, ' ')}`;

              return (
                <motion.div
                  key={src}
                  className={`relative group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 cursor-pointer ${
                    index === 0 ? 'sm:col-span-2' : ''
                  }`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <PhotoView src={src}>
                    <div className="relative aspect-video">
                      <img
                        src={src}
                        alt={altText}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={() => {
                          setImgErrors((prev) => new Set([...prev, src]));
                        }}
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 backdrop-blur-[2px]">
                        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                          <ZoomIn size={20} className="text-white" />
                        </div>
                      </div>

                      {/* Image counter */}
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/50 text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {index + 1} / {validImages.length}
                      </div>
                    </div>
                  </PhotoView>
                </motion.div>
              );
            })}
          </motion.div>
        </PhotoProvider>

        <motion.p
          className="mt-6 text-xs text-zinc-700 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          {validImages.length}{' '}
          {validImages.length === 1 ? 'imagen' : 'imágenes'} · Haz clic para
          ver en pantalla completa
        </motion.p>
      </div>
    </section>
  );
}
