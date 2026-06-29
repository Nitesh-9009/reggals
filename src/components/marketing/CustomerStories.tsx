'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const stories = [
  {
    name: 'Aanya · Bangalore',
    text:
      'I ordered a pendant for my mum’s 60th. The wrapping alone made her cry — and then she opened it.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Rohan · Mumbai',
    text:
      'I’m bad at gifts. Reggals made me look like I tried for weeks. (I didn’t.)',
    image:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Saanvi · Delhi',
    text:
      'Bought myself the silk eye-mask set after a long week. It felt like a soft Sunday.',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
  }
];

export function CustomerStories() {
  return (
    <section className="py-20 md:py-24 border-t border-line">
      <div className="container-luxe">
        <header className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Soft Mentions</p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal balanced">
            Letters from the loved.
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.figure
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="card p-8 flex flex-col"
            >
              <Quote className="h-7 w-7 text-rose-gold mb-5" />
              <blockquote className="font-display text-xl md:text-2xl leading-snug text-charcoal pretty flex-1">
                “{s.text}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image src={s.image} alt="" fill sizes="40px" className="object-cover" />
                </div>
                <p className="text-eyebrow uppercase tracking-luxe text-charcoal-muted">
                  {s.name}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
