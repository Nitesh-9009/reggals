import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

export function ConciergeBanner() {
  return (
    <section className="py-20 md:py-24 border-t border-line">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-xl2 bg-charcoal text-ivory">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=2000&q=80"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-transparent" />
          </div>
          <div className="relative p-10 md:p-16 max-w-2xl">
            <p className="eyebrow text-rose-dust mb-3 inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> Reggals Concierge
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ivory balanced">
              Not sure what to gift? Let us quietly help.
            </h2>
            <p className="mt-5 text-ivory/80 text-lg pretty">
              Five soft questions. Our concierge hand-curates a small edit just for her — tailored to occasion, vibe and budget.
            </p>
            <Link
              href="/concierge"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivory text-charcoal px-7 py-3.5 text-sm tracking-luxe uppercase hover:bg-rose-dust transition-colors"
            >
              Begin the curation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
