const NOTES = [
  { title: 'Your order #R-184902 is out for delivery', when: 'Today · 09:12', tone: 'good' },
  { title: '“Aurelia — Rose Gold Pendant” is back in stock', when: 'Yesterday · 18:34', tone: 'info' },
  { title: 'Midnight Bloom Eau de Parfum dropped ₹500', when: '2 days ago', tone: 'info' }
];

export default function NotificationsPage() {
  return (
    <>
      <h2 className="font-display text-2xl mb-6">Notifications</h2>
      <ul className="space-y-3">
        {NOTES.map((n, i) => (
          <li key={i} className="card p-5 flex items-start gap-4">
            <span className={`mt-2 w-2 h-2 rounded-full ${n.tone === 'good' ? 'bg-emerald-500' : 'bg-rose-gold'}`} />
            <div className="flex-1">
              <p className="text-charcoal">{n.title}</p>
              <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-1">{n.when}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
