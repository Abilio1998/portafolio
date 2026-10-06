import { Reveal } from '@/components/ui/Reveal';
import { SectionTitle } from '@/components/ui/SectionTitle';

const steps = [
  {
    n: '01',
    title: 'Hablamos',
    text: 'Me cuentas tu negocio y tus objetivos por WhatsApp, llamada o email. Escucho antes de proponer nada.',
    time: 'Sin compromiso',
  },
  {
    n: '02',
    title: 'Propuesta clara',
    text: 'Te envío qué voy a hacer, en cuánto tiempo y cuánto cuesta. Todo por escrito, antes de empezar.',
    time: 'Sin sorpresas',
  },
  {
    n: '03',
    title: 'Diseño y desarrollo',
    text: 'Construyo tu web y vas viendo los avances. Ajustamos juntos hasta que estés 100% contento.',
    time: 'Con tu feedback',
  },
  {
    n: '04',
    title: 'Lanzamiento y soporte',
    text: 'Publico tu web, te explico cómo usarla y sigo a tu lado por si necesitas cambios o mejoras.',
    time: 'No te dejo solo',
  },
];

export function Process() {
  return (
    <section id="proceso" className="section-padding" aria-labelledby="process-title">
      <div className="container-narrow">
        <SectionTitle
          id="process-title"
          label="Cómo trabajo"
          title="Un proceso simple, sin complicaciones técnicas"
          description="No necesitas saber de tecnología. Yo me encargo de todo y te explico cada paso con palabras claras."
        />

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <Reveal key={s.n} as="li" delay={i * 90} className="list-none">
              <div className="relative h-full card p-7">
                <span className="block text-5xl font-extrabold text-brand/30 tracking-tighter mb-4 leading-none">
                  {s.n}
                </span>
                <h3 className="text-lg font-extrabold text-ink mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed mb-5">{s.text}</p>
                <span className="inline-flex px-3 py-1 rounded-full bg-trust-50 text-trust-600 text-xs font-bold">
                  {s.time}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
