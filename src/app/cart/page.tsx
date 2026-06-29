'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Plus, Minus, X, Gift, ShieldCheck } from 'lucide-react';
import { useCart } from '@/lib/store/cart';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { items, setQty, remove, subtotal, toggleGiftWrap, setGiftMessage } = useCart();
  const sub = subtotal();
  const shipping = sub === 0 ? 0 : sub >= 1499 ? 0 : 99;
  const giftWrapTotal = items.filter((i) => i.giftWrap).length * 79;
  const total = sub + shipping + giftWrapTotal;

  return (
    <>
      <section className="bg-ivory border-b border-line">
        <div className="container-luxe py-14">
          <p className="eyebrow mb-3">Your Bag</p>
          <h1 className="font-display text-5xl md:text-6xl balanced">
            {items.length === 0 ? 'Nothing inside yet.' : 'Almost yours.'}
          </h1>
        </div>
      </section>

      <section className="container-luxe py-12">
        {items.length === 0 ? (
          <div className="py-16 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blush flex items-center justify-center">
              <Gift className="h-6 w-6 text-rose-deep" />
            </div>
            <p className="font-display text-3xl balanced">Begin with something quietly beautiful.</p>
            <Link href="/shop" className="btn-primary mt-8 inline-flex">Discover gifts</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              {items.map((i) => (
                <article key={`${i.productId}-${i.variantLabel ?? ''}`} className="flex gap-5 border-b border-line pb-8">
                  <Link href={`/product/${i.slug}`} className="relative w-28 h-36 sm:w-36 sm:h-44 rounded-lg overflow-hidden flex-none">
                    <Image src={i.image} alt={i.name} fill sizes="180px" className="object-cover" />
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link href={`/product/${i.slug}`} className="font-display text-xl hover:text-rose-gold">
                          {i.name}
                        </Link>
                        {i.variantLabel && (
                          <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-1">
                            {i.variantLabel}
                          </p>
                        )}
                      </div>
                      <p className="font-display text-xl">{formatPrice(i.price * i.quantity)}</p>
                    </div>

                    <label className="mt-4 flex items-start gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-1 accent-rose-gold"
                        checked={!!i.giftWrap}
                        onChange={(e) => toggleGiftWrap(i.productId, e.target.checked)}
                      />
                      <span>
                        <span className="text-charcoal">Add gift wrap & note</span>
                        <span className="text-charcoal-soft"> (+₹79)</span>
                      </span>
                    </label>
                    {i.giftWrap && (
                      <input
                        placeholder="Your note…"
                        value={i.giftMessage ?? ''}
                        onChange={(e) => setGiftMessage(i.productId, e.target.value)}
                        className="mt-2 text-sm field"
                        maxLength={200}
                      />
                    )}

                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <div className="flex items-center border border-line rounded-full">
                        <button onClick={() => setQty(i.productId, i.quantity - 1, i.variantLabel)} aria-label="Decrease" className="p-2 hover:text-rose-gold">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-3 tabular-nums">{i.quantity}</span>
                        <button onClick={() => setQty(i.productId, i.quantity + 1, i.variantLabel)} aria-label="Increase" className="p-2 hover:text-rose-gold">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button onClick={() => remove(i.productId, i.variantLabel)} className="text-eyebrow uppercase tracking-luxe text-charcoal-soft hover:text-rose-deep inline-flex items-center gap-1">
                        <X className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start">
              <div className="card p-7">
                <p className="eyebrow mb-5">Order summary</p>
                <Row label="Subtotal" value={formatPrice(sub)} />
                <Row label="Shipping" value={shipping === 0 ? 'Complimentary' : formatPrice(shipping)} />
                {giftWrapTotal > 0 && <Row label="Gift wrap" value={formatPrice(giftWrapTotal)} />}
                <div className="h-px bg-line my-4" />
                <Row label={<span className="font-display text-lg">Total</span>} value={<span className="font-display text-lg">{formatPrice(total)}</span>} />
                <Link href="/checkout" className="btn-primary w-full mt-6">Continue to checkout</Link>
                <p className="mt-5 text-eyebrow uppercase tracking-luxe text-charcoal-soft text-center">
                  <ShieldCheck className="inline h-3.5 w-3.5 mr-1" /> 256-bit secure payments
                </p>
              </div>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}

function Row({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-charcoal">
      <span className="text-charcoal-muted">{label}</span>
      <span>{value}</span>
    </div>
  );
}
