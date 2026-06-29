import { products } from '@/lib/data/products';

const STATUSES = ['Placed', 'Confirmed', 'Packed', 'Shipped', 'Out for delivery', 'Delivered'];
const NAMES = ['Aanya M.', 'Riya S.', 'Diya K.', 'Sara V.', 'Mira J.', 'Ishita P.', 'Priya N.'];

export default function AdminOrders() {
  return (
    <>
      <header className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">Atelier</p>
          <h1 className="font-display text-4xl mt-1">Orders</h1>
        </div>
        <div className="flex gap-3">
          <input placeholder="Search orders…" className="border border-line bg-ivory rounded-full px-4 py-2 text-sm outline-none focus:border-rose-gold" />
          <button className="btn-ghost text-sm">Export CSV</button>
        </div>
      </header>

      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-ivory border-b border-line">
            <tr className="text-eyebrow uppercase tracking-luxe text-charcoal-soft text-left">
              <th className="py-3 px-4">Order</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Placed</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }).map((_, i) => {
              const total = (10 + i) * 499;
              const status = STATUSES[i % STATUSES.length];
              return (
                <tr key={i} className="border-t border-line">
                  <td className="py-3 px-4">R-1849{(20 - i).toString().padStart(2, '0')}</td>
                  <td>{NAMES[i % NAMES.length]}</td>
                  <td>{products[i % products.length].name}</td>
                  <td>₹{total.toLocaleString('en-IN')}</td>
                  <td>
                    <span className="inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-gold" /> {status}
                    </span>
                  </td>
                  <td>{i + 1} Jun 2026</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
