import Image from 'next/image';
import Link from 'next/link';

const shots = [
  'photo-1543163521-1bf539c55dd2',
  'photo-1515562141207-7a88fb7ce338',
  'photo-1556228720-195a672e8a03',
  'photo-1556228453-efd6c1ff04f6',
  'photo-1605100804763-247f67b3557e',
  'photo-1582142306909-195724d33ffc'
];

export function InstagramGallery() {
  return (
    <section className="py-20 md:py-24 border-t border-line">
      <div className="container-luxe">
        <header className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">@reggals.in</p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal balanced">
            Soft moments, quietly shared.
          </h2>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {shots.map((id) => (
            <a
              key={id}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`}
                alt="Reggals on Instagram"
                fill
                sizes="(min-width:1024px) 16vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-eyebrow uppercase tracking-luxe text-ivory">
                  View
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-6 text-center">
          <Link href="https://instagram.com" target="_blank" rel="noreferrer noopener" className="btn-link">
            Follow @reggals.in
          </Link>
        </p>
      </div>
    </section>
  );
}
