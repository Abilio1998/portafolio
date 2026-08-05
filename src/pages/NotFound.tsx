import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/motion';

export function NotFound() {
  return (
    <main className="min-h-[100svh] flex items-center justify-center">
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <p className="text-8xl font-bold text-zinc-800 mb-4 tabular-nums">404</p>
        <h1 className="text-2xl font-semibold text-zinc-300 mb-4">
          Página no encontrada
        </h1>
        <p className="text-zinc-600 mb-8">
          Esta URL no existe o fue movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-xl hover:bg-blue-400 transition-all duration-200 active:scale-[0.97]"
        >
          Volver al inicio
        </Link>
      </motion.div>
    </main>
  );
}
