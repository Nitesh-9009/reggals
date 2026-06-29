import { NextResponse } from 'next/server';
import { products } from '@/lib/data/products';

export const dynamic = 'force-static';

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const occasion = searchParams.get('occasion');
  const tag = searchParams.get('tag');
  const maxPrice = Number(searchParams.get('maxPrice') ?? 0);

  let list = products;
  if (category) list = list.filter((p) => (p.categories as readonly string[]).includes(category));
  if (occasion) list = list.filter((p) => (p.occasions as readonly string[]).includes(occasion));
  if (tag) list = list.filter((p) => (p.tags as readonly string[]).includes(tag));
  if (maxPrice > 0) list = list.filter((p) => p.price <= maxPrice);

  return NextResponse.json({ count: list.length, products: list });
}
