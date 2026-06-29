import { notFound } from 'next/navigation';
import Image from 'next/image';
import { collections } from '@/lib/data/taxonomy';
import { products } from '@/lib/data/products';
import { ProductGrid } from '@/components/product/ProductGrid';

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = collections.find((x) => x.slug === params.slug);
  return { title: c?.name ?? 'Collection' };
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const c = collections.find((x) => x.slug === params.slug);
  if (!c) notFound();
  const items = products.filter((p) => p.collections?.includes(c.slug));

  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image src={c.image} alt={c.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-luxe pb-16 text-ivory">
            {c.badge && <p className="eyebrow text-rose-dust mb-3">{c.badge}</p>}
            <h1 className="font-display text-5xl md:text-7xl text-ivory balanced max-w-3xl">{c.name}</h1>
            <p className="mt-4 text-ivory/85 text-xl pretty max-w-xl">{c.subtitle}</p>
          </div>
        </div>
      </section>

      {items.length > 0 ? (
        <ProductGrid products={items} eyebrow="The edit" title="Quietly curated for this collection." />
      ) : (
        <ProductGrid products={products.slice(0, 4)} eyebrow="From the boutique" title="A few quiet picks while this collection comes to life." />
      )}
    </>
  );
}
