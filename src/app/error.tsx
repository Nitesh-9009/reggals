'use client';

import Link from 'next/link';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <section className="container-luxe py-24 text-center max-w-2xl mx-auto">
      <p className="eyebrow mb-3">A small hiccup</p>
      <h1 className="font-display text-5xl md:text-6xl balanced">
        Something went quietly wrong.
      </h1>
      <p className="mt-5 text-charcoal-muted pretty">
        Don’t worry — we’ve been notified and our team is already looking into it.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <button onClick={reset} className="btn-primary">Try again</button>
        <Link href="/" className="btn-link">Return home</Link>
      </div>
      <p className="mt-8 text-eyebrow uppercase tracking-luxe text-charcoal-soft">
        {error.message}
      </p>
    </section>
  );
}
