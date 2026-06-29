'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { collections } from '@/lib/data/taxonomy';

export function FeaturedCollections() {
  return (
    <section className="py-20 md:py-28 border-t border-line">
      <div className="container-luxe">
        <header className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Curated Edits</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal balanced">
            Seasonal stories, quietly told.
          </h2>
          <p className="mt-5 text-charcoal-muted text-lg pretty">
            Each edit is hand-curated by our atelier — a slow study of texture,
            tone, and the small luxuries that make a gift unforgettable.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <Link
              href={`/collections/${collections[0].slug}`}
              className="group block relative aspect-[5/6] lg:aspect-[5/7] rounded-xl2 overflow-hidden"
            >
              <Image
                src={collections[0].image}
                alt={collections[0].name}
                fill
                sizes="(min-width:1024px) 55vw, 100vw"
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-ivory max-w-md">
                {collections[0].badge && (
                  <p className="eyebrow text-rose-dust mb-3">{collections[0].badge}</p>
                )}
                <h3 className="font-display text-4xl md:text-5xl text-ivory">
                  {collections[0].name}
                </h3>
                <p className="text-ivory/85 mt-3 text-lg pretty">
                  {collections[0].subtitle}
                </p>
                <span className="inline-flex items-center gap-2 mt-6 text-eyebrow uppercase tracking-luxe text-rose-dust group-hover:text-ivory">
                  Explore edit →
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Side stack */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-6">
            {collections.slice(1, 3).map((c, idx) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9, delay: idx * 0.1 }}
              >
                <Link
                  href={`/collections/${c.slug}`}
                  className="group block relative aspect-[16/10] lg:aspect-auto lg:h-full rounded-xl2 overflow-hidden"
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10" />
                  <div className="absolute bottom-6 left-6 right-6 text-ivory">
                    {c.badge && (
                      <p className="eyebrow text-rose-dust mb-2">{c.badge}</p>
                    )}
                    <h3 className="font-display text-2xl md:text-3xl">{c.name}</h3>
                    <p className="text-ivory/80 mt-1">{c.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
