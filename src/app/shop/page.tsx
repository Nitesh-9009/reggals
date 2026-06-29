import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopView } from './_view';

export const metadata: Metadata = {
  title: 'Shop all gifts',
  description: 'Filter and discover premium gifts across the Reggals boutique.'
};

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopSkeleton />}>
      <ShopView />
    </Suspense>
  );
}

function ShopSkeleton() {
  return (
    <div className="container-luxe py-20">
      <div className="h-8 w-48 skeleton mb-10" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-[4/5] skeleton" />
        ))}
      </div>
    </div>
  );
}
