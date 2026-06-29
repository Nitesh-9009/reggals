import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-luxe py-24 text-center max-w-2xl mx-auto">
      <p className="eyebrow mb-3">404</p>
      <h1 className="font-display text-6xl md:text-7xl balanced">
        This page took the day off.
      </h1>
      <p className="mt-5 text-lg text-charcoal-muted pretty">
        The thing you were looking for isn’t here, but the boutique is just a tap away.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Link href="/" className="btn-primary">Return home</Link>
        <Link href="/shop" className="btn-link">Browse gifts</Link>
      </div>
    </section>
  );
}
