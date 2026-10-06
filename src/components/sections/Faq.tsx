import { Reveal } from '@/components/ui/Reveal';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Plus } from '@/components/ui/Icons';

export const faqs = [
  {
    q: '¿Cuánto cuesta una web para mi negocio?',
    a: 'Depende de lo que necesites: no es lo mismo una web de presentación que una con reservas online, carta digital y panel de gestión. Tras hablar contigo te envío un presupuesto cerrado y por escrito, sin compromiso y sin letra pequeña.',
  },
  {
    q: '¿Cuánto tarda en estar lista?',
    a: 'Una web de presentación puede estar lista en pocos días (la de Reformas 6J la lancé en 3). Proyectos con reservas, carta o panel de gestión suelen llevar algunas semanas. El plazo exacto va siempre en la propuesta.',
  },
  {
    q: '¿Necesito saber de tecnología?',
    a: 'Para nada. Yo me encargo de todo: diseño, desarrollo, publicación y configuración. Al terminar te explico con calma cómo usarla y estoy disponible para cualquier duda.',
  },
  {
    q: '¿Mi web saldrá en Google?',
    a: 'La construyo con una base de SEO técnico sólida: rapidez, metadatos, estructura y datos estructurados. El posicionamiento final depende de tu sector y tu competencia, por eso no prometo posiciones, pero sí dejarte preparado para competir bien.',
  },
  {
    q: '¿Y si más adelante necesito cambios?',
    a: 'Sin problema. Puedo encargarme de actualizaciones, mejoras o nuevas funciones cuando las necesites. Tampoco quedas atado a mí: tu web es tuya.',
  },
  {
    q: '¿Trabajas con negocios que no son restaurantes?',
    a: 'Sí. Mi especialidad es la hostelería, pero también he trabajado con una clínica dental y una empresa de reformas. Si tu negocio necesita presencia online que convierta, puedo ayudarte.',
  },
  {
    q: '¿Cómo empezamos?',
    a: 'Escríbeme por WhatsApp o rellena el formulario de abajo con 2 líneas sobre tu negocio. Te respondo, hablamos unos minutos y te preparo una propuesta.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-padding bg-cream-100/60" aria-labelledby="faq-title">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <SectionTitle
            id="faq-title"
            label="Preguntas frecuentes"
            title="Resuelvo tus dudas antes de que las tengas"
            description="Lo que suelen preguntarme antes de empezar. Si falta alguna, escríbeme y te respondo."
            className="lg:sticky lg:top-28 lg:self-start !mb-0"
          />

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i, 3) * 60}>
                <details className="group card px-6 py-5 open:shadow-card-hover transition-shadow">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-extrabold text-ink text-base md:text-lg tracking-tight">
                    {f.q}
                    <span className="faq-icon shrink-0 w-8 h-8 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center transition-transform duration-300">
                      <Plus size={18} />
                    </span>
                  </summary>
                  <p className="mt-3 text-ink-600 leading-relaxed text-sm md:text-base">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
