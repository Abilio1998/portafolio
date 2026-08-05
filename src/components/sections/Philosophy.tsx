import { motion } from 'framer-motion';
import { philosophy } from '@/data/philosophy';
import { staggerContainer, fadeInUp, viewport } from '@/utils/motion';

export function Philosophy() {
  return (
    <section
      id="filosofia"
      className="section-padding relative overflow-hidden"
      aria-labelledby="philosophy-title"
    >
      {/* Dark background with subtle texture */}
      <div className="absolute inset-0 bg-zinc-950 bg-grid" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent" aria-hidden="true" />

      <div className="container-narrow relative z-10">
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
            Filosofía
          </p>
          <h2
            id="philosophy-title"
            className="text-section-title text-zinc-50 max-w-xl"
          >
            Cómo pienso.{' '}
            <span className="text-zinc-600">Por qué construyo así.</span>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {philosophy.map((item, i) => (
            <motion.div
              key={item.number}
              className="group grid grid-cols-[80px_1fr] gap-8 py-10 border-b border-zinc-800/60 last:border-0 hover:border-zinc-700/60 transition-colors duration-300"
              variants={fadeInUp}
            >
              {/* Number */}
              <div className="flex items-start pt-1">
                <span className="text-5xl font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors duration-300 font-mono leading-none tabular-nums">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-zinc-100 transition-colors duration-300 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-lg group-hover:text-zinc-400 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
