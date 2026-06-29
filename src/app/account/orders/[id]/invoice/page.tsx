'use client';

import Link from 'next/link';
import { Printer } from 'lucide-react';
import { products } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils';

export default function InvoicePage({ params }: { params: { id: string } }) {
  const lineItems = products.slice(0, 3).map((p, i) => ({
    name: p.name,
    sku: p.id,
    qty: i === 0 ? 2 : 1,
    price: p.price
  }));
  const subtotal = lineItems.reduce((s, l) => s + l.price * l.qty, 0);
  const shipping = subtotal >= 1499 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  return (
    <section className="container-luxe py-12 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8 print:hidden">
        <Link href={`/account/orders/${params.id}`} className="text-eyebrow uppercase tracking-luxe text-charcoal-soft hover:text-rose-gold">
          ← Back to order
        </Link>
        <button onClick={() => window.print()} className="btn-ghost text-sm">
          <Printer className="h-4 w-4" /> Print
        </button>
      </div>

      <div className="card p-10 bg-ivory">
        <header className="flex items-start justify-between border-b border-line pb-6 mb-8">
          <div>
            <p className="font-display text-3xl italic">Reggals</p>
            <p className="text-sm text-charcoal-muted mt-1">Premium gifting · since 2026</p>
            <p className="text-xs text-charcoal-soft mt-3">
              Reggals Atelier Pvt. Ltd.<br />
              24, Linen Lane, Bandra West, Mumbai 400050<br />
              GSTIN: 27ABCDE1234F1Z5
            </p>
          </div>
          <div className="text-right">
            <p className="eyebrow">Invoice</p>
            <p className="font-display text-xl mt-1">#{params.id.toUpperCase()}</p>
            <p className="text-xs text-charcoal-soft mt-2">
              Issued · {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-8 mb-10 text-sm">
          <div>
            <p className="eyebrow mb-2">Billed to</p>
            <p className="font-medium">Aanya Sharma</p>
            <p className="text-charcoal-muted mt-1">
              14, Rose Court, Apartment 3B<br />
              Mumbai, 400050<br />
              India
            </p>
          </div>
          <div>
            <p className="eyebrow mb-2">Shipped to</p>
            <p className="font-medium">Aanya Sharma</p>
            <p className="text-charcoal-muted mt-1">
              14, Rose Court, Apartment 3B<br />
              Mumbai, 400050<br />
              India
            </p>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left">
              <th className="py-3 font-medium text-charcoal-soft">Item</th>
              <th className="py-3 font-medium text-charcoal-soft text-right">Qty</th>
              <th className="py-3 font-medium text-charcoal-soft text-right">Price</th>
              <th className="py-3 font-medium text-charcoal-soft text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((l) => (
              <tr key={l.sku} className="border-b border-line/50">
                <td className="py-4">
                  <p className="font-medium">{l.name}</p>
                  <p className="text-xs text-charcoal-soft mt-1">SKU · {l.sku}</p>
                </td>
                <td className="py-4 text-right">{l.qty}</td>
                <td className="py-4 text-right">{formatPrice(l.price)}</td>
                <td className="py-4 text-right">{formatPrice(l.price * l.qty)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-8">
          <dl className="w-72 text-sm space-y-2">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt>Shipping</dt><dd>{shipping ? formatPrice(shipping) : 'Free'}</dd></div>
            <div className="flex justify-between"><dt>GST (5%)</dt><dd>{formatPrice(tax)}</dd></div>
            <div className="flex justify-between border-t border-line pt-3 font-display text-lg">
              <dt>Total</dt><dd>{formatPrice(total)}</dd>
            </div>
          </dl>
        </div>

        <footer className="mt-12 pt-6 border-t border-line text-xs text-charcoal-soft text-center">
          Thank you for gifting with Reggals. For queries, write to care@reggals.in.
        </footer>
      </div>
    </section>
  );
}
