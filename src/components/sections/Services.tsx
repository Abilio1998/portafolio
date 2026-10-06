import { Reveal } from '@/components/ui/Reveal';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Link } from 'react-router-dom';
import {
  Globe, CalendarCheck, QrCode, BarChart, Search, Sparkles, ArrowRight,
} from '@/components/ui/Icons';

const services = [
  {
    icon: Globe,
    title: 'Web profesional a medida',
    text: 'Diseño propio, rápido y adaptado al móvil, con la imagen de tu marca. Sin plantillas genéricas.',
    result: 'Transmite confianza desde el primer segundo',
  },
  {
    icon: CalendarCheck,
    title: 'Reservas online',
    text: 'Tus clientes eligen fecha, comensales, zona y hora. Tú recibes la reserva sin coger el teléfono.',
    result: 'Menos llamadas, más mesas llenas',
  },
  {
    icon: QrCode,
    title: 'Carta digital con QR',
    text: 'Carta y menú del día siempre actualizados, en varios idiomas, accesibles con un escaneo.',
    result: 'Cambias un precio en un minuto',
  },
  {
    icon: BarChart,
    title: 'Panel de control y analítica',
    text: 'Un panel sencillo para ver reservas, visitas y comportamiento de tus clientes.',
    result: 'Decisiones con datos, no a ojo',
  },
  {
    icon: Search,
    title: 'SEO local y rendimiento',
    text: 'Base técnica optimizada (velocidad, metadatos, datos estructurados) para que Google te entienda.',
    result: 'Más opciones de aparecer cuando te buscan',
  },
  {
    icon: Sparkles,
    title: 'Automatización e IA',
    text: 'Integro inteligencia artificial y automatizaciones para quitarte tareas repetitivas del día a día.',
    result: 'Más tiempo para lo importante',
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-padding" aria-labelledby="services-title">
      <div className="container-narrow">
        <SectionTitle
          id="services-title"
          label="Qué puedo hacer por ti"
          title="Todo lo que tu negocio necesita para vender más online"
          description="Un solo profesional para tu web, tus reservas y tu carta. Sin intermediarios, sin agencias, sin perder tiempo."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <article className="group h-full card p-7 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
                <span className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-ink transition-colors duration-300">
                  <s.icon size={24} />
                </span>
                <h3 className="text-lg font-extrabold text-ink mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed mb-5">{s.text}</p>
                <p className="text-xs font-bold text-trust-600 pt-4 border-t border-cream-200">
                  ✓ {s.result}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link to="/#proyectos" className="btn btn-md btn-dark">
            Ver resultados reales <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
