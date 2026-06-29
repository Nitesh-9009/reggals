import Image from 'next/image';
import { products } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils';

export default function AdminProducts() {
  return (
    <>
      <header className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">Atelier</p>
          <h1 className="font-display text-4xl mt-1">Products</h1>
        </div>
        <button className="btn-primary text-sm">+ Add product</button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <article key={p.id} className="card overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src={p.hero} alt={p.name} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-eyebrow uppercase tracking-luxe text-charcoal-soft">{p.brand}</p>
              <p className="font-display text-lg mt-1">{p.name}</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span>{formatPrice(p.price)}</span>
                <span className={p.inStock ? 'text-emerald-600' : 'text-rose-deep'}>
                  {p.inStock ? 'In stock' : 'Out of stock'}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
