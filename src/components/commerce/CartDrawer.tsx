'use client';

import Link from 'next/link';
import Image from 'next/image';
import { X, Plus, Minus, Gift } from 'lucide-react';
import { useCart } from '@/lib/store/cart';
import { formatPrice, cn } from '@/lib/utils';

export function CartDrawer() {
  const { isOpen, close, items, setQty, remove, subtotal, toggleGiftWrap } = useCart();

  const sub = subtotal();
  const shipping = sub === 0 ? 0 : sub >= 1499 ? 0 : 99;
  const giftWrapTotal = items.filter((i) => i.giftWrap).length * 79;
  const total = sub + shipping + giftWrapTotal;

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-50 bg-charcoal/40 transition-opacity duration-500',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={close}
        aria-hidden
      />
      <aside
        aria-label="Shopping bag"
        className={cn(
          'fixed right-0 top-0 bottom-0 z-50 w-full sm:max-w-md bg-ivory shadow-luxe flex flex-col transition-transform duration-500',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-line">
          <div>
            <p className="eyebrow">Your Bag</p>
            <p className="font-display text-2xl mt-1">
              {items.length === 0 ? 'Empty for now' : `${items.length} item${items.length > 1 ? 's' : ''}`}
            </p>
          </div>
          <button onClick={close} aria-label="Close bag" className="p-2">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center mb-6">
              <Gift className="h-7 w-7 text-rose-deep" />
            </div>
            <p className="font-display text-2xl mb-3 balanced">
              Your bag is waiting for something beautiful.
            </p>
            <p className="text-charcoal-muted mb-8">
              Begin with a quietly curated favorite.
            </p>
            <Link href="/shop" onClick={close} className="btn-primary">
              Discover gifts
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map((i) => (
                <div key={`${i.productId}-${i.variantLabel ?? ''}`} className="flex gap-4">
                  <Link
                    href={`/product/${i.slug}`}
                    onClick={close}
                    className="relative w-24 h-28 rounded-lg overflow-hidden flex-none bg-ivory-200"
                  >
                    <Image
                      src={i.image}
                      alt={i.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          href={`/product/${i.slug}`}
                          onClick={close}
                          className="font-display text-lg leading-tight hover:text-rose-gold"
                        >
                          {i.name}
                        </Link>
                        {i.variantLabel && (
                          <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-1">
                            {i.variantLabel}
                          </p>
                        )}
                      </div>
                      <p className="font-display text-base">{formatPrice(i.price * i.quantity)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line rounded-full">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => setQty(i.productId, i.quantity - 1, i.variantLabel)}
                          className="p-1.5 hover:text-rose-gold"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{i.quantity}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => setQty(i.productId, i.quantity + 1, i.variantLabel)}
                          className="p-1.5 hover:text-rose-gold"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(i.productId, i.variantLabel)}
                        className="text-eyebrow uppercase tracking-luxe text-charcoal-soft hover:text-rose-deep"
                      >
                        Remove
                      </button>
                    </div>
                    <label className="mt-3 flex items-center gap-2 text-sm text-charcoal-muted cursor-pointer">
                      <input
                        type="checkbox"
                        className="accent-rose-gold"
                        checked={!!i.giftWrap}
                        onChange={(e) => toggleGiftWrap(i.productId, e.target.checked)}
                      />
                      Add gift wrap <span className="text-charcoal-soft">(+₹79)</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line p-6 space-y-2">
              <Row label="Subtotal" value={formatPrice(sub)} />
              <Row label="Shipping" value={shipping === 0 ? 'Complimentary' : formatPrice(shipping)} />
              {giftWrapTotal > 0 && <Row label="Gift wrap" value={formatPrice(giftWrapTotal)} />}
              <div className="h-px bg-line my-3" />
              <Row label={<span className="font-display text-lg">Total</span>} value={<span className="font-display text-lg">{formatPrice(total)}</span>} />
              <Link
                href="/checkout"
                onClick={close}
                className="btn-primary w-full mt-5"
              >
                Checkout securely
              </Link>
              <p className="text-center text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-3">
                Complimentary gift wrap available · Free shipping over ₹1,499
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

function Row({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between text-charcoal">
      <span className="text-charcoal-muted">{label}</span>
      <span>{value}</span>
    </div>
  );
}
