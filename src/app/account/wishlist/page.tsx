'use client';
import { useWishlist } from '@/lib/store/wishlist';
import { products } from '@/lib/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export default function AccountWishlist() {
  const ids = useWishlist((s) => s.ids);
  const items = products.filter((p) => ids.includes(p.id));
  return (
    <>
      <h2 className="font-display text-2xl mb-6">Saved with love</h2>
      {items.length === 0 ? (
        <p className="text-charcoal-muted">Your wishlist is empty for now.</p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </>
  );
}
