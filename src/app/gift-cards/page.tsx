import Image from 'next/image';
import { Gift } from 'lucide-react';

const AMOUNTS = [500, 1000, 2500, 5000, 10000];

export const metadata = { title: 'Gift cards' };

export default function GiftCardsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-blush/50">
        <div className="container-luxe py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-3">Reggals Gift Card</p>
            <h1 className="font-display text-5xl md:text-6xl balanced">
              The perfect gift when you’re not quite sure.
            </h1>
            <p className="mt-5 text-charcoal-muted text-lg pretty">
              A digital gift card that lets her choose her own quietly extraordinary thing — sent
              by email or scheduled for the perfect day.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {AMOUNTS.map((a) => (
                <button key={a} className="px-6 py-3 rounded-full border border-line bg-ivory hover:border-rose-gold hover:text-rose-gold transition-colors text-sm tracking-luxe uppercase">
                  ₹{a.toLocaleString('en-IN')}
                </button>
              ))}
              <button className="px-6 py-3 rounded-full border border-charcoal/30 bg-transparent hover:border-rose-gold hover:text-rose-gold text-sm tracking-luxe uppercase">
                Custom amount
              </button>
            </div>
            <button className="btn-primary mt-8"><Gift className="h-4 w-4" /> Send a gift card</button>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xl2 overflow-hidden shadow-luxe">
              <Image
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=85"
                alt=""
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
