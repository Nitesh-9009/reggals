'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/product/ProductCard';
import type { Product } from '@/lib/types';

export function ProductGrid({
  products,
  title,
  eyebrow,
  description,
  cta,
  columns = 4
}: {
  products: Product[];
  title?: string;
  eyebrow?: string;
  description?: string;
  cta?: { label: string; href: string };
  columns?: 3 | 4;
}) {
  const cols = columns === 4
    ? 'sm:grid-cols-2 lg:grid-cols-4'
    : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-20 md:py-24 border-t border-line">
      <div className="container-luxe">
        {(title || eyebrow) && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
              {title && (
                <h2 className="font-display text-3xl md:text-4xl text-charcoal balanced">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-4 text-charcoal-muted pretty">{description}</p>
              )}
            </div>
            {cta && (
              <Link href={cta.href} className="btn-link self-start md:self-end">
                {cta.label}
              </Link>
            )}
          </div>
        )}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } }
          }}
          className={`grid grid-cols-1 ${cols} gap-x-6 gap-y-14`}
        >
          {products.map((p) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
