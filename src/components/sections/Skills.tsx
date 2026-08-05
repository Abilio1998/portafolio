import { motion } from 'framer-motion';
import {
  Monitor, Server, Database, Brain, Palette,
  Search, Cloud, Lightbulb,
} from 'lucide-react';
import { skills } from '@/data/skills';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { staggerContainer, fadeInUp, viewport } from '@/utils/motion';

const iconMap: Record<string, React.ElementType> = {
  Monitor, Server, Database, Brain, Palette,
  Search, Cloud, Lightbulb,
};

export function Skills() {
  return (
    <section
      id="habilidades"
      className="section-padding bg-zinc-950/50"
      aria-labelledby="skills-title"
    >
      <div className="container-narrow">
        <SectionTitle
          id="skills-title"
          label="Habilidades"
          title="Lo que sé hacer."
          description="No solo tecnologías — disciplinas completas que me permiten construir productos de principio a fin."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon] ?? Monitor;
            return (
              <motion.div
                key={skill.category}
                className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 cursor-default"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/50 flex items-center justify-center mb-4 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                  <Icon
                    size={18}
                    className="text-zinc-500 group-hover:text-blue-400 transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-zinc-200 mb-1.5">
                  {skill.category}
                </h3>
                <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* Items */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-500 text-xs border border-zinc-700/40 group-hover:border-zinc-600/40 transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
