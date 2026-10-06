import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Clock, ArrowRight } from '@/components/ui/Icons';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { projectImageUrl } from '@/utils/images';

interface ProjectHeroProps {
  project: Project;
}

const statusLabels = {
  live: 'En vivo',
  'in-progress': 'En desarrollo',
  completed: 'Entregado',
} as const;

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section
      className="relative pt-28 md:pt-36 pb-12 overflow-hidden"
      aria-labelledby="project-title"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full blur-[120px] opacity-20"
          style={{ background: project.accentColor }}
        />
        <div className="absolute inset-0 bg-dots opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      </div>

      <div className="container-narrow relative z-10">
        <Link
          to="/#proyectos"
          className="inline-flex items-center gap-2 text-sm font-bold text-ink-500 hover:text-ink transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Volver a los proyectos
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-5">
          {project.badge && (
            <Badge variant={project.badgeVariant ?? 'default'}>{project.badge}</Badge>
          )}
          <Badge variant={project.status === 'in-progress' ? 'inprogress' : 'completed'}>
            {statusLabels[project.status]}
          </Badge>
          <span className="text-xs font-semibold text-ink-500">{project.category} · {project.year}</span>
        </div>

        <h1 id="project-title" className="text-display !text-[clamp(2.25rem,5vw,3.75rem)] text-ink mb-4 max-w-3xl">
          {project.title}
        </h1>
        <p className="text-lead max-w-2xl mb-8">{project.tagline}</p>

        <div className="flex flex-wrap items-center gap-4 mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-600">
            <Clock size={16} /> {project.duration}
          </span>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md btn-dark"
            >
              <ExternalLink size={16} />
              Visitar la web real
            </a>
          )}
          <Link to="/#contacto" className="btn btn-md btn-primary">
            Quiero algo así <ArrowRight size={16} />
          </Link>
        </div>

        <img
          src={projectImageUrl(project.imageFolder, project.heroImage)}
          alt={`Captura principal de ${project.title}`}
          width={1400}
          height={800}
          fetchPriority="high"
          decoding="async"
          className="w-full rounded-3xl border border-cream-200 shadow-card-hover bg-white object-cover object-top max-h-[560px]"
        />
      </div>
    </section>
  );
}
