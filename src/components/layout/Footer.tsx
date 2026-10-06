import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, WhatsApp } from '@/components/ui/Icons';
import { site, whatsappUrl, DEFAULT_WA_MESSAGE } from '@/data/site';

const links = [
  { to: '/#servicios', label: 'Servicios' },
  { to: '/#proyectos', label: 'Proyectos' },
  { to: '/#proceso', label: 'Cómo trabajo' },
  { to: '/#sobre-mi', label: 'Sobre mí' },
  { to: '/#faq', label: 'Preguntas frecuentes' },
  { to: '/#contacto', label: 'Contacto' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-300 pb-24 sm:pb-0">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-4 bg-white rounded-xl px-4 py-2 w-fit">
              <img src="/LOGO-ABISTUDIO-WEB.png" alt="Abi Studio Web" className="h-5 md:h-7 w-auto" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Desarrollo web para restaurantes y negocios locales: webs rápidas,
              reservas online y cartas digitales que consiguen clientes.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-white mb-4">Navegación</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-white mb-4">Hablemos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <WhatsApp size={16} /> WhatsApp · {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors break-all">
                  <Mail size={16} /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors">
                  <Github size={16} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>Hecho con React + TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
}
