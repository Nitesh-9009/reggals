'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Heart,
  Share2,
  Truck,
  RefreshCcw,
  Sparkles,
  ShieldCheck,
  Gift,
  Star,
  ChevronDown
} from 'lucide-react';
import type { Product, Review } from '@/lib/types';
import { formatPrice, discountPercent, cn } from '@/lib/utils';
import { useCart } from '@/lib/store/cart';
import { useWishlist } from '@/lib/store/wishlist';
import { Badge } from '@/components/ui/Badge';

export function PDPView({ product, reviews }: { product: Product; reviews: Review[] }) {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [variant, setVariant] = useState(product.variants?.[0]?.label);
  const [qty, setQty] = useState(1);
  const [giftWrap, setGiftWrap] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [showPersonalize, setShowPersonalize] = useState(false);

  const add = useCart((s) => s.add);
  const wished = useWishlist((s) => s.has(product.id));
  const toggleWish = useWishlist((s) => s.toggle);
  const off = discountPercent(product.price, product.compareAt);

  function handleAdd() {
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.images[0],
      price: product.price,
      quantity: qty,
      variantLabel: variant,
      giftWrap,
      giftMessage: giftMessage || undefined
    });
  }

  return (
    <section className="bg-offwhite">
      <div className="container-luxe py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] rounded-xl2 overflow-hidden bg-ivory-200"
            >
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                sizes="(min-width:1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute top-5 left-5 flex flex-col gap-2">
                {product.tags.includes('limited') && <Badge tone="charcoal">Limited</Badge>}
                {product.tags.includes('new') && <Badge tone="gold">New</Badge>}
                {off > 0 && <Badge tone="rose">{off}% off</Badge>}
              </div>
            </motion.div>
            <div className="grid grid-cols-4 gap-3 mt-4">
              {product.images.map((img) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(img)}
                  className={cn(
                    'relative aspect-square rounded-lg overflow-hidden border-2 transition-colors',
                    activeImage === img ? 'border-rose-gold' : 'border-transparent hover:border-line'
                  )}
                  aria-label="View image"
                >
                  <Image src={img} alt="" fill sizes="120px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <p className="eyebrow mb-3">{product.brand}</p>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.05] text-charcoal balanced">
              {product.name}
            </h1>
            <p className="mt-4 text-charcoal-muted text-lg pretty">{product.tagline}</p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1 text-rose-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'h-4 w-4',
                      i < Math.round(product.rating) ? 'fill-current' : 'opacity-30'
                    )}
                  />
                ))}
              </div>
              <p className="text-sm text-charcoal-muted">
                {product.rating} · {product.reviewCount} reviews
              </p>
            </div>

            <div className="mt-7 flex items-baseline gap-3">
              <p className="font-display text-3xl text-charcoal">{formatPrice(product.price)}</p>
              {product.compareAt && (
                <>
                  <p className="text-charcoal-soft line-through">{formatPrice(product.compareAt)}</p>
                  <p className="text-eyebrow uppercase tracking-luxe text-rose-deep">
                    Save {off}%
                  </p>
                </>
              )}
            </div>
            <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-1">
              Inclusive of all taxes
            </p>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <p className="eyebrow">Variant</p>
                  <p className="text-sm text-charcoal-muted">{variant}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setVariant(v.label)}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-full border transition-colors',
                        variant === v.label
                          ? 'border-rose-gold text-rose-gold'
                          : 'border-line hover:border-charcoal'
                      )}
                    >
                      {v.swatch && (
                        <span
                          className="inline-block w-3.5 h-3.5 rounded-full border border-line/60"
                          style={{ backgroundColor: v.swatch }}
                        />
                      )}
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center border border-line rounded-full">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease"
                  className="px-4 py-2 hover:text-rose-gold"
                >
                  −
                </button>
                <span className="px-4 tabular-nums">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase"
                  className="px-4 py-2 hover:text-rose-gold"
                >
                  +
                </button>
              </div>
              <p className="text-sm text-charcoal-muted flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                In stock — ships in {product.estimatedDelivery}
              </p>
            </div>

            {/* Gift options */}
            {product.giftWrapEligible && (
              <div className="mt-8 border border-line rounded-xl2 p-5 bg-ivory/60">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 accent-rose-gold"
                    checked={giftWrap}
                    onChange={(e) => setGiftWrap(e.target.checked)}
                  />
                  <div className="flex-1">
                    <p className="font-display text-lg flex items-center gap-2">
                      <Gift className="h-4 w-4 text-rose-gold" /> Add gift wrap & note
                    </p>
                    <p className="text-sm text-charcoal-muted mt-1">
                      Hand-tied linen ribbon, signature wrapping, and a hand-stamped card. +₹79.
                    </p>
                  </div>
                </label>
                {giftWrap && (
                  <textarea
                    placeholder="Your note (up to 200 characters)…"
                    maxLength={200}
                    value={giftMessage}
                    onChange={(e) => setGiftMessage(e.target.value)}
                    rows={3}
                    className="mt-4 w-full bg-ivory border border-line rounded-md py-2.5 px-3 text-sm focus:border-rose-gold outline-none resize-none"
                  />
                )}
              </div>
            )}

            {product.personalizable && (
              <button
                onClick={() => setShowPersonalize((v) => !v)}
                className="mt-4 w-full flex items-center justify-between text-left border-b border-line py-3 hover:text-rose-gold"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-rose-gold" />
                  Personalize this gift
                </span>
                <ChevronDown className={cn('h-4 w-4 transition-transform', showPersonalize && 'rotate-180')} />
              </button>
            )}
            {showPersonalize && (
              <div className="space-y-3 py-4 border-b border-line">
                <input
                  placeholder="Engraving (up to 18 characters)"
                  maxLength={18}
                  className="w-full border-b border-line py-2 bg-transparent outline-none focus:border-rose-gold"
                />
                <input
                  type="date"
                  className="w-full border-b border-line py-2 bg-transparent outline-none focus:border-rose-gold"
                />
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 flex gap-3">
              <button onClick={handleAdd} className="btn-primary flex-1">
                Add to bag
              </button>
              <button
                onClick={() => toggleWish(product.id)}
                aria-label="Wishlist"
                className={cn(
                  'rounded-full border border-charcoal/20 px-5 transition-colors',
                  wished && 'bg-rose-gold border-rose-gold text-ivory'
                )}
              >
                <Heart className={cn('h-5 w-5', wished && 'fill-current')} />
              </button>
              <button aria-label="Share" className="rounded-full border border-charcoal/20 px-5 hover:border-rose-gold hover:text-rose-gold">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
            <button onClick={handleAdd} className="btn-ghost w-full mt-3">
              Buy now
            </button>

            {/* Promises */}
            <ul className="mt-10 grid grid-cols-2 gap-3 text-sm">
              <Promise icon={<Truck className="h-4 w-4" />} label={`Ships in ${product.estimatedDelivery}`} />
              <Promise icon={<RefreshCcw className="h-4 w-4" />} label="14-day easy returns" />
              <Promise icon={<ShieldCheck className="h-4 w-4" />} label="Secure payments" />
              <Promise icon={<Gift className="h-4 w-4" />} label="Hand-wrapped, always" />
            </ul>

            {/* About */}
            <div className="mt-10">
              <p className="eyebrow mb-3">About this gift</p>
              <p className="text-charcoal-muted pretty leading-relaxed">{product.description}</p>
              {product.materials && (
                <div className="mt-6">
                  <p className="eyebrow mb-2">Materials</p>
                  <ul className="text-sm text-charcoal-muted">
                    {product.materials.map((m) => (
                      <li key={m} className="border-b border-line py-1.5">{m}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section className="mt-24 pt-16 border-t border-line">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-3">Loved by</p>
              <h2 className="font-display text-3xl md:text-4xl balanced">
                What customers are saying.
              </h2>
            </div>
            <p className="text-charcoal-muted text-sm">{reviews.length} verified reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <article key={r.id} className="card p-7">
                <div className="flex items-center gap-1 text-rose-gold mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={cn('h-4 w-4', i < r.rating ? 'fill-current' : 'opacity-25')} />
                  ))}
                </div>
                <p className="font-display text-xl">{r.title}</p>
                <p className="mt-3 text-charcoal-muted pretty">{r.body}</p>
                <p className="mt-5 text-eyebrow uppercase tracking-luxe text-charcoal-soft">
                  — {r.author} · {r.verified && 'Verified'}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function Promise({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="flex items-center gap-2 text-charcoal-muted">
      <span className="text-rose-gold">{icon}</span> {label}
    </li>
  );
}
