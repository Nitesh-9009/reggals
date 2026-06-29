import type { MetadataRoute } from 'next';
import { products } from '@/lib/data/products';
import { categories, collections, occasions } from '@/lib/data/taxonomy';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://reggals.in';
  const now = new Date();

  const staticPaths = [
    '/', '/shop', '/categories', '/collections', '/wishlist', '/cart',
    '/about', '/contact', '/faqs', '/support', '/gift-cards', '/rewards',
    '/refer', '/privacy', '/terms', '/shipping-policy'
  ];

  return [
    ...staticPaths.map((p) => ({ url: `${base}${p}`, lastModified: now })),
    ...products.map((p) => ({ url: `${base}/product/${p.slug}`, lastModified: now, priority: 0.8 })),
    ...categories.map((c) => ({ url: `${base}/shop?category=${c.slug}`, lastModified: now })),
    ...occasions.map((o) => ({ url: `${base}/shop?occasion=${o.slug}`, lastModified: now })),
    ...collections.map((c) => ({ url: `${base}/collections/${c.slug}`, lastModified: now }))
  ];
}
