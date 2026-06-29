'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/lib/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export function SearchView() {
  const params = useSearchParams();
  const q = params.get('q') ?? '';
  const lower = q.toLowerCase().trim();

  const results = lower
    ? products.filter((p) =>
        [p.name, p.brand, p.tagline, p.description, ...p.categories, ...p.occasions, ...p.tags]
          .join(' ')
          .toLowerCase()
          .includes(lower)
      )
    : [];

  const suggestions = ['Personalized necklace', 'Anniversary', 'Perfume', 'Silk scarf', 'Gift box'];

  return (
    <section className="container-luxe py-16">
      <p className="eyebrow mb-3">Search</p>
      <h1 className="font-display text-4xl md:text-5xl balanced">
        {q ? <>Results for <span className="italic text-rose-deep">“{q}”</span></> : 'What are you looking for?'}
      </h1>
      <form action="/search" className="mt-8 flex items-end gap-3 border-b-2 border-charcoal pb-2 max-w-2xl">
        <input
          name="q"
          defaultValue={q}
          placeholder="Try ‘rose gold pendant’"
          className="flex-1 bg-transparent text-2xl md:text-3xl font-display outline-none placeholder:text-charcoal-soft/70"
        />
        <button className="btn-primary">Search</button>
      </form>

      {q && results.length === 0 && (
        <div className="mt-16 text-center">
          <p className="font-display text-3xl balanced">No matches — yet.</p>
          <p className="mt-3 text-charcoal-muted">Try one of these gentler searches:</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {suggestions.map((s) => (
              <Link key={s} href={`/search?q=${encodeURIComponent(s)}`} className="px-4 py-2 rounded-full border border-line text-sm hover:border-rose-gold hover:text-rose-gold">
                {s}
              </Link>
            ))}
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      {!q && (
        <div className="mt-12">
          <p className="eyebrow mb-4">Popular searches</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <Link key={s} href={`/search?q=${encodeURIComponent(s)}`} className="px-4 py-2 rounded-full border border-line text-sm hover:border-rose-gold hover:text-rose-gold">
                {s}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
