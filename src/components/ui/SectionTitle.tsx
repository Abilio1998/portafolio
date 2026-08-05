import { motion } from 'framer-motion';
import { fadeInUp, viewport } from '@/utils/motion';
import { cn } from '@/utils/cn';

interface SectionTitleProps {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  id,
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      id={id}
      className={cn(
        'mb-16',
        align === 'center' && 'text-center mx-auto max-w-2xl',
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
    >
      {label && (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
          {label}
        </p>
      )}
      <h2 className="text-section-title text-zinc-50 mb-4">{title}</h2>
      {description && (
        <p className="text-body-large max-w-xl">{description}</p>
      )}
    </motion.div>
  );
}
