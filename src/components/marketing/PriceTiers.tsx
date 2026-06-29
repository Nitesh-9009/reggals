import Link from 'next/link';

const tiers = [
  {
    label: 'Under ₹999',
    href: '/shop?max=999',
    description: 'Quiet, thoughtful favorites.',
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80'
  },
  {
    label: 'Under ₹1,999',
    href: '/shop?max=1999',
    description: 'A little more, beautifully wrapped.',
    image:
      'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    label: 'Under ₹4,999',
    href: '/shop?max=4999',
    description: 'For meaningful moments.',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80'
  }
];

export function PriceTiers() {
  return (
    <section className="py-20 md:py-24 border-t border-line bg-ivory/40">
      <div className="container-luxe">
        <header className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Shop by Budget</p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal balanced">
            Thoughtful, at any price.
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="group relative aspect-[5/6] md:aspect-[4/5] rounded-xl2 overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${t.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/30 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end text-ivory">
                <p className="text-eyebrow uppercase tracking-regal text-rose-dust mb-3">
                  Gift
                </p>
                <p className="font-display text-3xl md:text-4xl mb-2">{t.label}</p>
                <p className="text-ivory/80">{t.description}</p>
                <span className="inline-flex items-center gap-2 mt-5 text-eyebrow uppercase tracking-luxe text-rose-dust group-hover:text-ivory transition-colors">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
