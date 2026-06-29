import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const groups = [
    {
      heading: 'Shop',
      links: [
        { href: '/shop', label: 'All Gifts' },
        { href: '/shop?tag=new', label: 'New Arrivals' },
        { href: '/shop?tag=bestseller', label: 'Bestsellers' },
        { href: '/shop?tag=limited', label: 'Limited Edition' },
        { href: '/gift-cards', label: 'Gift Cards' },
        { href: '/collections/the-rose-gold-edit', label: 'Collections' }
      ]
    },
    {
      heading: 'Care',
      links: [
        { href: '/support', label: 'Customer Support' },
        { href: '/concierge', label: 'Gift Concierge' },
        { href: '/faqs', label: 'FAQs' },
        { href: '/account/orders', label: 'Track Order' },
        { href: '/shipping-policy', label: 'Shipping' },
        { href: '/account/returns', label: 'Returns' },
        { href: '/contact', label: 'Contact' }
      ]
    },
    {
      heading: 'House',
      links: [
        { href: '/about', label: 'Our Story' },
        { href: '/refer', label: 'Refer & Earn' },
        { href: '/rewards', label: 'Reggals Rewards' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/terms', label: 'Terms' }
      ]
    }
  ];

  return (
    <footer className="bg-charcoal text-ivory mt-24">
      <div className="container-luxe py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Logo variant="light" className="text-3xl" />
            <p className="mt-6 max-w-sm text-ivory/70 pretty">
              Reggals is a boutique destination for premium, thoughtful gifting.
              Quietly curated, beautifully wrapped, delivered with care.
            </p>
            <div className="mt-8">
              <p className="eyebrow text-rose-dust mb-3">Newsletter</p>
              <form className="flex items-end gap-3 border-b border-ivory/30 pb-2 max-w-sm">
                <Mail className="h-4 w-4 text-ivory/60 mb-2" aria-hidden />
                <input
                  type="email"
                  placeholder="you@somewhere.com"
                  className="flex-1 bg-transparent outline-none placeholder:text-ivory/50 py-2 text-ivory"
                  aria-label="Email address"
                />
                <button className="text-eyebrow uppercase tracking-luxe text-rose-dust hover:text-ivory transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.heading} className="lg:col-span-2">
              <p className="eyebrow text-rose-dust mb-5">{g.heading}</p>
              <ul className="space-y-3">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-ivory/80 hover:text-rose-dust transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <p className="eyebrow text-rose-dust mb-5">Follow</p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="p-2.5 border border-ivory/20 rounded-full hover:border-rose-dust transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2.5 border border-ivory/20 rounded-full hover:border-rose-dust transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2.5 border border-ivory/20 rounded-full hover:border-rose-dust transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-8 text-ivory/60 text-sm">
              Made in India.
              <br />
              Delivered worldwide.
            </p>
          </div>
        </div>

        <div className="border-t border-ivory/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-eyebrow uppercase tracking-luxe text-ivory/50">
          <p>© {new Date().getFullYear()} Reggals · All rights reserved</p>
          <p>Hand-built with care · Premium gifting, redefined</p>
        </div>
      </div>
    </footer>
  );
}
