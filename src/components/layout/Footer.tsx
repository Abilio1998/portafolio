import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '/#sobre-mi', label: 'Sobre mí' },
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#habilidades', label: 'Habilidades' },
  { href: '/#contacto', label: 'Contacto' },
];

const socials = [
  {
    href: 'https://github.com/Abilio1998',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/abi-fernandez-0ab034188/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:abifernandez826@gmail.com',
    label: 'Email',
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950/80">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="font-semibold text-zinc-100 text-sm tracking-tight">
                Abilio<span className="text-zinc-500">.dev</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Frontend Developer & Product Builder. Construyo productos digitales
              que resuelven problemas reales.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-600 mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-600 mb-4">
              Contacto
            </h3>
            <ul className="space-y-2.5">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200 group"
                  >
                    <social.icon size={14} />
                    {social.label}
                    {social.href.startsWith('http') && (
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Abilio Fernández. Todos los derechos reservados.
          </p>
          <p className="text-xs text-zinc-700">
            Diseñado y desarrollado con React + TailwindCSS + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
