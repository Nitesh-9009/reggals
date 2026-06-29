import { Suspense } from 'react';
import { SearchView } from './_view';

export const metadata = { title: 'Search Reggals' };

export default function SearchPage() {
  return (
    <Suspense>
      <SearchView />
    </Suspense>
  );
}
