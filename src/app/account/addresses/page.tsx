import { Plus } from 'lucide-react';

const ADDRESSES = [
  {
    label: 'Home',
    name: 'Aanya Mehta',
    line1: '14, Lily Manor, Pali Hill',
    city: 'Bandra West, Mumbai',
    pincode: '400050',
    phone: '+91 98xx xxx 421',
    default: true
  },
  {
    label: 'Work',
    name: 'Aanya Mehta',
    line1: '8th Floor, Sky Studio, BKC',
    city: 'Bandra East, Mumbai',
    pincode: '400051',
    phone: '+91 98xx xxx 421'
  }
];

export default function AddressesPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl">Address book</h2>
        <button className="btn-ghost"><Plus className="h-4 w-4" /> Add new</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ADDRESSES.map((a, i) => (
          <article key={i} className="card p-6">
            <div className="flex items-center justify-between">
              <p className="text-eyebrow uppercase tracking-luxe text-rose-gold">{a.label}</p>
              {a.default && <span className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">Default</span>}
            </div>
            <p className="font-display text-xl mt-2">{a.name}</p>
            <p className="text-charcoal-muted mt-1">{a.line1}<br />{a.city} {a.pincode}<br />{a.phone}</p>
            <div className="mt-5 flex gap-3 text-eyebrow uppercase tracking-luxe">
              <button className="text-charcoal hover:text-rose-gold">Edit</button>
              <button className="text-charcoal-soft hover:text-rose-deep">Remove</button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
