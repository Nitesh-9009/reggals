'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import type { Product } from '@/lib/types';
import { formatPrice, discountPercent, cn } from '@/lib/utils';
import { useWishlist } from '@/lib/store/wishlist';
import { useCart } from '@/lib/store/cart';
import { Badge } from '@/components/ui/Badge';

export function ProductCard({
  product,
  priority,
  className
}: {
  product: Product;
  priority?: boolean;
  className?: string;
}) {
  const wished = useWishlist((s) => s.has(product.id));
  const toggle = useWishlist((s) => s.toggle);
  const addToCart = useCart((s) => s.add);
  const off = discountPercent(product.price, product.compareAt);

  return (
    <article className={cn('group', className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 bg-ivory-200">
        <Link href={`/product/${product.slug}`} className="absolute inset-0">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
            priority={priority}
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt=""
              fill
              sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
              className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          )}
        </Link>

        {/* Top-left badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5">
          {product.tags.includes('limited') && <Badge tone="charcoal">Limited</Badge>}
          {product.tags.includes('new') && !product.tags.includes('limited') && <Badge tone="gold">New</Badge>}
          {off > 0 && <Badge tone="rose">−{off}%</Badge>}
        </div>

        {/* Wishlist */}
        <button
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => toggle(product.id)}
          className={cn(
            'absolute top-4 right-4 p-2.5 rounded-full bg-ivory/90 backdrop-blur-sm transition-all duration-300',
            'hover:bg-rose-gold hover:text-ivory',
            wished && 'bg-rose-gold text-ivory'
          )}
        >
          <Heart className={cn('h-4 w-4', wished && 'fill-current')} />
        </button>

        {/* Quick-add */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            onClick={() =>
              addToCart({
                productId: product.id,
                slug: product.slug,
                name: product.name,
                image: product.images[0],
                price: product.price,
                quantity: 1,
                variantLabel: product.variants?.[0]?.label
              })
            }
            className="w-full bg-charcoal text-ivory text-eyebrow uppercase tracking-luxe py-3 rounded-full hover:bg-rose-deep transition-colors"
          >
            Quick add to bag
          </button>
        </div>
      </div>

      <div className="pt-5 px-1">
        <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">
          {product.brand}
        </p>
        <Link
          href={`/product/${product.slug}`}
          className="block font-display text-lg leading-tight mt-1 hover:text-rose-gold transition-colors"
        >
          {product.name}
        </Link>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-charcoal font-medium">{formatPrice(product.price)}</span>
          {product.compareAt && (
            <span className="text-charcoal-soft line-through text-sm">
              {formatPrice(product.compareAt)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
