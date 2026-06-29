import { cn } from '@/lib/utils';

export function Badge({
  children,
  tone = 'rose',
  className
}: {
  children: React.ReactNode;
  tone?: 'rose' | 'gold' | 'ivory' | 'charcoal';
  className?: string;
}) {
  const tones = {
    rose: 'bg-blush text-rose-deep',
    gold: 'bg-gold-soft/40 text-charcoal',
    ivory: 'bg-ivory text-charcoal border border-line',
    charcoal: 'bg-charcoal text-ivory'
  } as const;

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-eyebrow uppercase tracking-luxe',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
