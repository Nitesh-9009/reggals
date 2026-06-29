'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/lib/store/wishlist';
import { products } from '@/lib/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export default function WishlistPage() {
  const ids = useWishlist((s) => s.ids);
  const items = products.filter((p) => ids.includes(p.id));

  return (
    <>
      <section className="bg-ivory border-b border-line">
        <div className="container-luxe py-16 text-center">
          <p className="eyebrow mb-3">Saved with love</p>
          <h1 className="font-display text-5xl md:text-6xl balanced">Your wishlist</h1>
          <p className="mt-4 text-charcoal-muted">
            {items.length === 0 ? 'Nothing saved yet — we’ll wait quietly.' : `${items.length} ${items.length === 1 ? 'piece' : 'pieces'} you’re loving.`}
          </p>
        </div>
      </section>

      <section className="container-luxe py-16">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blush flex items-center justify-center">
              <Heart className="h-6 w-6 text-rose-deep" />
            </div>
            <p className="font-display text-3xl balanced">Save your favorites for later.</p>
            <p className="mt-3 text-charcoal-muted">Tap the heart on any piece to add it here.</p>
            <Link href="/shop" className="btn-primary mt-8 inline-flex">
              Discover gifts
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
