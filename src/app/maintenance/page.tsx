import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export const metadata = { title: 'We’ll be right back' };

export default function MaintenancePage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blush flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-rose-deep animate-pulse" />
        </div>
        <p className="eyebrow mb-3">Quietly redecorating</p>
        <h1 className="font-display text-5xl md:text-6xl balanced">We’ll be right back.</h1>
        <p className="mt-5 text-charcoal-muted text-lg pretty">
          The boutique is being thoughtfully updated. We expect to reopen the doors in a few minutes.
        </p>
        <Link href="https://instagram.com" className="btn-link mt-10 inline-flex">
          Follow @reggals.in for soft updates
        </Link>
      </div>
    </section>
  );
}
