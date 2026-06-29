import Link from 'next/link';
import { LayoutDashboard, Package, Users, ShoppingCart, Tag, BarChart3, FileText, MessageCircle, Settings } from 'lucide-react';

const nav = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/orders', label: 'Orders', icon: ShoppingCart },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/customers', label: 'Customers', icon: Users },
  { href: '/admin/coupons', label: 'Coupons', icon: Tag },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/cms', label: 'CMS', icon: FileText },
  { href: '/admin/tickets', label: 'Support', icon: MessageCircle },
  { href: '/admin/settings', label: 'Settings', icon: Settings }
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-ivory">
      <aside className="w-64 bg-charcoal text-ivory flex flex-col">
        <div className="p-6">
          <p className="font-display text-2xl">Reggals</p>
          <p className="text-eyebrow uppercase tracking-luxe text-rose-dust mt-1">Atelier · Admin</p>
        </div>
        <nav className="flex-1 px-3 py-2 space-y-1">
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <Link key={n.href} href={n.href} className="flex items-center gap-3 px-3 py-2.5 rounded-md text-ivory/80 hover:bg-rose-deep/30 hover:text-ivory transition-colors text-sm">
                <Icon className="h-4 w-4" />
                {n.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/" className="m-4 text-eyebrow uppercase tracking-luxe text-rose-dust hover:text-ivory">
          ← Back to boutique
        </Link>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
