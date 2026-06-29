import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { findProduct, products, relatedProducts } from '@/lib/data/products';
import { getReviews } from '@/lib/data/reviews';
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
      images: [product.hero]
    }
  };
}

export default function ProductPage({ params }: Props) {
  const product = findProduct(params.slug);
  if (!product) notFound();

  const reviews = getReviews(product.id);
  const related = relatedProducts(product.slug, 4);

  return (
    <>
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
