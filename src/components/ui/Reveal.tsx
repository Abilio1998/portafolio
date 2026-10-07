import type { ElementType, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

/**
 * Componente Reveal modificado para cargar directamente el contenido sin animaciones de scroll,
 * atendiendo a la preferencia de que todo cargue homogéneo de golpe.
 */
export function Reveal({ children, className, as: Tag = 'div' }: RevealProps) {
  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}
