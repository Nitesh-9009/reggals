'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ChevronRight, ShieldCheck, Truck, Lock } from 'lucide-react';
import { useCart } from '@/lib/store/cart';
import { formatPrice, cn } from '@/lib/utils';
import { Confetti } from '@/components/commerce/Confetti';

const steps = ['Address', 'Delivery', 'Payment', 'Review'] as const;
type Step = (typeof steps)[number];

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [step, setStep] = useState<Step>('Address');
  const [placed, setPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>();

  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [slot, setSlot] = useState('Standard · 2–4 days');
  const [payment, setPayment] = useState<'upi' | 'card' | 'cod' | 'wallet'>('upi');

  const sub = subtotal();
  const shipping = sub === 0 ? 0 : sub >= 1499 ? 0 : 99;
  const giftWrapTotal = items.filter((i) => i.giftWrap).length * 79;
  const total = sub + shipping + giftWrapTotal;

  function next() {
    const idx = steps.indexOf(step);
    if (idx < steps.length - 1) setStep(steps[idx + 1]);
  }

  function place() {
    setOrderNumber('R-' + Math.floor(100000 + Math.random() * 900000));
    setPlaced(true);
    clear();
  }

  if (placed && orderNumber) {
    return <SuccessScreen orderNumber={orderNumber} />;
  }

  if (items.length === 0) {
    return (
      <section className="container-luxe py-24 text-center">
        <h1 className="font-display text-4xl">Your bag is empty.</h1>
        <p className="mt-3 text-charcoal-muted">Add a little something first.</p>
        <Link href="/shop" className="btn-primary mt-8 inline-flex">Discover gifts</Link>
      </section>
    );
  }

  return (
    <>
      <section className="bg-ivory border-b border-line">
        <div className="container-luxe py-12">
          <p className="eyebrow mb-3">Checkout</p>
          <h1 className="font-display text-4xl md:text-5xl balanced">
            A few quiet steps to delight.
          </h1>
          <ol className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            {steps.map((s, i) => {
              const active = s === step;
              const done = steps.indexOf(step) > i;
              return (
                <li key={s} className="flex items-center gap-2">
                  <span
                    className={cn(
                      'flex items-center justify-center h-6 w-6 rounded-full border text-eyebrow uppercase',
                      done && 'bg-rose-gold text-ivory border-rose-gold',
                      active && !done && 'border-charcoal',
                      !active && !done && 'border-line text-charcoal-soft'
                    )}
                  >
                    {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                  </span>
                  <span className={cn(active ? 'text-charcoal' : 'text-charcoal-soft', 'uppercase tracking-luxe text-eyebrow')}>
                    {s}
                  </span>
                  {i < steps.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-charcoal-soft" />}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container-luxe py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            {step === 'Address' && (
              <div className="card p-8 space-y-5">
                <p className="eyebrow">Where should we send her gift?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full name" value={address.fullName} onChange={(v) => setAddress({ ...address, fullName: v })} />
                  <Field label="Phone" value={address.phone} onChange={(v) => setAddress({ ...address, phone: v })} />
                </div>
                <Field label="Address line 1" value={address.line1} onChange={(v) => setAddress({ ...address, line1: v })} />
                <Field label="Address line 2 (optional)" value={address.line2} onChange={(v) => setAddress({ ...address, line2: v })} />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <Field label="City" value={address.city} onChange={(v) => setAddress({ ...address, city: v })} />
                  <Field label="State" value={address.state} onChange={(v) => setAddress({ ...address, state: v })} />
                  <Field label="Pincode" value={address.pincode} onChange={(v) => setAddress({ ...address, pincode: v })} />
                </div>
                <button onClick={next} className="btn-primary">Continue to delivery</button>
              </div>
            )}

            {step === 'Delivery' && (
              <div className="card p-8 space-y-4">
                <p className="eyebrow">How should we deliver?</p>
                {[
                  { label: 'Standard · 2–4 days', sub: 'Complimentary over ₹1,499 · else ₹99' },
                  { label: 'Express · Next day', sub: '+₹199 · select metros' },
                  { label: 'Scheduled · Pick a date', sub: 'Choose a delivery date at no extra cost' }
                ].map((s) => (
                  <label key={s.label} className={cn('flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-colors',
                    slot === s.label ? 'border-rose-gold bg-blush/30' : 'border-line hover:border-charcoal')}>
                    <input type="radio" checked={slot === s.label} onChange={() => setSlot(s.label)} className="mt-1.5 accent-rose-gold" />
                    <div>
                      <p className="font-display text-lg">{s.label}</p>
                      <p className="text-sm text-charcoal-muted">{s.sub}</p>
                    </div>
                  </label>
                ))}
                <button onClick={next} className="btn-primary">Continue to payment</button>
              </div>
            )}

            {step === 'Payment' && (
              <div className="card p-8 space-y-5">
                <p className="eyebrow">Pay securely</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {([
                    ['upi', 'UPI'],
                    ['card', 'Card'],
                    ['wallet', 'Wallet'],
                    ['cod', 'Cash on Delivery']
                  ] as const).map(([k, label]) => (
                    <button
                      key={k}
                      onClick={() => setPayment(k)}
                      className={cn('py-4 rounded-xl border text-sm uppercase tracking-luxe transition-colors',
                        payment === k ? 'border-rose-gold text-rose-gold' : 'border-line hover:border-charcoal')}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft inline-flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5" /> 256-bit encryption · Razorpay / Stripe gateways
                </p>
                <button onClick={next} className="btn-primary">Review your order</button>
              </div>
            )}

            {step === 'Review' && (
              <div className="card p-8 space-y-5">
                <p className="eyebrow">Just one last look</p>
                <Summary label="Delivering to" value={address.fullName + ', ' + address.line1 + ', ' + address.city} />
                <Summary label="Slot" value={slot} />
                <Summary label="Payment" value={payment.toUpperCase()} />
                <button onClick={place} className="btn-primary w-full mt-2">Place order · {formatPrice(total)}</button>
              </div>
            )}
          </div>

          {/* Order summary */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <div className="card p-7">
              <p className="eyebrow mb-5">Order summary</p>
              <ul className="space-y-4">
                {items.map((i) => (
                  <li key={`${i.productId}-${i.variantLabel ?? ''}`} className="flex gap-3">
                    <div className="relative w-16 h-20 rounded-md overflow-hidden flex-none bg-ivory-200">
                      <Image src={i.image} alt={i.name} fill sizes="64px" className="object-cover" />
                      <span className="absolute -top-1.5 -right-1.5 bg-charcoal text-ivory text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                        {i.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{i.name}</p>
                      {i.variantLabel && <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">{i.variantLabel}</p>}
                    </div>
                    <p className="text-sm">{formatPrice(i.price * i.quantity)}</p>
                  </li>
                ))}
              </ul>
              <div className="h-px bg-line my-5" />
              <Row label="Subtotal" value={formatPrice(sub)} />
              <Row label="Shipping" value={shipping === 0 ? 'Complimentary' : formatPrice(shipping)} />
              {giftWrapTotal > 0 && <Row label="Gift wrap" value={formatPrice(giftWrapTotal)} />}
              <div className="h-px bg-line my-4" />
              <Row label={<span className="font-display text-lg">Total</span>} value={<span className="font-display text-lg">{formatPrice(total)}</span>} />

              <ul className="mt-5 space-y-2 text-sm text-charcoal-muted">
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-rose-gold" /> Secure checkout</li>
                <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-rose-gold" /> Hand-wrapped, beautifully packaged</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="field" />
    </label>
  );
}

function Row({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-charcoal-muted">{label}</span>
      <span className="text-charcoal">{value}</span>
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-line py-3">
      <span className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">{label}</span>
      <span className="text-right text-charcoal pretty max-w-[60%]">{value}</span>
    </div>
  );
}

function SuccessScreen({ orderNumber }: { orderNumber: string }) {
  return (
    <section className="container-luxe py-24 text-center max-w-2xl mx-auto relative">
      <Confetti />
      <div className="w-20 h-20 mx-auto rounded-full bg-blush flex items-center justify-center mb-6">
        <Check className="h-10 w-10 text-rose-deep" />
      </div>
      <p className="eyebrow mb-3">Order placed</p>
      <h1 className="font-display text-5xl md:text-6xl balanced">
        Beautifully done.
      </h1>
      <p className="mt-5 text-charcoal-muted text-lg pretty">
        We’re hand-wrapping your gift now. A confirmation has been sent to your email.
      </p>
      <p className="mt-2 text-eyebrow uppercase tracking-luxe text-charcoal-soft">
        Order number · {orderNumber}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href={`/orders/${orderNumber}/track`} className="btn-primary">Track your order</Link>
        <Link href="/shop" className="btn-link">Continue browsing</Link>
      </div>
    </section>
  );
}
