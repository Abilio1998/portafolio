import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'founder' | 'saas' | 'inprogress' | 'completed' | 'web' | 'spa';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const base =
    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase';

  const variants = {
    default: 'bg-zinc-800 text-zinc-400 border border-zinc-700',
    founder:
      'bg-gradient-to-r from-indigo-500/15 to-purple-500/15 text-indigo-300 border border-indigo-500/30',
    saas: 'bg-blue-500/10 text-blue-300 border border-blue-500/25',
    inprogress: 'bg-amber-500/10 text-amber-300 border border-amber-500/25',
    completed: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25',
    web: 'bg-teal-500/10 text-teal-300 border border-teal-500/25',
    spa: 'bg-red-500/10 text-red-300 border border-red-500/25',
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {variant === 'founder' && (
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
      )}
      {children}
    </span>
  );
}
