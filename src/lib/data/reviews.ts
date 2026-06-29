import type { Review } from '@/lib/types';

export const reviewsByProduct: Record<string, Review[]> = {
  'p-001': [
    {
      id: 'r1',
      author: 'Aanya M.',
      rating: 5,
      title: 'Quietly stunning.',
      body: 'Wore it to a wedding and three friends asked where it was from. The packaging alone felt like a gift.',
      verified: true,
      createdAt: '2026-05-12'
    },
    {
      id: 'r2',
      author: 'Rohan G.',
      rating: 5,
      title: 'Anniversary win.',
      body: 'Engraved our anniversary date on the back. She cried (the good kind). Reggals nailed the presentation.',
      verified: true,
      createdAt: '2026-04-22'
    },
    {
      id: 'r3',
      author: 'Saanvi K.',
      rating: 4,
      title: 'Beautiful, lightweight.',
      body: 'Lovely tone of rose gold — not too warm, not too pink. Wish the chain was slightly longer.',
      verified: true,
      createdAt: '2026-03-08'
    }
  ],
  'p-002': [
    {
      id: 'r1',
      author: 'Mira S.',
      rating: 5,
      title: 'Smells like a Mumbai monsoon evening.',
      body: 'Iris and oud — soft, sultry, never loud. Lasts all day on my skin.',
      verified: true,
      createdAt: '2026-05-30'
    }
  ]
};

export function getReviews(productId: string): Review[] {
  return reviewsByProduct[productId] ?? defaultReviews;
}

const defaultReviews: Review[] = [
  {
    id: 'd1',
    author: 'Verified Customer',
    rating: 5,
    title: 'Truly thoughtful.',
    body: 'The unboxing experience felt like opening a gift at a boutique. The product is just as beautiful in person.',
    verified: true,
    createdAt: '2026-05-01'
  },
  {
    id: 'd2',
    author: 'Verified Customer',
    rating: 4,
    title: 'A lovely surprise.',
    body: 'Arrived earlier than expected, beautifully wrapped. Would absolutely order again.',
    verified: true,
    createdAt: '2026-04-18'
  }
];
