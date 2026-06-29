import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data/products';

const ORDERS = [
  {
    id: 'R-184902',
    placedAt: '02 Jun 2026',
    status: 'Out for delivery',
    total: 7299,
    items: [products[0], products[3]]
  },
  {
    id: 'R-180441',
    placedAt: '18 May 2026',
    status: 'Delivered',
    total: 4499,
    items: [products[1]]
  },
  {
    id: 'R-178021',
    placedAt: '02 May 2026',
    status: 'Delivered',
    total: 2699,
    items: [products[4]]
  }
];

export default function OrdersPage() {
  return (
    <>
      <h2 className="font-display text-2xl mb-6">Your orders</h2>
      <div className="space-y-5">
        {ORDERS.map((o) => (
          <article key={o.id} className="card p-6 flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex -space-x-3">
              {o.items.map((p) => (
                <div key={p.id} className="relative w-16 h-20 rounded-md overflow-hidden border-2 border-ivory">
                  <Image src={p.hero} alt="" fill sizes="64px" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="flex-1">
              <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">Order {o.id} · {o.placedAt}</p>
              <p className="font-display text-xl mt-1">{o.items.map((i) => i.name).join(' · ')}</p>
              <p className="text-sm mt-1"><span className="text-rose-gold">●</span> {o.status}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="font-display text-xl">₹{o.total.toLocaleString('en-IN')}</p>
              <Link href={`/orders/${o.id}/track`} className="btn-link">Track</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
