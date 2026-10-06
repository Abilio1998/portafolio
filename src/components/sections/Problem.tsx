import { Reveal } from '@/components/ui/Reveal';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from '@/components/ui/Icons';

const pains = [
  {
    title: 'Tu web es lenta, anticuada o se ve mal en el móvil',
    text: 'Más de la mitad de las visitas llegan desde el teléfono. Si tarda en cargar o cuesta leerla, se van a la competencia.',
  },
  {
    title: 'Solo se puede reservar llamando',
    text: 'Cada llamada perdida en pleno servicio es una mesa vacía. Tus clientes quieren reservar a cualquier hora, en dos clics.',
  },
  {
    title: 'No apareces cuando buscan en Google',
    text: 'Si alguien busca “restaurante cerca de mí” y no sales, esa persona acaba comiendo en otro sitio.',
  },
  {
    title: 'Cambiar la carta o un precio es un lío',
    text: 'Imprimir cartas, pedir cambios a un tercero, esperar días… Actualizarla debería llevarte un minuto.',
  },
];

export function Problem() {
  return (
    <section
      id="problema"
      className="section-padding bg-ink relative overflow-hidden"
      aria-labelledby="problem-title"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div className="container-narrow relative">
        <SectionTitle
          id="problem-title"
          invert
          label="¿Te suena?"
          title="Lo que frena a tu negocio online (y le cuesta clientes cada semana)"
          description="Son los problemas que más veo en restaurantes y negocios locales. Todos tienen solución, y no es complicada."
        />

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="h-full flex gap-4 p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] transition-colors duration-300">
                <span className="shrink-0 w-9 h-9 rounded-full bg-red-500/15 text-red-300 flex items-center justify-center">
                  <X size={18} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">{p.title}</h3>
                  <p className="text-sm text-ink-300 leading-relaxed">{p.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-xl md:text-2xl font-extrabold text-white mb-6 tracking-tight">
            Eso es justo lo que arreglo. <span className="text-brand">Mira cómo 👇</span>
          </p>
          <Link to="/#servicios" className="btn btn-md btn-primary">
            Ver cómo te ayudo <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
