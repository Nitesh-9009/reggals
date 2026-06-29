'use client';

import { useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/lib/data/products';
import { categories, occasions, collections } from '@/lib/data/taxonomy';
import { ProductCard } from '@/components/product/ProductCard';
import { cn } from '@/lib/utils';

type Sort = 'curated' | 'price-asc' | 'price-desc' | 'new';

export function ShopView() {
  const params = useSearchParams();
  const router = useRouter();

  const activeCategory = params.get('category');
  const activeOccasion = params.get('occasion');
  const activeCollection = params.get('collection');
  const activeTag = params.get('tag');
  const max = params.get('max') ? Number(params.get('max')) : undefined;
  const min = params.get('min') ? Number(params.get('min')) : undefined;
  const sort = (params.get('sort') as Sort) ?? 'curated';

  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory) list = list.filter((p) => p.categories.includes(activeCategory));
    if (activeOccasion) list = list.filter((p) => p.occasions.includes(activeOccasion));
    if (activeCollection)
      list = list.filter((p) => p.collections?.includes(activeCollection));
    if (activeTag) list = list.filter((p) => p.tags.includes(activeTag as any));
    if (typeof max === 'number') list = list.filter((p) => p.price <= max);
    if (typeof min === 'number') list = list.filter((p) => p.price >= min);

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'new':
        list.sort(
          (a, b) =>
            Number(b.tags.includes('new')) - Number(a.tags.includes('new'))
        );
        break;
      default:
        list.sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [activeCategory, activeOccasion, activeCollection, activeTag, max, min, sort]);

  function update(key: string, value: string | null) {
    const next = new URLSearchParams(params.toString());
    if (value == null || value === '') next.delete(key);
    else next.set(key, value);
    router.replace(`/shop?${next.toString()}`, { scroll: false });
  }

  const activeFilters = [
    activeCategory && {
      key: 'category',
      label: categories.find((c) => c.slug === activeCategory)?.name ?? activeCategory
    },
    activeOccasion && {
      key: 'occasion',
      label: occasions.find((o) => o.slug === activeOccasion)?.name ?? activeOccasion
    },
    activeCollection && {
      key: 'collection',
      label:
        collections.find((c) => c.slug === activeCollection)?.name ?? activeCollection
    },
    activeTag && { key: 'tag', label: activeTag },
    max && { key: 'max', label: `Under ₹${max}` }
  ].filter(Boolean) as { key: string; label: string }[];

  return (
    <>
      <section className="bg-ivory border-b border-line">
        <div className="container-luxe pt-14 pb-10">
          <p className="eyebrow mb-3">The Boutique</p>
          <h1 className="font-display text-5xl md:text-6xl balanced">
            {activeCategory
              ? categories.find((c) => c.slug === activeCategory)?.name
              : activeOccasion
              ? `Gifts for ${occasions.find((o) => o.slug === activeOccasion)?.name}`
              : 'All Gifts'}
          </h1>
          <p className="mt-4 text-charcoal-muted max-w-xl">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} in the
            boutique, each quietly considered.
          </p>
        </div>
      </section>

      <section className="container-luxe py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Filters (desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <Filters
              params={params}
              update={update}
            />
          </aside>

          {/* Main */}
          <div className="lg:col-span-9">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-3 mb-8 pb-6 border-b border-line">
              <button
                onClick={() => setFiltersOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 text-sm tracking-luxe uppercase"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <div className="hidden lg:flex flex-wrap gap-2">
                {activeFilters.length === 0 ? (
                  <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">
                    No filters applied
                  </p>
                ) : (
                  activeFilters.map((f) => (
                    <button
                      key={f.key}
                      onClick={() => update(f.key, null)}
                      className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm hover:border-rose-gold hover:text-rose-gold"
                    >
                      {f.label}
                      <X className="h-3.5 w-3.5" />
                    </button>
                  ))
                )}
              </div>
              <div className="flex items-center gap-3">
                <label className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => update('sort', e.target.value)}
                  className="bg-transparent border-b border-line py-1 outline-none focus:border-rose-gold text-sm"
                >
                  <option value="curated">Curated</option>
                  <option value="new">New arrivals</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-500',
          filtersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-charcoal/40" onClick={() => setFiltersOpen(false)} />
        <aside
          className={cn(
            'absolute right-0 top-0 bottom-0 w-[90%] max-w-sm bg-ivory shadow-luxe transition-transform duration-500 overflow-y-auto',
            filtersOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-line">
            <p className="eyebrow">Filters</p>
            <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-5">
            <Filters params={params} update={update} />
          </div>
        </aside>
      </div>
    </>
  );
}

function Filters({
  params,
  update
}: {
  params: ReturnType<typeof useSearchParams>;
  update: (key: string, value: string | null) => void;
}) {
  const activeCategory = params.get('category');
  const activeOccasion = params.get('occasion');
  const activeTag = params.get('tag');
  const max = params.get('max');

  return (
    <div className="space-y-10">
      <Group title="Category">
        <ul className="space-y-2">
          {categories.map((c) => (
            <li key={c.slug}>
              <button
                onClick={() =>
                  update('category', activeCategory === c.slug ? null : c.slug)
                }
                className={cn(
                  'text-left w-full py-1 hover:text-rose-gold',
                  activeCategory === c.slug && 'text-rose-gold'
                )}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </Group>

      <Group title="Occasion">
        <ul className="space-y-2">
          {occasions.map((o) => (
            <li key={o.slug}>
              <button
                onClick={() =>
                  update('occasion', activeOccasion === o.slug ? null : o.slug)
                }
                className={cn(
                  'text-left w-full py-1 hover:text-rose-gold',
                  activeOccasion === o.slug && 'text-rose-gold'
                )}
              >
                {o.name}
              </button>
            </li>
          ))}
        </ul>
      </Group>

      <Group title="Budget">
        <ul className="space-y-2">
          {[
            { label: 'Under ₹999', v: '999' },
            { label: 'Under ₹1,999', v: '1999' },
            { label: 'Under ₹4,999', v: '4999' },
            { label: 'Under ₹9,999', v: '9999' }
          ].map((b) => (
            <li key={b.v}>
              <button
                onClick={() => update('max', max === b.v ? null : b.v)}
                className={cn(
                  'text-left w-full py-1 hover:text-rose-gold',
                  max === b.v && 'text-rose-gold'
                )}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </Group>

      <Group title="Tags">
        <ul className="space-y-2">
          {['new', 'bestseller', 'limited', 'personalizable', 'handcrafted', 'eco'].map((t) => (
            <li key={t}>
              <button
                onClick={() => update('tag', activeTag === t ? null : t)}
                className={cn(
                  'text-left w-full py-1 capitalize hover:text-rose-gold',
                  activeTag === t && 'text-rose-gold'
                )}
              >
                {t}
              </button>
            </li>
          ))}
        </ul>
      </Group>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      {children}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-20">
      <p className="font-display text-3xl balanced">Nothing fits those filters — yet.</p>
      <p className="mt-3 text-charcoal-muted">Try fewer filters or explore our editor’s picks.</p>
      <Link href="/shop" className="btn-primary mt-8 inline-flex">
        Reset filters
      </Link>
    </div>
  );
}
