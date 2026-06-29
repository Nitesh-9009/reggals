import * as React from 'react';
import { cn } from '@/lib/utils';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { label?: string }
>(({ className, label, id, ...props }, ref) => {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={cn(
          'w-full border-b border-charcoal/20 bg-transparent py-3 text-charcoal placeholder:text-charcoal-soft focus:border-rose-gold transition-colors outline-none',
          className
        )}
        {...props}
      />
    </div>
  );
});
Input.displayName = 'Input';

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }
>(({ className, label, id, ...props }, ref) => {
  const generatedId = React.useId();
  const textareaId = id ?? generatedId;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        rows={4}
        className={cn(
          'w-full border border-line bg-ivory/50 rounded-md py-3 px-4 text-charcoal placeholder:text-charcoal-soft focus:border-rose-gold transition-colors outline-none resize-none',
          className
        )}
        {...props}
      />
    </div>
  );
});
Textarea.displayName = 'Textarea';
