'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { useCart } from '@/lib/store/cart';
import { useWishlist } from '@/lib/store/wishlist';
import { categories, occasions, collections } from '@/lib/data/taxonomy';
import { cn } from '@/lib/utils';

type MenuKey = 'categories' | 'occasions' | 'collections';

type NavLink =
  | { label: string; key: MenuKey }
  | { label: string; href: string };

const navLinks: NavLink[] = [
  { label: 'Categories', key: 'categories' },
  { label: 'Occasions', key: 'occasions' },
  { label: 'Collections', key: 'collections' },
  { label: 'New Arrivals', href: '/shop?tag=new' },
  { label: 'Luxury', href: '/shop?collection=midnight-bloom' },
  { label: 'Personalized', href: '/shop?category=personalized' }
];

const OPEN_DELAY = 90;
const CLOSE_DELAY = 180;

export function Header() {
  const cartCount = useCart((s) => s.count());
  const cartOpen = useCart((s) => s.open);
  const wishlistCount = useWishlist((s) => s.ids.length);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);

  // Hover-intent timers
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearTimers = () => {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleOpen = (key: MenuKey) => {
    clearTimers();
    // If a menu is already open, switch instantly (feels right).
    if (openMenu) {
      setOpenMenu(key);
      return;
    }
    openTimer.current = window.setTimeout(() => setOpenMenu(key), OPEN_DELAY);
  };

  const scheduleClose = () => {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const closeNow = () => {
    clearTimers();
    setOpenMenu(null);
  };

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeNow();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-charcoal text-ivory text-eyebrow uppercase tracking-luxe py-2.5 text-center">
        Complimentary gift wrap on every order · Free shipping over ₹1,499
      </div>

      <header
        className={cn(
          'sticky top-0 z-40 bg-offwhite/85 backdrop-blur-md transition-all duration-500 border-b',
          scrolled || openMenu ? 'border-line' : 'border-transparent'
        )}
      >
        <div className="container-luxe">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <button
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 -ml-2 text-charcoal"
              >
                <Menu className="h-5 w-5" />
              </button>
              <Logo />
            </div>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
              {navLinks.map((link) =>
                'href' in link ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    onMouseEnter={scheduleClose}
                    onClick={closeNow}
                    className="text-sm tracking-luxe uppercase text-charcoal hover:text-rose-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    type="button"
                    aria-expanded={openMenu === link.key}
                    aria-haspopup="true"
                    onMouseEnter={() => scheduleOpen(link.key)}
                    onMouseLeave={scheduleClose}
                    onFocus={() => scheduleOpen(link.key)}
                    onClick={() =>
                      setOpenMenu((current) => (current === link.key ? null : link.key))
                    }
                    className={cn(
                      'text-sm tracking-luxe uppercase transition-colors relative py-2',
                      'after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-px after:bg-rose-gold after:transition-all after:duration-300',
                      openMenu === link.key
                        ? 'text-rose-gold after:w-6'
                        : 'text-charcoal hover:text-rose-gold after:w-0 hover:after:w-6'
                    )}
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>

            <div className="flex items-center gap-1 md:gap-3">
              <button
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                onMouseEnter={scheduleClose}
                className="p-2 text-charcoal hover:text-rose-gold transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link
                href="/wishlist"
                aria-label="Wishlist"
                onMouseEnter={scheduleClose}
                className="relative p-2 text-charcoal hover:text-rose-gold transition-colors"
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 text-[10px] bg-rose-gold text-ivory rounded-full h-4 min-w-4 px-1 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <button
                onClick={cartOpen}
                onMouseEnter={scheduleClose}
                aria-label="Cart"
                className="relative p-2 text-charcoal hover:text-rose-gold transition-colors"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 text-[10px] bg-rose-gold text-ivory rounded-full h-4 min-w-4 px-1 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <Link
                href="/account"
                onMouseEnter={scheduleClose}
                aria-label="Account"
                className="hidden sm:inline-flex p-2 text-charcoal hover:text-rose-gold transition-colors"
              >
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mega menu — full viewport width, solid background, sits inside the sticky header */}
        <div
          className={cn(
            'absolute left-0 right-0 top-full w-full bg-offwhite border-t border-line shadow-soft',
            'transition-all duration-300 ease-out',
            openMenu
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          )}
          aria-hidden={!openMenu}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="container-luxe py-12">
            {openMenu === 'categories' && <CategoryMenu onNavigate={closeNow} />}
            {openMenu === 'occasions' && <OccasionMenu onNavigate={closeNow} />}
            {openMenu === 'collections' && <CollectionMenu onNavigate={closeNow} />}
          </div>
        </div>
      </header>

      {/* Soft backdrop while a megamenu is open — clicking it dismisses */}
      <div
        aria-hidden
        onClick={closeNow}
        className={cn(
          'fixed inset-0 bg-charcoal/25 transition-opacity duration-300 z-30',
          openMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Mobile drawer */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function CategoryMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-7 grid grid-cols-3 gap-x-8 gap-y-3">
        <p className="eyebrow col-span-3 mb-2">Shop by Category</p>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/shop?category=${c.slug}`}
            onClick={onNavigate}
            className="group flex items-baseline justify-between border-b border-line py-2.5 text-charcoal hover:text-rose-gold transition-colors"
          >
            <span className="font-display text-lg">{c.name}</span>
            <span className="text-eyebrow uppercase tracking-luxe text-charcoal-soft group-hover:text-rose-gold">
              View →
            </span>
          </Link>
        ))}
      </div>
      <div className="col-span-5 grid grid-cols-2 gap-4">
        {categories.slice(0, 2).map((c) => (
          <Link
            key={c.slug}
            href={`/shop?category=${c.slug}`}
            onClick={onNavigate}
            className="relative aspect-[4/5] overflow-hidden rounded-xl2 group"
          >
            <Image
              src={c.image}
              alt={c.name}
              fill
              sizes="(min-width:1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-ivory">
              <p className="font-display text-2xl">{c.name}</p>
              <p className="text-eyebrow uppercase tracking-luxe opacity-80 mt-1">
                {c.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function OccasionMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-7 grid grid-cols-2 gap-x-8 gap-y-3">
        <p className="eyebrow col-span-2 mb-2">Shop by Occasion</p>
        {occasions.map((o) => (
          <Link
            key={o.slug}
            href={`/shop?occasion=${o.slug}`}
            onClick={onNavigate}
            className="group flex items-baseline justify-between border-b border-line py-2.5 text-charcoal hover:text-rose-gold transition-colors"
          >
            <span className="font-display text-lg">{o.name}</span>
            <span className="text-eyebrow uppercase tracking-luxe text-charcoal-soft group-hover:text-rose-gold">
              Gifts →
            </span>
          </Link>
        ))}
      </div>
      <div className="col-span-5 relative aspect-[4/3] overflow-hidden rounded-xl2">
        <Image
          src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=1400&q=80"
          alt="Anniversary gifting"
          fill
          sizes="40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-ivory">
          <p className="eyebrow text-rose-dust">Featured</p>
          <p className="font-display text-3xl mt-2">An anniversary, beautifully wrapped.</p>
        </div>
      </div>
    </div>
  );
}

function CollectionMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {collections.map((c) => (
        <Link
          key={c.slug}
          href={`/collections/${c.slug}`}
          onClick={onNavigate}
          className="group relative aspect-[3/4] overflow-hidden rounded-xl2"
        >
          <Image
            src={c.image}
            alt={c.name}
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-ivory">
            {c.badge && (
              <span className="text-eyebrow uppercase tracking-luxe text-rose-dust">
                {c.badge}
              </span>
            )}
            <p className="font-display text-xl mt-1">{c.name}</p>
            <p className="text-sm opacity-80">{c.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-500 lg:hidden',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="absolute inset-0 bg-charcoal/40" onClick={onClose} />
      <aside
        className={cn(
          'absolute left-0 top-0 bottom-0 w-[88%] max-w-sm bg-ivory shadow-luxe transition-transform duration-500',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-5 border-b border-line">
          <Logo />
          <button onClick={onClose} aria-label="Close menu" className="p-2">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="px-5 py-6 space-y-1 overflow-y-auto h-[calc(100%-72px)]">
          <p className="eyebrow mt-2 mb-3">Shop</p>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/shop?category=${c.slug}`}
              onClick={onClose}
              className="block py-3 border-b border-line/60 font-display text-lg text-charcoal hover:text-rose-gold"
            >
              {c.name}
            </Link>
          ))}
          <p className="eyebrow mt-8 mb-3">Occasions</p>
          {occasions.slice(0, 8).map((o) => (
            <Link
              key={o.slug}
              href={`/shop?occasion=${o.slug}`}
              onClick={onClose}
              className="block py-3 border-b border-line/60 text-charcoal hover:text-rose-gold"
            >
              {o.name}
            </Link>
          ))}
          <div className="pt-8 flex flex-col gap-3">
            <Link href="/account" onClick={onClose} className="btn-ghost">Account</Link>
            <Link href="/support" onClick={onClose} className="btn-link self-start">Support</Link>
          </div>
        </nav>
      </aside>
    </div>
  );
}

