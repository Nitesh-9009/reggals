import Image from 'next/image';

export const metadata = { title: 'Our story' };

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-luxe py-20 md:py-28 max-w-3xl">
          <p className="eyebrow mb-3">Our story</p>
          <h1 className="font-display text-5xl md:text-7xl balanced">
            Reggals began as a quiet question.
          </h1>
          <p className="mt-6 text-charcoal-muted text-lg pretty">
            What if gifting felt less like shopping, and more like writing a letter? A small,
            considered gesture — slow, beautifully wrapped, delivered with care.
          </p>
        </div>
      </section>

      <section className="container-luxe pb-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7 relative aspect-[4/3] rounded-xl2 overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=85" alt="" fill sizes="60vw" className="object-cover" />
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center">
            <div>
              <p className="eyebrow mb-3">Our promise</p>
              <p className="font-display text-3xl pretty">
                A boutique that breathes. Curated, never crowded.
              </p>
              <p className="mt-4 text-charcoal-muted pretty">
                Every piece is chosen for craft, intention, and warmth. We work with small
                ateliers across India and Europe — and pack everything by hand, in our Mumbai studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe py-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { n: '24', l: 'Boutique ateliers' },
          { n: '12,000+', l: 'Gifts wrapped' },
          { n: '4.9★', l: 'Avg. customer rating' }
        ].map((s) => (
          <div key={s.l} className="card p-7 text-center">
            <p className="font-display text-5xl text-charcoal">{s.n}</p>
            <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-2">{s.l}</p>
          </div>
        ))}
      </section>
    </>
  );
}
