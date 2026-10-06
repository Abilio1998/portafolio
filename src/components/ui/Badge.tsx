import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'founder' | 'saas' | 'inprogress' | 'completed' | 'web' | 'spa';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const base =
    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase';

  const variants = {
    default: 'bg-cream-100 text-ink-600 border border-cream-200',
    founder: 'bg-ink text-white border border-ink',
    saas: 'bg-brand-50 text-brand-700 border border-brand-100',
    inprogress: 'bg-amber-50 text-amber-800 border border-amber-200',
    completed: 'bg-trust-50 text-trust-600 border border-green-200',
    web: 'bg-teal-50 text-teal-800 border border-teal-200',
    spa: 'bg-red-50 text-red-800 border border-red-200',
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {variant === 'founder' && (
        <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
      )}
      {children}
    </span>
  );
}
