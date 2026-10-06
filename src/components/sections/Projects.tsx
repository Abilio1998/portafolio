import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Clock } from '@/components/ui/Icons';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { smallImage } from '@/utils/images';
import { cn } from '@/utils/cn';
import type { Project } from '@/types';

const statusLabels = {
  live: 'En vivo',
  'in-progress': 'En desarrollo',
  completed: 'Entregado',
} as const;

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  const src = `/projects/${project.imageFolder}/${smallImage(project.heroImage)}`;

  return (
    <article
      className={cn(
        'group relative h-full card overflow-hidden hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300',
        featured && 'lg:grid lg:grid-cols-[1.25fr_1fr]'
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-cream-100',
          featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[340px]' : 'aspect-[16/10]'
        )}
      >
        <img
          src={src}
          alt={`Captura de la web de ${project.title}`}
          width={720}
          height={450}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.badge && (
            <Badge variant={project.badgeVariant ?? 'default'}>{project.badge}</Badge>
          )}
          <Badge variant={project.status === 'in-progress' ? 'inprogress' : 'completed'}>
            {statusLabels[project.status]}
          </Badge>
        </div>
      </div>

      <div className={cn('flex flex-col p-6 md:p-7', featured && 'lg:p-10 lg:justify-center')}>
        <p className="eyebrow !mb-2">{project.category}</p>
        <h3 className={cn('font-extrabold text-ink tracking-tight mb-2', featured ? 'text-2xl md:text-3xl' : 'text-xl')}>
          <Link
            to={`/projects/${project.id}`}
            id={`project-card-${project.id}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:after:outline focus-visible:after:outline-[3px] focus-visible:after:outline-brand focus-visible:after:rounded-3xl"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-sm md:text-base text-ink-600 leading-relaxed mb-5">{project.tagline}</p>

        {featured && (
          <p className="hidden lg:block text-sm text-ink-600 leading-relaxed mb-6 pl-4 border-l-4 border-brand">
            <strong className="text-ink">Resultado:</strong> {project.result}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-5 border-t border-cream-200">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-500">
            <Clock size={14} /> {project.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-700 group-hover:gap-2.5 transition-all">
            Ver el caso <ArrowRight size={16} />
          </span>
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-ink-500 hover:text-ink transition-colors self-start"
            aria-label={`Visitar la web de ${project.title} (se abre en una pestaña nueva)`}
          >
            <ExternalLink size={13} /> Visitar la web real
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section
      id="proyectos"
      className="section-padding bg-cream-100/60"
      aria-labelledby="projects-title"
    >
      <div className="container-narrow">
        <SectionTitle
          id="projects-title"
          label="Prueba real"
          title="Proyectos que ya están funcionando"
          description="No son maquetas: son webs y sistemas reales de restaurantes y negocios. Cada uno nació de un problema concreto."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {sorted.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i > 0 ? ((i - 1) % 2) * 100 : 0}
              className={i === 0 ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} featured={i === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-ink-600 font-semibold mb-4">¿Quieres un resultado así para tu negocio?</p>
          <Link to="/#contacto" className="btn btn-lg btn-primary">
            Cuéntame tu proyecto <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
