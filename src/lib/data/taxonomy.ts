import type { Category, Occasion, Collection } from '@/lib/types';

export const categories: Category[] = [
  {
    slug: 'jewelry',
    name: 'Jewelry',
    tagline: 'Heirlooms in the making',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'perfumes',
    name: 'Perfumes',
    tagline: 'Quiet, lingering, unforgettable',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'beauty',
    name: 'Beauty',
    tagline: 'Curated, clean, considered',
    image:
      'https://images.unsplash.com/photo-1522335789203-aaa749a9d61c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'self-care',
    name: 'Self Care',
    tagline: 'Soft rituals for the everyday',
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'bags',
    name: 'Bags',
    tagline: 'Modern silhouettes',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'candles',
    name: 'Candles',
    tagline: 'Slow-burning, hand-poured',
    image:
      'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'flowers',
    name: 'Flowers',
    tagline: 'Quietly arranged, beautifully delivered',
    image:
      'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'gift-boxes',
    name: 'Gift Boxes',
    tagline: 'A keepsake before it’s opened',
    image:
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'personalized',
    name: 'Personalized',
    tagline: 'Made for her, only',
    image:
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'home-decor',
    name: 'Home Decor',
    tagline: 'Tactile, warm, refined',
    image:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'chocolates',
    name: 'Chocolates',
    tagline: 'Single-origin indulgence',
    image:
      'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'stationery',
    name: 'Stationery',
    tagline: 'Heirloom paper goods',
    image:
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1400&q=80'
  }
];

export const occasions: Occasion[] = [
  {
    slug: 'birthday',
    name: 'Birthday',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'anniversary',
    name: 'Anniversary',
    image:
      'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'valentine',
    name: 'Valentine',
    image:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'womens-day',
    name: 'Women’s Day',
    image:
      'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'mothers-day',
    name: 'Mother’s Day',
    image:
      'https://images.unsplash.com/photo-1527383398725-c2a3df27d479?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'raksha-bandhan',
    name: 'Raksha Bandhan',
    image:
      'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'wedding',
    name: 'Wedding',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'just-because',
    name: 'Just Because',
    image:
      'https://images.unsplash.com/photo-1492552181161-62217fc3076d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'thank-you',
    name: 'Thank You',
    image:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'congratulations',
    name: 'Congratulations',
    image:
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1200&q=80'
  }
];

export const collections: Collection[] = [
  {
    slug: 'the-rose-gold-edit',
    name: 'The Rose Gold Edit',
    subtitle: 'Soft metal. Quiet glow.',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80',
    badge: 'Editor’s Pick'
  },
  {
    slug: 'midnight-bloom',
    name: 'Midnight Bloom',
    subtitle: 'A nocturne in florals & oud.',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80',
    badge: 'Limited'
  },
  {
    slug: 'pearl-rituals',
    name: 'Pearl Rituals',
    subtitle: 'Soft-care for soft days.',
    image:
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1600&q=80',
    badge: 'New'
  },
  {
    slug: 'the-wedding-suite',
    name: 'The Wedding Suite',
    subtitle: 'Heirloom gifting for the modern bride.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80'
  }
];
