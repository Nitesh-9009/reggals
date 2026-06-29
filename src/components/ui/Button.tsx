import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-sans tracking-luxe uppercase text-sm transition-all duration-500 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite',
  {
    variants: {
      variant: {
        primary: 'bg-charcoal text-ivory hover:bg-rose-deep hover:shadow-luxe',
        secondary:
          'bg-rose-gold text-ivory hover:bg-rose-deep hover:shadow-luxe',
        ghost:
          'border border-charcoal/20 text-charcoal hover:border-rose-gold hover:text-rose-gold',
        link: 'border-b border-charcoal/40 pb-1 rounded-none uppercase tracking-luxe text-charcoal hover:text-rose-gold hover:border-rose-gold',
        soft: 'bg-blush text-charcoal hover:bg-rose-dust'
      },
      size: {
        sm: 'h-9 px-5 text-[11px]',
        md: 'h-11 px-7',
        lg: 'h-14 px-9 text-[13px]'
      }
    },
    defaultVariants: { variant: 'primary', size: 'md' }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = 'Button';
