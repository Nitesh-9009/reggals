import { MessageCircle, Mail, Phone, MessageSquareText } from 'lucide-react';
import Link from 'next/link';

export const metadata = { title: 'Customer support' };

const channels = [
  { icon: MessageCircle, label: 'Live chat', desc: 'Mon — Sat · 9am–9pm IST', href: '#' },
  { icon: MessageSquareText, label: 'WhatsApp', desc: '+91 98xx xxx 421', href: 'https://wa.me/919800000000' },
  { icon: Mail, label: 'Email', desc: 'care@reggals.in', href: 'mailto:care@reggals.in' },
  { icon: Phone, label: 'Call us', desc: '1800-XXX-XXXX · Toll-free', href: 'tel:18001234567' }
];

export default function SupportPage() {
  return (
    <section className="container-luxe py-20">
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-3">Reggals Care</p>
        <h1 className="font-display text-5xl md:text-6xl balanced">We’re here, quietly listening.</h1>
        <p className="mt-5 text-charcoal-muted text-lg pretty">
          Whether it’s a question, a worry, or a last-minute gift — we usually respond within a few minutes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
        {channels.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.label}
              href={c.href}
              className="card p-7 hover:border-rose-gold transition-colors group"
            >
              <Icon className="h-6 w-6 text-rose-gold mb-4" />
              <p className="font-display text-xl group-hover:text-rose-gold transition-colors">{c.label}</p>
              <p className="text-charcoal-muted text-sm mt-1">{c.desc}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-16 text-center">
        <Link href="/faqs" className="btn-link">Browse FAQs</Link>
      </div>
    </section>
  );
}
