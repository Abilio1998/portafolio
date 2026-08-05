import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap } from 'lucide-react';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { staggerContainer, fadeInUp, scaleIn, viewport } from '@/utils/motion';

const statusLabels = {
  live: 'En vivo',
  'in-progress': 'En desarrollo',
  completed: 'Completado',
};

export function Projects() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section
      id="proyectos"
      className="section-padding"
      aria-labelledby="projects-title"
    >
      <div className="container-narrow">
        <SectionTitle
          id="projects-title"
          label="Proyectos"
          title="Lo que construyo."
          description="Productos digitales reales, resolviendo problemas reales. Cada proyecto nació de una necesidad concreta de negocio."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {sorted.map((project, i) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              className={i === 0 ? 'md:col-span-2' : ''}
            >
              <Link
                to={`/projects/${project.id}`}
                id={`project-card-${project.id}`}
                className="group relative block rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30"
                aria-label={`Ver proyecto ${project.title}`}
              >
                {/* Project image / placeholder */}
                <div
                  className={`relative overflow-hidden bg-zinc-900 ${
                    i === 0 ? 'h-64 md:h-80' : 'h-48'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}10 0%, #18181b 60%)`,
                  }}
                >
                  {/* Hero image if available */}
                  <img
                    src={`/projects/${project.imageFolder}/${project.heroImage}`}
                    alt={`Captura de ${project.title}`}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // Hide broken image gracefully
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />

                  {/* Color overlay */}
                  <div
                    className="absolute inset-0 opacity-30 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to bottom right, ${project.accentColor}20, transparent)`,
                    }}
                  />

                  {/* Placeholder content when no image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-6xl font-bold tracking-tighter opacity-10 select-none"
                      style={{ color: project.accentColor }}
                    >
                      {project.title.slice(0, 2).toUpperCase()}
                    </div>
                  </div>

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
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
                      {statusLabels[project.status]}
                    </Badge>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-zinc-900/80 border border-zinc-700/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110">
                    <ArrowRight size={16} className="text-zinc-300" />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors duration-200 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-500">{project.tagline}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/60">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                      <Clock size={12} />
                      {project.duration}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-500 text-xs border border-zinc-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-600 text-xs border border-zinc-700/50">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
