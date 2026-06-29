import { ArrowUpRight, IndianRupee, ShoppingBag, Users, Heart } from 'lucide-react';

const KPIS = [
  { label: 'Revenue (30d)', value: '₹ 18,42,000', delta: '+12.4%', icon: IndianRupee },
  { label: 'Orders (30d)', value: '1,284', delta: '+8.1%', icon: ShoppingBag },
  { label: 'New customers', value: '486', delta: '+22.7%', icon: Users },
  { label: 'Wishlists added', value: '3,219', delta: '+15.0%', icon: Heart }
];

export default function AdminDashboard() {
  return (
    <>
      <header className="mb-10">
        <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">Atelier · Admin</p>
        <h1 className="font-display text-4xl mt-1">Dashboard</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {KPIS.map((k) => {
          const Icon = k.icon;
          return (
            <div key={k.label} className="card p-6">
              <div className="flex items-center justify-between">
                <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">{k.label}</p>
                <Icon className="h-4 w-4 text-rose-gold" />
              </div>
              <p className="font-display text-3xl mt-3">{k.value}</p>
              <p className="text-sm text-emerald-600 inline-flex items-center gap-1 mt-1"><ArrowUpRight className="h-3 w-3" /> {k.delta}</p>
            </div>
          );
        })}
      </div>

      <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 card p-7">
          <p className="font-display text-xl mb-5">Revenue · last 14 days</p>
          <div className="h-48 grid grid-cols-14 items-end gap-2">
            {[40, 55, 48, 70, 62, 80, 75, 90, 84, 70, 95, 88, 100, 92].map((h, i) => (
              <div key={i} className="bg-rose-gold/80 rounded-t" style={{ height: `${h}%` }} aria-label={`Day ${i + 1}`} />
            ))}
          </div>
        </div>
        <div className="card p-7">
          <p className="font-display text-xl mb-5">Top categories</p>
          <ul className="space-y-3 text-sm">
            {[
              ['Jewelry', 42],
              ['Perfumes', 28],
              ['Beauty', 16],
              ['Bags', 14]
            ].map(([n, v]) => (
              <li key={String(n)}>
                <div className="flex items-center justify-between mb-1">
                  <span>{n}</span><span className="text-charcoal-soft">{v}%</span>
                </div>
                <div className="h-1.5 bg-line rounded-full overflow-hidden">
                  <div className="h-full bg-rose-gold" style={{ width: `${v}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 card p-7">
        <p className="font-display text-xl mb-4">Recent orders</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-eyebrow uppercase tracking-luxe text-charcoal-soft text-left">
              <th className="py-2">Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['R-184902', 'Aanya M.', 2, '₹7,299', 'Out for delivery'],
              ['R-184900', 'Riya S.', 1, '₹3,299', 'Packed'],
              ['R-184898', 'Diya K.', 3, '₹12,496', 'Placed'],
              ['R-184895', 'Sara V.', 1, '₹1,499', 'Delivered']
            ].map((row) => (
              <tr key={String(row[0])} className="border-t border-line">
                {row.map((c, i) => <td key={i} className="py-3">{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
