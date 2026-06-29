'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQ = [
  {
    q: 'How long does delivery take?',
    a: 'Most orders ship in 2–4 business days. Express (next-day) is available in select metros, and same-day flowers are available in Mumbai, Delhi, and Bangalore.'
  },
  {
    q: 'Do you gift-wrap every order?',
    a: 'Every Reggals order is beautifully packaged at no charge. Add our signature gift wrap (hand-tied linen ribbon, hand-stamped card) for ₹79.'
  },
  {
    q: 'Can I schedule a delivery date?',
    a: 'Yes — at checkout, choose “Scheduled” and pick a date. We hold and dispatch so it arrives on the day you’d like.'
  },
  {
    q: 'What is your returns policy?',
    a: '14-day, no-questions-asked returns. Personalized items are non-returnable except for defects.'
  },
  {
    q: 'How do Reggals coins work?',
    a: 'You earn 5 coins per ₹100 spent. 1 coin = ₹1. Apply at checkout in any amount.'
  },
  {
    q: 'Do you ship internationally?',
    a: 'Soon. We currently ship across India. Sign up to be notified when we open international shipping.'
  },
  {
    q: 'Is my payment secure?',
    a: 'Yes. We use Razorpay and Stripe with 256-bit encryption. No card data is ever stored on our servers.'
  },
  {
    q: 'Can I send a gift anonymously?',
    a: 'Yes — at checkout, choose “Anonymous gift” and we’ll omit your name from the card.'
  }
];

export default function FaqsPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-luxe py-20 max-w-3xl mx-auto">
      <p className="eyebrow mb-3">Quietly answered</p>
      <h1 className="font-display text-5xl md:text-6xl balanced">Questions, gently addressed.</h1>
      <ul className="mt-14 space-y-2">
        {FAQ.map((f, i) => (
          <li key={i} className="border-b border-line">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left hover:text-rose-gold"
            >
              <span className="font-display text-xl">{f.q}</span>
              <ChevronDown className={cn('h-5 w-5 transition-transform', open === i && 'rotate-180 text-rose-gold')} />
            </button>
            <div
              className={cn(
                'grid transition-all duration-500',
                open === i ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <p className="text-charcoal-muted pretty">{f.a}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
