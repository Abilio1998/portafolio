import { motion } from 'framer-motion';
import { technologies } from '@/data/technologies';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { staggerContainer, fadeInUp, viewport } from '@/utils/motion';

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Bases de datos',
  ai: 'IA',
  devops: 'Deploy',
  tools: 'Herramientas',
};

export function Technologies() {
  return (
    <section
      id="tecnologias"
      className="section-padding"
      aria-labelledby="tech-title"
    >
      <div className="container-narrow">
        <SectionTitle
          id="tech-title"
          label="Stack"
          title="Tecnologías."
          description="Las herramientas con las que construyo. Elegidas por su calidad, no por moda."
        />

        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-900/80 transition-all duration-200 cursor-default"
              variants={fadeInUp}
              whileHover={{ scale: 1.04, y: -2 }}
              transition={{ duration: 0.15 }}
            >
              <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200">
                {tech.name}
              </span>
              <span className="text-xs text-zinc-700 group-hover:text-zinc-600 transition-colors duration-200">
                {categoryLabels[tech.category]}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
