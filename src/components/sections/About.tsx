import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';
import { Check, ArrowRight } from '@/components/ui/Icons';
import { technologies } from '@/data/technologies';

const reasons = [
  {
    title: 'Entiendo tu negocio desde dentro',
    text: 'Pasé 4,5 años en hostelería, 2 de ellos como encargado. Sé lo que es un servicio a tope y qué necesita de verdad un restaurante.',
  },
  {
    title: 'Hablas conmigo, no con una agencia',
    text: 'Trato directo de principio a fin: yo diseño, desarrollo y te atiendo. Sin intermediarios ni mensajes perdidos.',
  },
  {
    title: 'Pienso en resultados, no solo en código',
    text: 'Cada decisión busca más reservas, más confianza y menos trabajo manual para ti.',
  },
  {
    title: 'Tecnología moderna y rápida',
    text: 'Webs ligeras, seguras y preparadas para crecer. Si mañana necesitas más funciones, la base ya está lista.',
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="section-padding bg-cream-100/60" aria-labelledby="about-title">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2rem] bg-brand/20 rotate-3" aria-hidden="true" />
              <img
                src="/abilio-fernandez.webp"
                srcSet="/abilio-fernandez-sm.webp 320w, /abilio-fernandez.webp 640w"
                sizes="(min-width: 1024px) 380px, 320px"
                alt="Abi Studio, estudio de desarrollo web"
                width={640}
                height={862}
                loading="lazy"
                decoding="async"
                className="relative w-full aspect-[4/5] object-cover object-top rounded-[2rem] shadow-card-hover"
              />
              <div className="absolute -bottom-5 -right-3 sm:-right-6 px-5 py-4 rounded-2xl bg-white border border-cream-200 shadow-card-hover">
                <p className="text-2xl font-extrabold text-ink leading-none">4,5 años</p>
                <p className="text-xs font-semibold text-ink-500 mt-1">en hostelería antes de programar</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Sobre mí</p>
              <h2 id="about-title" className="text-section-title text-ink mb-5">
                Hola, soy Abi. Programo con mentalidad de <span className="text-brand-600">dueño de negocio</span>.
              </h2>
              <p className="text-lead mb-4">
                Empecé en hostelería, gestionando equipos y operaciones. Vi de cerca cómo los problemas
                digitales (reservas por teléfono, cartas desactualizadas, webs que no atraen a nadie)
                costaban dinero a negocios buenos.
              </p>
              <p className="text-lead mb-8">
                Por eso aprendí a programar: para construir yo mismo las soluciones que echaba en falta.
                Hoy ayudo a restaurantes y negocios locales a tener una presencia online que realmente funciona.
              </p>
            </Reveal>

            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {reasons.map((r, i) => (
                <Reveal key={r.title} as="li" delay={i * 70} className="list-none">
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-trust text-white flex items-center justify-center">
                      <Check size={14} />
                    </span>
                    <div>
                      <h3 className="font-extrabold text-ink text-sm mb-1 leading-snug">{r.title}</h3>
                      <p className="text-sm text-ink-600 leading-relaxed">{r.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-ink-500 mb-3">Tecnologías con las que trabajo</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {technologies.map((t) => (
                  <span key={t.name} className="chip">{t.name}</span>
                ))}
              </div>
              <Link to="/#contacto" className="btn btn-md btn-dark">
                Trabajemos juntos <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