function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const popular = ['Personalized necklace', 'Anniversary gift', 'Perfume', 'Silk scarf', 'Gift box under ₹1999'];
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-500',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm" onClick={onClose} />
      <div
        className={cn(
          'relative bg-offwhite border-b border-line shadow-soft transition-transform duration-500',
          open ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container-luxe py-10">
          <div className="flex items-center justify-between mb-6">
            <p className="eyebrow">Search Reggals</p>
            <button onClick={onClose} aria-label="Close search" className="p-2">
              <X className="h-5 w-5" />
            </button>
          </div>
          <form
            action="/search"
            className="flex items-end gap-3 border-b-2 border-charcoal pb-2"
          >
            <Search className="h-5 w-5 text-charcoal-soft mb-2" />
            <input
              name="q"
              placeholder="Try ‘rose gold pendant’"
              className="flex-1 bg-transparent text-2xl md:text-4xl font-display outline-none placeholder:text-charcoal-soft/70"
              autoFocus={open}
            />
            <button className="btn-primary" type="submit">Search</button>
          </form>
          <div className="mt-8">
            <p className="eyebrow mb-4">Popular searches</p>
            <div className="flex flex-wrap gap-2">
              {popular.map((p) => (
                <Link
                  key={p}
                  href={`/search?q=${encodeURIComponent(p)}`}
                  onClick={onClose}
                  className="px-4 py-2 rounded-full border border-line text-sm hover:border-rose-gold hover:text-rose-gold transition-colors"
                >
                  {p}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
