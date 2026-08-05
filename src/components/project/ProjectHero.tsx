import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { fadeInUp, slideInLeft, viewport } from '@/utils/motion';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section
      className="relative pt-32 pb-20 overflow-hidden"
      aria-label={`Cabecera del proyecto ${project.title}`}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full blur-[140px] opacity-10"
          style={{ background: project.accentColor }}
        />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Back button */}
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={viewport}
          variants={slideInLeft}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200 mb-12 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            Volver al portfolio
          </Link>
        </motion.div>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap items-center gap-2 mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          {project.badge && (
            <Badge variant={project.badgeVariant ?? 'default'}>
              {project.badge}
            </Badge>
          )}
          <Badge
            variant={
              project.status === 'in-progress'
                ? 'inprogress'
                : project.status === 'live'
                ? 'saas'
                : 'completed'
            }
          >
            {project.status === 'in-progress'
              ? 'En desarrollo'
              : project.status === 'live'
              ? 'En vivo'
              : 'Completado'}
          </Badge>
          <span className="text-xs text-zinc-600">{project.year}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-hero text-zinc-50 mb-4 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
        >
          {project.title}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-body-large max-w-xl mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          {project.tagline}
        </motion.p>

        {/* Meta */}
        <motion.div
          className="flex flex-wrap items-center gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.25 }}
        >
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Clock size={14} />
            <span>{project.duration}</span>
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
            >
              <ExternalLink size={14} />
              Ver en vivo
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
