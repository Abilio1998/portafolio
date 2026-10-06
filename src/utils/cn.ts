import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Le indicamos a tailwind-merge que nuestras clases tipográficas personalizadas
// son tamaños de fuente; si no, las confunde con colores (text-*) y las elimina.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': ['text-display', 'text-section-title', 'text-lead'],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
