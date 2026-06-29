'use client';

import Link from 'next/link';
import Image from 'next/image';
import { occasions } from '@/lib/data/taxonomy';

export function OccasionStrip() {
  return (
    <section className="py-16 md:py-20 border-t border-line">
      <div className="container-luxe">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-3">Shop by Occasion</p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal balanced">
              For every quietly meaningful moment.
            </h2>
          </div>
          <Link href="/shop" className="hidden md:inline-flex btn-link">
            Browse all gifts
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          {occasions.map((o) => (
            <Link
              key={o.slug}
              href={`/shop?occasion=${o.slug}`}
              className="group relative flex-none w-56 md:w-64 aspect-[4/5] rounded-xl2 overflow-hidden"
            >
              <Image
                src={o.image}
                alt={o.name}
                fill
                sizes="240px"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-charcoal/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-ivory">
                <p className="font-display text-2xl">{o.name}</p>
                <p className="text-eyebrow uppercase tracking-luxe text-rose-dust mt-2">
                  Shop gifts →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
