import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/data/taxonomy';

export function CategoryMosaic() {
  return (
    <section className="py-20 md:py-24 border-t border-line">
      <div className="container-luxe">
        <header className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Quietly Curated</p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal balanced">
            A boutique for every mood.
          </h2>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.slice(0, 6).map((c) => (
            <Link
              key={c.slug}
              href={`/shop?category=${c.slug}`}
              className="group relative aspect-[3/4] rounded-xl2 overflow-hidden"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(min-width:1024px) 16vw, 33vw"
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-ivory">
                <p className="font-display text-lg">{c.name}</p>
                <p className="text-eyebrow uppercase tracking-luxe text-rose-dust mt-1 opacity-80 group-hover:opacity-100">
                  Shop →
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/categories" className="btn-link">
            View all 12 categories
          </Link>
        </div>
      </div>
    </section>
  );
}
