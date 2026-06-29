import Link from 'next/link';
import { Check, Truck, Package, Home, Sparkles } from 'lucide-react';

const TIMELINE = [
  { key: 'placed', label: 'Order placed', at: 'Today · 14:32', done: true, icon: Check },
  { key: 'confirmed', label: 'Confirmed', at: 'Today · 14:35', done: true, icon: Sparkles },
  { key: 'packed', label: 'Hand-wrapped & packed', at: 'Tomorrow · 11:00', done: false, icon: Package },
  { key: 'shipped', label: 'Out with the courier', at: '—', done: false, icon: Truck },
  { key: 'delivered', label: 'Delivered to her doorstep', at: '—', done: false, icon: Home }
];

export default function TrackOrderPage({ params }: { params: { id: string } }) {
  return (
    <section className="container-luxe py-16 max-w-3xl mx-auto">
      <p className="eyebrow mb-3">Order #{params.id}</p>
      <h1 className="font-display text-4xl md:text-5xl balanced">
        Your gift is on its quiet way.
      </h1>
      <p className="mt-4 text-charcoal-muted pretty">
        We’ll send you a soft note at each step. Expected by <span className="text-charcoal">Saturday, 12 Jul</span>.
      </p>

      <ol className="mt-12 space-y-7">
        {TIMELINE.map((step, i) => {
          const Icon = step.icon;
          return (
            <li key={step.key} className="relative pl-14">
              {i < TIMELINE.length - 1 && (
                <span className={`absolute left-[18px] top-9 bottom-[-28px] w-px ${step.done ? 'bg-rose-gold' : 'bg-line'}`} />
              )}
              <span
                className={`absolute left-0 top-0 w-9 h-9 rounded-full flex items-center justify-center ${
                  step.done ? 'bg-rose-gold text-ivory' : 'border border-line bg-ivory text-charcoal-soft'
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <p className="font-display text-xl">{step.label}</p>
              <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-1">{step.at}</p>
            </li>
          );
        })}
      </ol>

      <div className="mt-14 card p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="font-display text-xl">Need a small change?</p>
          <p className="text-charcoal-muted text-sm">You can edit the address or note within 30 minutes.</p>
        </div>
        <Link href="/support" className="btn-ghost">Talk to us</Link>
      </div>
    </section>
  );
}
