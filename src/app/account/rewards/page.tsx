import { Gift, Sparkles } from 'lucide-react';

export default function RewardsPage() {
  return (
    <>
      <div className="card p-8 bg-gradient-to-br from-blush/70 to-ivory">
        <p className="eyebrow text-rose-deep mb-3">Reggals Rewards</p>
        <p className="font-display text-5xl text-charcoal">1,240 <span className="text-2xl text-charcoal-muted">coins</span></p>
        <p className="mt-2 text-charcoal-muted">Worth ₹1,240 at checkout · Earn 5 coins per ₹100 spent.</p>
        <div className="mt-7 flex gap-3">
          <button className="btn-primary">Apply at checkout</button>
          <button className="btn-link">View history</button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        <Tier icon={<Sparkles className="h-5 w-5" />} label="Petal" hint="0 — 4,999 spent" active />
        <Tier icon={<Gift className="h-5 w-5" />} label="Bloom" hint="5,000 — 24,999 spent" />
        <Tier icon={<Gift className="h-5 w-5" />} label="Regal" hint="25,000+ · concierge access" />
      </div>
    </>
  );
}

function Tier({ icon, label, hint, active }: { icon: React.ReactNode; label: string; hint: string; active?: boolean }) {
  return (
    <div className={`card p-6 ${active ? 'border-rose-gold' : ''}`}>
      <div className="text-rose-gold mb-3">{icon}</div>
      <p className="font-display text-xl">{label}</p>
      <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-1">{hint}</p>
    </div>
  );
}
