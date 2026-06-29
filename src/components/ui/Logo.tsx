import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({
  className,
  variant = 'dark'
}: {
  className?: string;
  variant?: 'dark' | 'light';
}) {
  return (
    <Link
      href="/"
      aria-label="Reggals — Home"
      className={cn(
        'inline-flex items-baseline gap-1 font-display text-2xl md:text-3xl tracking-tight',
        variant === 'dark' ? 'text-charcoal' : 'text-ivory',
        className
      )}
    >
      <span>Reggals</span>
      <span aria-hidden className="text-rose-gold text-base translate-y-[-2px]">
        ♥
      </span>
    </Link>
  );
}
