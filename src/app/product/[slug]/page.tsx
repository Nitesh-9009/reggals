import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { findProduct, products, relatedProducts } from '@/lib/data/products';
import { getReviews } from '@/lib/data/reviews';
import { categories } from '@/lib/data/taxonomy';
import { PDPView } from './_view';
import { ProductGrid } from '@/components/product/ProductGrid';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = findProduct(params.slug);
  if (!product) return { title: 'Not found' };
  return {
    title: product.name,
    description: product.tagline,
    openGraph: {
      title: product.name,
      description: product.tagline,
      type: 'website',
      images: [{ url: product.hero, width: 1200, height: 1500, alt: product.name }]
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.tagline,
      images: [product.hero]
    }
  };
}

export default function ProductPage({ params }: Props) {
  const product = findProduct(params.slug);
  if (!product) notFound();

  const reviews = getReviews(product.id);
  const related = relatedProducts(product.slug, 4);
  const primaryCategory = categories.find((c) => c.slug === product.categories[0]);

  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: product.images,
    description: product.description,
    brand: { '@type': 'Brand', name: product.brand },
    sku: product.id,
    offers: {
      '@type': 'Offer',
      url: `https://reggals.in/product/${product.slug}`,
      priceCurrency: product.currency,
      price: product.price,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-line">
        <ol className="container-luxe py-4 flex flex-wrap items-center gap-2 text-eyebrow uppercase tracking-luxe text-charcoal-soft">
          <li><Link href="/" className="hover:text-rose-gold">Home</Link></li>
          <li aria-hidden>·</li>
          <li><Link href="/shop" className="hover:text-rose-gold">Shop</Link></li>
          {primaryCategory && (
            <>
              <li aria-hidden>·</li>
              <li>
                <Link href={`/shop?category=${primaryCategory.slug}`} className="hover:text-rose-gold">
                  {primaryCategory.name}
                </Link>
              </li>
            </>
          )}
          <li aria-hidden>·</li>
          <li className="text-charcoal">{product.name}</li>
        </ol>
      </nav>

      <PDPView product={product} reviews={reviews} />
      {related.length > 0 && (
        <ProductGrid
          products={related}
          eyebrow="You might also love"
          title="A few quietly perfect pairings."
        />
      )}
    </>
  );
}
