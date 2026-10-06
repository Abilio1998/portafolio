import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WhatsApp, ArrowRight } from '@/components/ui/Icons';
import { whatsappUrl, DEFAULT_WA_MESSAGE } from '@/data/site';
import { cn } from '@/utils/cn';

/**
 * Barra de conversión fija para móvil: aparece al pasar la portada
 * y mantiene siempre a un toque la acción de contratar.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={cn(
        'sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-cream/95 backdrop-blur border-t border-cream-200 transition-transform duration-300',
        visible ? 'translate-y-0' : 'translate-y-full'
      )}
      aria-hidden={!visible}
    >
      <div className="flex gap-2">
        <Link
          to="/#contacto"
          tabIndex={visible ? 0 : -1}
          className="btn btn-md btn-primary flex-1"
          id="sticky-cta-quote"
        >
          Presupuesto gratis <ArrowRight size={16} />
        </Link>
        <a
          href={whatsappUrl(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="btn btn-md btn-whatsapp !px-4"
          aria-label="Escribir por WhatsApp"
          id="sticky-cta-whatsapp"
        >
          <WhatsApp size={20} />
        </a>
      </div>
    </div>
  );
}
