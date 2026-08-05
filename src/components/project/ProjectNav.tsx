import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Project } from '@/types';
import { fadeInUp, viewport } from '@/utils/motion';

interface ProjectNavProps {
  prev: Project | null;
  next: Project | null;
}

export function ProjectNav({ prev, next }: ProjectNavProps) {
  if (!prev && !next) return null;

  return (
    <motion.nav
      className="border-t border-zinc-800/60 py-12"
      aria-label="Navegación entre proyectos"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
    >
      <div className="container-narrow flex items-center justify-between gap-4">
        {prev ? (
          <Link
            to={`/projects/${prev.id}`}
            className="group flex items-center gap-4 text-left flex-1 max-w-xs hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors duration-200 flex-shrink-0">
              <ArrowLeft
                size={16}
                className="text-zinc-500 group-hover:-translate-x-1 transition-transform duration-200"
              />
            </div>
            <div>
              <p className="text-xs text-zinc-600 mb-0.5">Proyecto anterior</p>
              <p className="text-sm font-medium text-zinc-300">{prev.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next && (
          <Link
            to={`/projects/${next.id}`}
            className="group flex items-center gap-4 text-right flex-1 max-w-xs justify-end hover:opacity-80 transition-opacity duration-200"
          >
            <div>
              <p className="text-xs text-zinc-600 mb-0.5">Siguiente proyecto</p>
              <p className="text-sm font-medium text-zinc-300">{next.title}</p>
            </div>
            <div className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors duration-200 flex-shrink-0">
              <ArrowRight
                size={16}
                className="text-zinc-500 group-hover:translate-x-1 transition-transform duration-200"
              />
            </div>
          </Link>
        )}
      </div>
    </motion.nav>
  );
}
