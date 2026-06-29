import { Hero } from '@/components/marketing/Hero';
import { OccasionStrip } from '@/components/marketing/OccasionStrip';
import { FeaturedCollections } from '@/components/marketing/FeaturedCollections';
import { ProductGrid } from '@/components/product/ProductGrid';
import { CategoryMosaic } from '@/components/marketing/CategoryMosaic';
import { PriceTiers } from '@/components/marketing/PriceTiers';
import { CustomerStories } from '@/components/marketing/CustomerStories';
import { InstagramGallery } from '@/components/marketing/InstagramGallery';
import { Newsletter } from '@/components/marketing/Newsletter';
import { products, productsByTag } from '@/lib/data/products';

export default function HomePage() {
  const trending = productsByTag('bestseller').slice(0, 4);
  const newArrivals = productsByTag('new');
  const fallback = products.slice(0, 4);
  const trendingProducts = trending.length ? trending : fallback;

  return (
    <>
      <Hero />
      <OccasionStrip />
      <FeaturedCollections />
      <ProductGrid
        products={trendingProducts}
        eyebrow="Trending right now"
        title="What everyone is gifting this week."
        description="Hand-picked by our atelier — small-batch, quietly extraordinary."
        cta={{ label: 'Shop bestsellers', href: '/shop?tag=bestseller' }}
      />
      <CategoryMosaic />
      <ProductGrid
        products={newArrivals}
        eyebrow="New Arrivals"
        title="Just landed in the boutique."
        cta={{ label: 'Shop new', href: '/shop?tag=new' }}
      />
      <PriceTiers />
      <CustomerStories />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
