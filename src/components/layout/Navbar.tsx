import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from '@/components/ui/Icons';
import { cn } from '@/utils/cn';

const navLinks = [
  { to: '/#servicios', label: 'Servicios' },
  { to: '/#proyectos', label: 'Proyectos' },
  { to: '/#proceso', label: 'Cómo trabajo' },
  { to: '/#sobre-mi', label: 'Sobre mí' },
  { to: '/#faq', label: 'Preguntas' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Bloquea el scroll del fondo con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled || menuOpen
          ? 'bg-cream/90 backdrop-blur-md border-b border-cream-200 shadow-[0_1px_0_rgba(14,26,43,0.04)]'
          : 'bg-transparent'
      )}
    >
      <nav className="container-wide h-16 md:h-[4.5rem] flex items-center justify-between" aria-label="Principal">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Abi Studio Web — Inicio">
          <img src="/logo.png" alt="Abi Studio Web" className="h-8 md:h-9 w-auto group-hover:scale-105 transition-transform duration-200" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 text-sm font-semibold text-ink-600 hover:text-ink rounded-full hover:bg-ink/5 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            id="nav-cta"
            to="/#contacto"
            className="btn btn-md btn-primary hidden sm:inline-flex"
          >
            Presupuesto gratis
            <ArrowRight size={16} />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full text-ink hover:bg-ink/5 transition-colors"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-cream border-t border-cream-200 animate-fade-up">
          <div className="container-wide py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-2 py-3.5 text-lg font-bold text-ink border-b border-cream-200 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/#contacto" className="btn btn-lg btn-primary mt-4 w-full">
              Pedir presupuesto gratis
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
