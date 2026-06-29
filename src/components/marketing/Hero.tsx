'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      <div className="container-luxe pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial copy */}
          <div className="lg:col-span-6 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="eyebrow"
            >
              A boutique of thoughtful gifts
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="mt-6 font-display leading-[1.02] text-5xl md:text-7xl text-charcoal balanced"
            >
              Gifts that feel
              <span className="block italic text-rose-deep"> quietly extraordinary.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-7 text-lg text-charcoal-muted max-w-xl pretty"
            >
              Reggals is a quiet boutique of curated, premium gifting — perfumes,
              jewelry, hand-poured candles, silk and skin care — beautifully
              wrapped and delivered with care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link href="/shop" className="btn-primary">
                Discover the edit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/collections/the-rose-gold-edit" className="btn-link">
                The Rose Gold Edit
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-md"
            >
              <Trust label="Hand-wrapped" sub="With every order" />
              <Trust label="2–4 days" sub="Premium delivery" />
              <Trust label="14-day" sub="Easy returns" />
            </motion.div>
          </div>

          {/* Image stack */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] rounded-xl2 overflow-hidden shadow-luxe"
            >
              <Image
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1600&q=85"
                alt="A delicate rose-gold pendant resting on linen"
                fill
                priority
                sizes="(min-width:1024px) 45vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden md:block absolute -bottom-10 -left-10 w-48 h-60 rounded-xl2 overflow-hidden shadow-luxe border-4 border-offwhite"
            >
              <Image
                src="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=600&q=80"
                alt="Hand-poured candle in amber glass"
                fill
                sizes="200px"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:flex absolute -top-6 right-4 bg-ivory rounded-xl px-5 py-3 shadow-soft border border-line items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" />
              <p className="text-eyebrow uppercase tracking-luxe text-charcoal">
                263 gifts wrapped today
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative rule */}
      <div className="container-luxe">
        <div className="border-t border-line" />
      </div>
    </section>
  );
}

function Trust({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="border-l border-line pl-4">
      <p className="font-display text-xl text-charcoal leading-tight">{label}</p>
      <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-1">
        {sub}
      </p>
    </div>
  );
}
