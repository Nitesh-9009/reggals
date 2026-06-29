import { cn } from '@/lib/utils';

export function Section({
  children,
  className,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  bordered
}: {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  bordered?: boolean;
}) {
  return (
    <section
      className={cn(
        'py-20 md:py-28',
        bordered && 'border-t border-line',
        className
      )}
    >
      <div className="container-luxe">
        {(eyebrow || title || subtitle) && (
          <header
            className={cn(
              'max-w-2xl mb-12 md:mb-16',
              align === 'center' && 'mx-auto text-center'
            )}
          >
            {eyebrow && (
              <p className="eyebrow mb-4">{eyebrow}</p>
            )}
            {title && (
              <h2 className="text-charcoal balanced">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-charcoal-muted pretty text-lg">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
