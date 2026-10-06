import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, WhatsApp } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { whatsappUrl } from '@/data/site';
import type { Project } from '@/types';

interface ProjectNavProps {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

export function ProjectNav({ project, prev, next }: ProjectNavProps) {
  return (
    <>
      {/* CTA de cierre: mantiene al visitante dentro del embudo */}
      <section className="py-12 md:py-16" aria-label="Contacto">
        <div className="container-narrow">
          <Reveal>
            <div className="rounded-[2rem] bg-ink text-white p-8 md:p-12 relative overflow-hidden text-center">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[260px] rounded-full bg-brand/25 blur-[100px]" aria-hidden="true" />
              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">
                  ¿Quieres un resultado como el de {project.title}?
                </h2>
                <p className="text-ink-300 max-w-xl mx-auto mb-8">
                  Cuéntame tu idea y te preparo un presupuesto gratuito y sin compromiso.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/#contacto" className="btn btn-lg btn-primary">
                    Pedir presupuesto gratis <ArrowRight size={18} />
                  </Link>
                  <a
                    href={whatsappUrl(`Hola Abilio, he visto el proyecto ${project.title} y me gustaría algo parecido para mi negocio.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-whatsapp"
                  >
                    <WhatsApp size={20} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {(prev || next) && (
        <nav className="border-t border-cream-200 py-10" aria-label="Navegación entre proyectos">
          <div className="container-narrow flex items-center justify-between gap-4">
            {prev ? (
              <Link to={`/projects/${prev.id}`} className="group flex items-center gap-4 flex-1 max-w-xs">
                <span className="w-11 h-11 rounded-full border-2 border-cream-200 bg-white flex items-center justify-center group-hover:border-ink transition-colors shrink-0">
                  <ArrowLeft size={18} className="text-ink group-hover:-translate-x-0.5 transition-transform" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-ink-500">Proyecto anterior</span>
                  <span className="block font-extrabold text-ink">{prev.title}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next && (
              <Link to={`/projects/${next.id}`} className="group flex items-center gap-4 flex-1 max-w-xs justify-end text-right">
                <span>
                  <span className="block text-xs font-semibold text-ink-500">Siguiente proyecto</span>
                  <span className="block font-extrabold text-ink">{next.title}</span>
                </span>
                <span className="w-11 h-11 rounded-full border-2 border-cream-200 bg-white flex items-center justify-center group-hover:border-ink transition-colors shrink-0">
                  <ArrowRight size={18} className="text-ink group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            )}
          </div>
        </nav>
      )}
    </>
  );
}
