import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Github, Linkedin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/utils/motion';

const words = ['Construyo', 'productos', 'digitales', 'que', 'resuelven', 'problemas', 'reales.'];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-grid"
      aria-label="Presentación principal"
    >
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/6 rounded-full blur-[100px]" />
      </div>

      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" aria-hidden="true" />

      <div className="container-narrow relative z-10 text-center">
        {/* Eyebrow label */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs text-zinc-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para nuevos proyectos
          </span>
        </motion.div>

        {/* Main headline — word by word */}
        <motion.h1
          className="text-display mb-8 text-zinc-50 leading-[1.05]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          aria-label="Construyo productos digitales que resuelven problemas reales."
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-[0.25em] ${
                word === 'reales.' ? 'gradient-text-blue' : ''
              }`}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-body-large max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          Frontend Developer especializado en crear soluciones digitales para
          negocios utilizando{' '}
          <span className="text-zinc-300">React, Next.js, TypeScript</span> e{' '}
          <span className="text-zinc-300">Inteligencia Artificial</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a
            href="/#proyectos"
            id="hero-cta-projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 text-white text-sm font-medium rounded-xl hover:bg-blue-400 transition-all duration-200 active:scale-[0.97] shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30"
          >
            Ver proyectos
            <ArrowRight size={16} />
          </a>
          <a
            href="/#contacto"
            id="hero-cta-contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 text-sm font-medium rounded-xl hover:border-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/40 transition-all duration-200 active:scale-[0.97]"
          >
            Contactar
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <a
            href="https://github.com/Abilio1998"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={14} />
            GitHub
          </a>
          <span className="text-zinc-800" aria-hidden="true">·</span>
          <a
            href="https://www.linkedin.com/in/abi-fernandez-0ab034188/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="/#sobre-mi"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors duration-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        aria-label="Scroll hacia abajo"
      >
        <span className="text-xs tracking-[0.15em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
