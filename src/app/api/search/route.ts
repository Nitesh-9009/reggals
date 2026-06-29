import { NextResponse } from 'next/server';
import { products } from '@/lib/data/products';

export const dynamic = 'force-dynamic';

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') ?? '').trim().toLowerCase();

  if (!q) return NextResponse.json({ count: 0, results: [] });

  const results = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.categories.some((t) => t.toLowerCase().includes(q)) ||
      p.occasions.some((t) => t.toLowerCase().includes(q))
    );
  });

  return NextResponse.json({
    count: results.length,
    results: results.slice(0, 20).map((p) => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      brand: p.brand,
      price: p.price,
      hero: p.hero
    }))
  });
}
