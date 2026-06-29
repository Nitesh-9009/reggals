import Link from 'next/link';
import { User, Package, Heart, MapPin, CreditCard, Gift, RefreshCcw, Bell, Settings, HelpCircle } from 'lucide-react';

const nav = [
  { href: '/account', label: 'Overview', icon: User, exact: true },
  { href: '/account/orders', label: 'Orders', icon: Package },
  { href: '/account/wishlist', label: 'Wishlist', icon: Heart },
  { href: '/account/addresses', label: 'Addresses', icon: MapPin },
  { href: '/account/payments', label: 'Payments', icon: CreditCard },
  { href: '/account/rewards', label: 'Rewards', icon: Gift },
  { href: '/account/returns', label: 'Returns', icon: RefreshCcw },
  { href: '/account/notifications', label: 'Notifications', icon: Bell },
  { href: '/account/settings', label: 'Settings', icon: Settings },
  { href: '/support', label: 'Support', icon: HelpCircle }
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="container-luxe py-12">
      <div className="mb-10">
        <p className="eyebrow mb-3">Hello, Aanya</p>
        <h1 className="font-display text-4xl md:text-5xl balanced">Your boutique.</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-3">
          <ul className="space-y-1">
            {nav.map((n) => {
              const Icon = n.icon;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-charcoal-muted hover:bg-blush/40 hover:text-charcoal transition-colors"
                  >
                    <Icon className="h-4 w-4 text-rose-gold" />
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}
