'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { products } from '@/lib/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { cn } from '@/lib/utils';

type Answers = {
  recipient?: string;
  occasion?: string;
  budget?: number;
  vibe?: string;
  category?: string;
};

const STEPS = [
  {
    key: 'recipient' as const,
    eyebrow: 'Step 1 of 5',
    title: 'Who is this beautiful gift for?',
    sub: 'A small detail helps us curate with intention.',
    options: [
      { value: 'partner', label: 'Partner' },
      { value: 'mother', label: 'Mother' },
      { value: 'sister', label: 'Sister' },
      { value: 'friend', label: 'Friend' },
      { value: 'colleague', label: 'Colleague' },
      { value: 'self', label: 'Myself' }
    ]
  },
  {
    key: 'occasion' as const,
    eyebrow: 'Step 2 of 5',
    title: 'What’s the moment?',
    sub: 'We tune the edit to the feeling of the day.',
    options: [
      { value: 'birthday', label: 'Birthday' },
      { value: 'anniversary', label: 'Anniversary' },
      { value: 'valentine', label: 'Valentine' },
      { value: 'mothers-day', label: 'Mother’s Day' },
      { value: 'wedding', label: 'Wedding' },
      { value: 'just-because', label: 'Just because' }
    ]
  },
  {
    key: 'budget' as const,
    eyebrow: 'Step 3 of 5',
    title: 'What feels comfortable?',
    sub: 'There’s thoughtfulness at every price.',
    options: [
      { value: 1500, label: 'Under ₹1,500' },
      { value: 3000, label: 'Under ₹3,000' },
      { value: 5000, label: 'Under ₹5,000' },
      { value: 10000, label: 'Under ₹10,000' }
    ]
  },
  {
    key: 'vibe' as const,
    eyebrow: 'Step 4 of 5',
    title: 'What feeling are you reaching for?',
    sub: 'We’ll honor the tone.',
    options: [
      { value: 'romantic', label: 'Romantic' },
      { value: 'elegant', label: 'Elegant & quiet' },
      { value: 'playful', label: 'Soft & playful' },
      { value: 'indulgent', label: 'Indulgent' },
      { value: 'minimal', label: 'Minimal' }
    ]
  },
  {
    key: 'category' as const,
    eyebrow: 'Step 5 of 5',
    title: 'Anything she already loves?',
    sub: 'Optional — leave it open if you’re unsure.',
    options: [
      { value: 'jewelry', label: 'Jewelry' },
      { value: 'perfumes', label: 'Perfumes' },
      { value: 'beauty', label: 'Beauty' },
      { value: 'self-care', label: 'Self care' },
      { value: 'flowers', label: 'Flowers' },
      { value: 'any', label: 'Surprise us' }
    ]
  }
];

export const dynamic = 'force-static';

export default function ConciergePage() {
  return (
    <>
      <header className="container-luxe pt-16 md:pt-20 pb-6 max-w-2xl">
        <p className="eyebrow mb-3 inline-flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5" /> Reggals Concierge
        </p>
        <h1 className="font-display text-5xl md:text-6xl balanced">
          Tell us a little. We’ll curate the rest.
        </h1>
        <p className="mt-5 text-charcoal-muted text-lg pretty">
          Five quiet questions. Our concierge hand-picks a small edit just for her — beautifully wrapped, delivered with care.
        </p>
      </header>
      <ConciergeFlow />
    </>
  );
}

function ConciergeFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  function choose(key: keyof Answers, value: any) {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    if (step < STEPS.length - 1) setStep(step + 1);
    else setDone(true);
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  const curated = useMemo(() => {
    if (!done) return [];
    let pool = [...products];
    if (answers.occasion) pool = pool.filter((p) => p.occasions.includes(answers.occasion!));
    if (answers.category && answers.category !== 'any')
      pool = pool.filter((p) => p.categories.includes(answers.category!));
    if (answers.budget) pool = pool.filter((p) => p.price <= (answers.budget as number));
    if (pool.length < 3) {
      // Soft fallback — relax category
      pool = products
        .filter((p) => !answers.occasion || p.occasions.includes(answers.occasion))
        .filter((p) => !answers.budget || p.price <= (answers.budget as number));
    }
    return pool
      .sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount)
      .slice(0, 4);
  }, [done, answers]);

  if (done) {
    return (
      <section className="container-luxe pb-24">
        <div className="card p-8 md:p-12 bg-gradient-to-br from-blush/50 to-ivory">
          <p className="eyebrow mb-3 inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-rose-gold" /> Curated for you
          </p>
          <h2 className="font-display text-3xl md:text-4xl balanced">
            A quietly perfect edit, just for {recipientLabel(answers.recipient)}.
          </h2>
          <p className="mt-4 text-charcoal-muted pretty max-w-2xl">
            Based on a {answers.vibe ?? 'thoughtful'} tone for {occasionLabel(answers.occasion)},
            kept comfortably within {budgetLabel(answers.budget)}. Three to four pieces we’d gift ourselves.
          </p>
          <button onClick={reset} className="mt-7 btn-ghost text-sm">
            <RotateCcw className="h-4 w-4" /> Start over
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {curated.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/shop" className="btn-link">Or explore the whole boutique</Link>
        </div>
      </section>
    );
  }

  const s = STEPS[step];
  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <section className="container-luxe pb-24">
      <div className="card p-8 md:p-12 max-w-3xl">
        <div className="h-1 bg-line rounded-full overflow-hidden mb-8">
          <motion.div
            className="h-full bg-rose-gold"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-3">{s.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl balanced">{s.title}</h2>
            <p className="mt-3 text-charcoal-muted pretty">{s.sub}</p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
              {s.options.map((opt) => {
                const selected = (answers as any)[s.key] === opt.value;
                return (
                  <button
                    key={String(opt.value)}
                    onClick={() => choose(s.key, opt.value)}
                    className={cn(
                      'group text-left rounded-xl2 border p-5 transition-all duration-300',
                      'hover:border-rose-gold hover:shadow-soft',
                      selected ? 'border-rose-gold bg-blush/40' : 'border-line bg-ivory/60'
                    )}
                  >
                    <p className="font-display text-lg">{opt.label}</p>
                    <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft mt-2 group-hover:text-rose-gold transition-colors">
                      Select →
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="text-eyebrow uppercase tracking-luxe text-charcoal-soft disabled:opacity-30 hover:text-rose-gold"
              >
                ← Back
              </button>
              {step === STEPS.length - 1 && (
                <button onClick={() => setDone(true)} className="btn-primary">
                  Reveal the edit <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function recipientLabel(v?: string) {
  const map: Record<string, string> = {
    partner: 'your partner',
    mother: 'her',
    sister: 'your sister',
    friend: 'your friend',
    colleague: 'your colleague',
    self: 'yourself'
  };
  return v ? map[v] ?? 'her' : 'her';
}
function occasionLabel(v?: string) {
  const map: Record<string, string> = {
    birthday: 'a birthday',
    anniversary: 'an anniversary',
    valentine: 'Valentine’s',
    'mothers-day': 'Mother’s Day',
    wedding: 'a wedding',
    'just-because': 'a quietly lovely day'
  };
  return v ? map[v] ?? 'the moment' : 'the moment';
}
function budgetLabel(v?: number) {
  return v ? `₹${v.toLocaleString('en-IN')}` : 'any budget';
}
