import { Sparkles, Truck, Gift, ShieldCheck, RefreshCcw } from 'lucide-react';

const items = [
  { icon: Sparkles, label: 'Hand-curated edits', sub: 'Small-batch from quiet ateliers' },
  { icon: Gift, label: 'Wrapped, always', sub: 'Linen ribbon, hand-stamped card' },
  { icon: Truck, label: '2–4 day delivery', sub: 'Express in select metros' },
  { icon: RefreshCcw, label: '14-day returns', sub: 'No-questions-asked' },
  { icon: ShieldCheck, label: 'Secure payments', sub: '256-bit · Razorpay / Stripe' }
];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-ivory/50">
      <div className="container-luxe py-8">
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-4">
          {items.map((i) => {
            const Icon = i.icon;
            return (
              <li key={i.label} className="flex items-center gap-3">
                <span className="flex-none w-9 h-9 rounded-full bg-blush/60 flex items-center justify-center text-rose-deep">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-charcoal font-medium leading-tight">{i.label}</p>
                  <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-1">
                    {i.sub}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
