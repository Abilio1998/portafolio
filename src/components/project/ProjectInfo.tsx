import { Reveal } from '@/components/ui/Reveal';
import { Check } from '@/components/ui/Icons';
import type { Project } from '@/types';

interface ProjectInfoProps {
  project: Project;
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  const blocks = [
    { label: 'El problema', content: project.problem, accent: '#DC2626' },
    { label: 'La solución', content: project.solution, accent: '#EA580C' },
    { label: 'El resultado', content: project.result, accent: '#15803D' },
  ];

  return (
    <section className="py-12 md:py-16" aria-label="Detalles del proyecto">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
          {blocks.map((block, i) => (
            <Reveal key={block.label} delay={i * 90}>
              <div className="h-full card p-7">
                <span className="block w-8 h-1 rounded-full mb-5" style={{ background: block.accent }} />
                <h2 className="text-xs font-extrabold tracking-[0.15em] uppercase mb-3" style={{ color: block.accent }}>
                  {block.label}
                </h2>
                <p className="text-ink-600 leading-relaxed">{block.content}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="text-xs font-extrabold tracking-[0.15em] uppercase text-ink-500 mb-5">
              Tecnologías utilizadas
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="chip !px-3.5 !py-1.5 !text-sm">{tech}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-xs font-extrabold tracking-[0.15em] uppercase text-ink-500 mb-5">
              Funcionalidades principales
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-trust-50 text-trust flex items-center justify-center">
                    <Check size={12} />
                  </span>
                  <span className="text-ink-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
