import Link from 'next/link';
import Image from 'next/image';
import { collections } from '@/lib/data/taxonomy';

export const metadata = { title: 'Collections' };

export default function CollectionsIndex() {
  return (
    <section className="container-luxe py-20">
      <p className="eyebrow mb-3">Curated Edits</p>
      <h1 className="font-display text-5xl md:text-6xl balanced max-w-2xl">Seasonal stories, quietly told.</h1>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((c) => (
          <Link key={c.slug} href={`/collections/${c.slug}`} className="group relative aspect-[4/3] rounded-xl2 overflow-hidden">
            <Image src={c.image} alt={c.name} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70" />
            <div className="absolute bottom-6 left-6 right-6 text-ivory">
              {c.badge && <p className="eyebrow text-rose-dust mb-2">{c.badge}</p>}
              <p className="font-display text-3xl">{c.name}</p>
              <p className="text-ivory/85 mt-1">{c.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
