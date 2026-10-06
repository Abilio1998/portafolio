import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/utils/cn';

interface SectionTitleProps {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  invert?: boolean;
  className?: string;
}

export function SectionTitle({
  id,
  label,
  title,
  description,
  align = 'left',
  invert = false,
  className,
}: SectionTitleProps) {
  return (
    <Reveal
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center mx-auto max-w-2xl',
        className
      )}
    >
      {label && (
        <p className={cn('eyebrow', invert && '!text-brand-400')}>{label}</p>
      )}
      <h2
        id={id}
        className={cn('text-section-title mb-4', invert ? 'text-white' : 'text-ink')}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('text-lead max-w-2xl', align === 'center' && 'mx-auto', invert && '!text-ink-300')}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
