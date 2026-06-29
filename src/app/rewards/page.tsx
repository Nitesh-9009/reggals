import Link from 'next/link';
import { Sparkles, Gift, Crown } from 'lucide-react';

export const metadata = { title: 'Rewards' };

export default function RewardsTopPage() {
  return (
    <section className="container-luxe py-20">
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-3">Reggals Rewards</p>
        <h1 className="font-display text-5xl md:text-6xl balanced">Small luxuries, gently earned.</h1>
        <p className="mt-5 text-charcoal-muted text-lg pretty">
          Earn coins on every order, every review, and every referral. Coins become rupees at checkout — beautifully simple.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        <Tier icon={<Sparkles className="h-5 w-5" />} name="Petal" perks={['5 coins / ₹100', 'Free wrap', 'Early birthday note']} />
        <Tier icon={<Gift className="h-5 w-5" />} name="Bloom" perks={['8 coins / ₹100', 'Free express delivery', 'Quarterly samples']} />
        <Tier icon={<Crown className="h-5 w-5" />} name="Regal" perks={['12 coins / ₹100', 'Personal concierge', 'Members-only edits']} />
      </div>
      <p className="text-center mt-12">
        <Link href="/sign-up" className="btn-primary inline-flex">Join the programme</Link>
      </p>
    </section>
  );
}

function Tier({ icon, name, perks }: { icon: React.ReactNode; name: string; perks: string[] }) {
  return (
    <div className="card p-7">
      <div className="text-rose-gold mb-3">{icon}</div>
      <p className="font-display text-2xl">{name}</p>
      <ul className="mt-4 space-y-2 text-charcoal-muted">
        {perks.map((p) => <li key={p}>· {p}</li>)}
      </ul>
    </div>
  );
}
