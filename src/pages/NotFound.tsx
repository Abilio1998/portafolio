import { Link } from 'react-router-dom';
import { ArrowRight } from '@/components/ui/Icons';

export function NotFound() {
  return (
    <main className="min-h-[100svh] flex items-center justify-center px-6 pt-20">
      <title>Página no encontrada | Abi Studio Web</title>
      <meta name="robots" content="noindex" />
      <div className="text-center animate-fade-up">
        <p className="text-8xl md:text-9xl font-extrabold text-brand/30 mb-2 tabular-nums tracking-tighter">404</p>
        <h1 className="text-2xl md:text-3xl font-extrabold text-ink mb-3 tracking-tight">
          Esta página no existe
        </h1>
        <p className="text-ink-600 mb-8 max-w-sm mx-auto">
          Puede que el enlace esté roto o que la página se haya movido. Vuelve al inicio y te ayudo desde ahí.
        </p>
        <Link to="/" className="btn btn-lg btn-primary">
          Volver al inicio <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}
