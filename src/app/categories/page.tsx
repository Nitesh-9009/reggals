import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/data/taxonomy';

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Explore every category in the Reggals boutique.'
};

export default function CategoriesPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-luxe text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">The Boutique</p>
          <h1 className="font-display text-5xl md:text-6xl balanced">
            Twelve quietly considered worlds.
          </h1>
          <p className="mt-6 text-lg text-charcoal-muted pretty">
            Each category is hand-curated for soft, premium gifting — slow,
            tactile, and beautifully wrapped.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/shop?category=${c.slug}`}
                className="group relative aspect-[4/5] rounded-xl2 overflow-hidden"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-ivory">
                  <p className="font-display text-xl">{c.name}</p>
                  <p className="text-eyebrow uppercase tracking-luxe text-rose-dust mt-1.5 opacity-90">
                    {c.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
