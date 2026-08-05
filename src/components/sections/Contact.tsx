import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowUpRight, Phone } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { fadeInUp, staggerContainer, viewport } from '@/utils/motion';

const contactLinks = [
  {
    id: 'contact-email',
    label: 'Email',
    value: 'abifernandez826@gmail.com',
    href: 'mailto:abifernandez826@gmail.com',
    icon: Mail,
    description: 'La forma más rápida de contactarme.',
    external: false,
  },
  {
    id: 'contact-phone',
    label: 'Teléfono',
    value: '+34 698 60 15 18',
    href: 'tel:+34698601518',
    icon: Phone,
    description: 'Disponible para llamadas directas.',
    external: false,
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'abi-fernandez',
    href: 'https://www.linkedin.com/in/abi-fernandez-0ab034188/',
    icon: Linkedin,
    description: 'Perfil profesional y trayectoria.',
    external: true,
  },
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'github.com/Abilio1998',
    href: 'https://github.com/Abilio1998',
    icon: Github,
    description: 'Código abierto y proyectos.',
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contacto"
      className="section-padding"
      aria-labelledby="contact-title"
    >
      <div className="container-narrow">
        <SectionTitle
          id="contact-title"
          label="Contacto"
          title="Hablemos."
          description="¿Tienes un proyecto en mente? ¿Buscas un Frontend Developer? Estoy disponible y me encantará escucharte."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group flex flex-col gap-4 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 no-underline"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              aria-label={`Contactar por ${link.label}`}
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/50 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                  <link.icon
                    size={18}
                    className="text-zinc-500 group-hover:text-blue-400 transition-colors duration-300"
                  />
                </div>
                {link.external && (
                  <ArrowUpRight
                    size={14}
                    className="text-zinc-700 group-hover:text-zinc-400 transition-colors duration-200"
                  />
                )}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 group-hover:text-zinc-100 transition-colors duration-200 mb-0.5">
                  {link.label}
                </h3>
                <p className="text-xs text-zinc-600 mb-2">{link.description}</p>
                <p className="text-xs text-zinc-500 font-mono break-all">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CV Download */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <a
            id="contact-download-cv"
            href="/cv-abilio-fernandez.pdf"
            download
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-zinc-700 text-zinc-400 text-sm font-medium rounded-xl hover:border-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/40 transition-all duration-200 active:scale-[0.97]"
          >
            <Download size={15} />
            Descargar CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
