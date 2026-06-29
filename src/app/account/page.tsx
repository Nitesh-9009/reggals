import Link from 'next/link';
import { Gift, Sparkles } from 'lucide-react';

export default function AccountOverview() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <Stat label="Open orders" value="2" hint="One ships tomorrow" />
        <Stat label="Wishlist" value="6" hint="2 back in stock" />
        <Stat label="Reggals coins" value="1,240" hint="Worth ₹1,240" />
      </div>

      <section className="card p-7 mb-8">
        <p className="eyebrow mb-3">Continue where you left off</p>
        <p className="font-display text-2xl">Midnight Bloom — Eau de Parfum</p>
        <p className="text-charcoal-muted mt-1">You were looking at this two days ago.</p>
        <Link href="/product/midnight-bloom-eau-de-parfum" className="btn-link mt-5 inline-flex">View again</Link>
      </section>

      <section className="card p-7 bg-blush/40 border-rose-gold/30">
        <Sparkles className="h-6 w-6 text-rose-gold mb-3" />
        <p className="font-display text-2xl balanced">Reggals Concierge is now available.</p>
        <p className="text-charcoal-muted mt-2 pretty">
          Tell us about her — a few quiet questions, and we’ll hand-curate the perfect gift.
        </p>
        <Link href="/support" className="btn-primary mt-6 inline-flex">
          <Gift className="h-4 w-4" /> Start a curation
        </Link>
      </section>
    </>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="card p-6">
      <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">{label}</p>
      <p className="font-display text-4xl text-charcoal mt-2">{value}</p>
      <p className="text-sm text-charcoal-muted mt-1">{hint}</p>
    </div>
  );
}
