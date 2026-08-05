import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewport } from '@/utils/motion';

const stats = [
  { value: '4.5', unit: 'años', label: 'en hostelería' },
  { value: '2', unit: 'años', label: 'como Encargado' },
  { value: '4', unit: 'proyectos', label: 'en producción' },
];

const timeline = [
  {
    period: '2019 — 2024',
    role: 'Hostelería & Management',
    description:
      'Trabajé como Encargado de Sala gestionando equipos, operaciones y experiencia de cliente. Detecté que la mayoría de negocios del sector operaban con procesos manuales, sin datos y sin herramientas digitales.',
    tag: 'Origen',
  },
  {
    period: '2023',
    role: 'Decisión de cambio',
    description:
      'Decidí aprender desarrollo web para crear las soluciones que yo mismo echaba en falta. No quería ser un desarrollador más; quería construir productos que resolvieran problemas reales que había vivido.',
    tag: 'Pivote',
  },
  {
    period: '2024 — Hoy',
    role: 'Frontend Developer & Product Builder',
    description:
      'Desarrollo plataformas completas con React, Next.js, TypeScript e IA para empresas reales. Mi ventaja diferencial es que entiendo el negocio además del código.',
    tag: 'Presente',
  },
];

export function About() {
  return (
    <section
      id="sobre-mi"
      className="section-padding relative"
      aria-labelledby="about-title"
    >
      <div className="container-narrow">
        {/* Header with Photo */}
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-20">
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
              Sobre mí
            </p>
            <h2
              id="about-title"
              className="text-section-title text-zinc-50 mb-6 max-w-2xl"
            >
              No solo programo.{' '}
              <span className="text-zinc-500">
                Entiendo el negocio que hay detrás.
              </span>
            </h2>
            <p className="text-body-large max-w-2xl">
              Empecé en hostelería. Aprendí a gestionar equipos, a optimizar
              operaciones y, sobre todo, a detectar los problemas que nadie había
              resuelto digitalmente. Por eso decidí construir las soluciones yo
              mismo.
            </p>
          </motion.div>

          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-zinc-800 bg-zinc-900 flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            <img
              src="/abilio-fernandez.png"
              alt="Abilio Fernández"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Timeline + Stats layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Timeline — izquierda */}
          <motion.div
            className="lg:col-span-3 space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative pl-8 pb-12 last:pb-0"
                variants={fadeInUp}
              >
                {/* Timeline line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-[11px] top-3 bottom-0 w-px bg-gradient-to-b from-zinc-700 to-transparent" />
                )}
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center ${
                    i === timeline.length - 1
                      ? 'border-blue-500 bg-blue-500/15'
                      : 'border-zinc-700 bg-zinc-900'
                  }`}
                >
                  {i === timeline.length - 1 && (
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-zinc-600 font-mono">
                      {item.period}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 text-xs border border-zinc-700">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-200 mb-2">
                    {item.role}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats — derecha */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-zinc-100 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-lg text-zinc-500 font-medium">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-sm text-zinc-500">{stat.label}</p>
              </motion.div>
            ))}

            {/* Values card */}
            <motion.div
              className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 hover:border-blue-500/30 transition-all duration-300"
              variants={fadeInUp}
            >
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400 mb-3">
                Mi ventaja diferencial
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Entiendo los problemas operativos de los negocios porque los he
                vivido. Construyo software con criterio de negocio, no solo con
                criterio técnico.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
