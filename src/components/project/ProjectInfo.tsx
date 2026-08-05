import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { fadeInUp, staggerContainer, viewport } from '@/utils/motion';

interface ProjectInfoProps {
  project: Project;
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <section className="py-16" aria-label="Detalles del proyecto">
      <div className="container-narrow">
        {/* Problem / Solution / Result */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {[
            {
              label: 'El problema',
              content: project.problem,
              accent: '#ef4444',
            },
            {
              label: 'La solución',
              content: project.solution,
              accent: project.accentColor,
            },
            {
              label: 'El resultado',
              content: project.result,
              accent: '#10b981',
            },
          ].map((block) => (
            <motion.div
              key={block.label}
              className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40"
              variants={fadeInUp}
            >
              <div
                className="w-1.5 h-1.5 rounded-full mb-4"
                style={{ background: block.accent }}
              />
              <h3
                className="text-xs font-semibold tracking-[0.15em] uppercase mb-3"
                style={{ color: block.accent }}
              >
                {block.label}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{block.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies + Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technologies */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-600 mb-5">
              Tecnologías utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-zinc-800/80 text-zinc-400 text-xs font-medium border border-zinc-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-600 mb-5">
              Funcionalidades principales
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: project.accentColor }}
                  />
                  <span className="text-sm text-zinc-400">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
