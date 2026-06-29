import type { Product } from '@/lib/types';

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const products: Product[] = [
  {
    id: 'p-001',
    slug: 'aurelia-rose-gold-pendant',
    name: 'Aurelia — Rose Gold Pendant',
    tagline: 'A whisper of gold against the collarbone.',
    description:
      'Hand-finished in 18k rose gold vermeil over recycled sterling silver. Lightweight. Hypoallergenic. Ships in a Reggals keepsake box, ready to gift.',
    brand: 'Maison Aurelia',
    price: 4499,
    compareAt: 5499,
    currency: 'INR',
    rating: 4.9,
    reviewCount: 218,
    hero: img('photo-1611591437281-460bfbe1220a'),
    images: [
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1599643478518-a784e5dc4c8f'),
      img('photo-1605100804763-247f67b3557e'),
      img('photo-1611652022419-a9419f74343d')
    ],
    categories: ['jewelry', 'personalized'],
    occasions: ['birthday', 'anniversary', 'valentine', 'just-because'],
    collections: ['the-rose-gold-edit'],
    tags: ['bestseller', 'personalizable', 'handcrafted'],
    variants: [
      { id: 'v1', label: 'Rose Gold', attribute: 'metal', swatch: '#B76E79', stock: 24 },
      { id: 'v2', label: 'Champagne Gold', attribute: 'metal', swatch: '#C9A66B', stock: 12 },
      { id: 'v3', label: 'Silver', attribute: 'metal', swatch: '#D9D9D9', stock: 9 }
    ],
    materials: ['18k rose gold vermeil', 'Recycled silver', 'Nickel-free'],
    giftWrapEligible: true,
    personalizable: true,
    inStock: true,
    estimatedDelivery: '2–4 days'
  },
  {
    id: 'p-002',
    slug: 'midnight-bloom-eau-de-parfum',
    name: 'Midnight Bloom — Eau de Parfum',
    tagline: 'Iris, oud, soft musk. A nocturne.',
    description:
      'A slow-blooming fragrance built around Florentine iris, smoky oud and white musk. Crafted in Grasse. 50ml in a hand-weighted glass bottle.',
    brand: 'Atelier 7',
    price: 6299,
    currency: 'INR',
    rating: 4.8,
    reviewCount: 142,
    hero: img('photo-1541643600914-78b084683601'),
    images: [
      img('photo-1541643600914-78b084683601'),
      img('photo-1592945403244-b3fbafd7f539'),
      img('photo-1587017539504-67cfbddac569')
    ],
    categories: ['perfumes'],
    occasions: ['anniversary', 'valentine', 'wedding', 'just-because'],
    collections: ['midnight-bloom'],
    tags: ['limited', 'bestseller'],
    materials: ['Florentine iris', 'Cambodian oud', 'White musk'],
    giftWrapEligible: true,
    personalizable: false,
    inStock: true,
    estimatedDelivery: '2–4 days'
  },
  {
    id: 'p-003',
    slug: 'soiree-silk-scarf',
    name: 'Soirée — Hand-rolled Silk Scarf',
    tagline: 'Mulberry silk. Painterly bloom.',
    description:
      '100% mulberry silk, hand-rolled edges. Printed in a small Italian atelier. 90x90cm. Folds beautifully into the keepsake box.',
    brand: 'Casa Lumi',
    price: 3299,
    compareAt: 3999,
    currency: 'INR',
    rating: 4.7,
    reviewCount: 86,
    hero: img('photo-1582142306909-195724d33ffc'),
    images: [
      img('photo-1582142306909-195724d33ffc'),
      img('photo-1601762603339-fd61e28b698a'),
      img('photo-1591348278863-a8fb3887e2aa')
    ],
    categories: ['bags', 'personalized'],
    occasions: ['birthday', 'mothers-day', 'wedding'],
    tags: ['new', 'handcrafted'],
    variants: [
      { id: 'v1', label: 'Rosé', attribute: 'color', swatch: '#F6E1DE', stock: 14 },
      { id: 'v2', label: 'Ivory', attribute: 'color', swatch: '#FBF8F4', stock: 11 },
      { id: 'v3', label: 'Charcoal', attribute: 'color', swatch: '#1F1A17', stock: 6 }
    ],
    materials: ['100% Mulberry silk', 'Hand-rolled edges'],
    giftWrapEligible: true,
    personalizable: true,
    inStock: true,
    estimatedDelivery: '3–5 days'
  },
  {
    id: 'p-004',
    slug: 'pearl-rituals-gift-set',
    name: 'Pearl Rituals — Skin Set',
    tagline: 'A 4-step ritual for quiet evenings.',
    description:
      'Cleanser, essence, serum and balm — a complete evening ritual in a single keepsake box. Fragrance-free. Dermatologist-tested.',
    brand: 'Lune & Co.',
    price: 4899,
    compareAt: 5800,
    currency: 'INR',
    rating: 4.9,
    reviewCount: 312,
    hero: img('photo-1556228453-efd6c1ff04f6'),
    images: [
      img('photo-1556228453-efd6c1ff04f6'),
      img('photo-1620916566398-39f1143ab7be'),
      img('photo-1556228720-195a672e8a03')
    ],
    categories: ['beauty', 'self-care', 'gift-boxes'],
    occasions: ['birthday', 'mothers-day', 'thank-you', 'just-because'],
    collections: ['pearl-rituals'],
    tags: ['bestseller', 'eco'],
    giftWrapEligible: true,
    personalizable: true,
    inStock: true,
    estimatedDelivery: '2–4 days'
  },
  {
    id: 'p-005',
    slug: 'ember-soy-candle-trio',
    name: 'Ember — Soy Candle Trio',
    tagline: 'Hand-poured, slow-burning.',
    description:
      'Three pure-soy candles in mouth-blown amber glass: Fig & Cassis, Tonka Bean, Salted Rose. 60 hours each.',
    brand: 'Studio Ember',
    price: 2699,
    currency: 'INR',
    rating: 4.8,
    reviewCount: 196,
    hero: img('photo-1602874801007-bd458bb1b8b6'),
    images: [
      img('photo-1602874801007-bd458bb1b8b6'),
      img('photo-1601295936208-95c9f2b6cdba'),
      img('photo-1603006905003-be475563bc59')
    ],
    categories: ['candles', 'home-decor', 'gift-boxes'],
    occasions: ['just-because', 'thank-you', 'birthday', 'congratulations'],
    tags: ['eco', 'handcrafted'],
    materials: ['100% soy wax', 'Cotton wick', 'Phthalate-free'],
    giftWrapEligible: true,
    personalizable: false,
    inStock: true,
    estimatedDelivery: '2–4 days'
  },
  {
    id: 'p-006',
    slug: 'florentine-bouquet',
    name: 'Florentine Bouquet',
    tagline: 'Garden roses, ranunculus, soft eucalyptus.',
    description:
      'A hand-tied bouquet of garden roses, ranunculus, lisianthus and silver eucalyptus. Wrapped in unbleached linen with a hand-stamped card.',
    brand: 'The Flower Atelier',
    price: 1899,
    currency: 'INR',
    rating: 4.7,
    reviewCount: 74,
    hero: img('photo-1487530811176-3780de880c2d'),
    images: [
      img('photo-1487530811176-3780de880c2d'),
      img('photo-1508610048659-a06b669e3321'),
      img('photo-1561181286-d3fee7d55364')
    ],
    categories: ['flowers'],
    occasions: ['anniversary', 'valentine', 'just-because', 'mothers-day', 'congratulations'],
    tags: ['new', 'handcrafted'],
    giftWrapEligible: true,
    personalizable: true,
    inStock: true,
    estimatedDelivery: 'Same day'
  },
  {
    id: 'p-007',
    slug: 'celeste-mini-bag',
    name: 'Céleste — Mini Shoulder Bag',
    tagline: 'A sculpted silhouette.',
    description:
      'Soft full-grain leather, custom rose-gold hardware, removable strap. Roomy enough for a phone, lipstick, and a folded note.',
    brand: 'Maison Céleste',
    price: 8990,
    compareAt: 10990,
    currency: 'INR',
    rating: 4.8,
    reviewCount: 58,
    hero: img('photo-1584917865442-de89df76afd3'),
    images: [
      img('photo-1584917865442-de89df76afd3'),
      img('photo-1591561954557-26941169b49e'),
      img('photo-1547949003-9792a18a2601')
    ],
    categories: ['bags'],
    occasions: ['birthday', 'anniversary', 'wedding'],
    collections: ['the-rose-gold-edit'],
    tags: ['limited'],
    variants: [
      { id: 'v1', label: 'Blush', attribute: 'color', swatch: '#F6E1DE', stock: 8 },
      { id: 'v2', label: 'Onyx', attribute: 'color', swatch: '#1F1A17', stock: 5 },
      { id: 'v3', label: 'Ivory', attribute: 'color', swatch: '#FBF8F4', stock: 4 }
    ],
    giftWrapEligible: true,
    personalizable: false,
    inStock: true,
    estimatedDelivery: '3–5 days'
  },
  {
    id: 'p-008',
    slug: 'amour-engraved-bracelet',
    name: 'Amour — Engraved Bangle',
    tagline: 'Your message, softly etched.',
    description:
      'A delicate bangle in 18k rose gold vermeil. Engrave up to 18 characters — a name, a date, a quiet promise.',
    brand: 'Maison Aurelia',
    price: 2999,
    currency: 'INR',
    rating: 4.9,
    reviewCount: 401,
    hero: img('photo-1611652022419-a9419f74343d'),
    images: [
      img('photo-1611652022419-a9419f74343d'),
      img('photo-1611591437281-460bfbe1220a'),
      img('photo-1599643478518-a784e5dc4c8f')
    ],
    categories: ['jewelry', 'personalized'],
    occasions: ['valentine', 'anniversary', 'birthday', 'just-because'],
    tags: ['bestseller', 'personalizable'],
    giftWrapEligible: true,
    personalizable: true,
    inStock: true,
    estimatedDelivery: '4–6 days'
  },
  {
    id: 'p-009',
    slug: 'silk-eye-mask-set',
    name: 'Silk Eye Mask & Scrunchie Set',
    tagline: 'Soft mornings, kinder hair.',
    description:
      'Mulberry silk eye mask and matching scrunchies. Hypoallergenic, temperature-regulating, and beautifully wrapped in a linen pouch.',
    brand: 'Lune & Co.',
    price: 1299,
    compareAt: 1699,
    currency: 'INR',
    rating: 4.6,
    reviewCount: 156,
    hero: img('photo-1620916566398-39f1143ab7be'),
    images: [
      img('photo-1620916566398-39f1143ab7be'),
      img('photo-1556228720-195a672e8a03'),
      img('photo-1556228453-efd6c1ff04f6')
    ],
    categories: ['self-care', 'gift-boxes'],
    occasions: ['just-because', 'thank-you', 'birthday'],
    tags: ['eco'],
    variants: [
      { id: 'v1', label: 'Blush', attribute: 'color', swatch: '#F6E1DE', stock: 30 },
      { id: 'v2', label: 'Champagne', attribute: 'color', swatch: '#E6D2A8', stock: 22 },
      { id: 'v3', label: 'Charcoal', attribute: 'color', swatch: '#1F1A17', stock: 18 }
    ],
    giftWrapEligible: true,
    personalizable: false,
    inStock: true,
    estimatedDelivery: '2–4 days'
  },
  {
    id: 'p-010',
    slug: 'truffe-chocolate-box',
    name: 'Truffé — Single-Origin Chocolate Box',
    tagline: 'Twelve truffles. Quietly indulgent.',
    description:
      '12 hand-rolled truffles made with single-origin Madagascar cacao. Rose, sea salt, dark espresso, pistachio. Presented in a soft-touch box.',
    brand: 'Chocolatier Truffé',
    price: 1499,
    currency: 'INR',
    rating: 4.9,
    reviewCount: 233,
    hero: img('photo-1481391319762-47dff72954d9'),
    images: [
      img('photo-1481391319762-47dff72954d9'),
      img('photo-1606312619070-d48b4c652a52'),
      img('photo-1582176604856-e824b4736522')
    ],
    categories: ['chocolates', 'gift-boxes'],
    occasions: ['valentine', 'birthday', 'thank-you', 'just-because'],
    tags: ['bestseller'],
    giftWrapEligible: true,
    personalizable: true,
    inStock: true,
    estimatedDelivery: '2–3 days'
  },
  {
    id: 'p-011',
    slug: 'reverie-letter-set',
    name: 'Rêverie — Letter Writing Set',
    tagline: 'Cotton paper, wax seal, soft ink.',
    description:
      'Hand-pressed cotton stationery, a brass wax seal, two sticks of rose-gold wax, and a fine ballpoint. For the letters that matter.',
    brand: 'Maison Papier',
    price: 1899,
    currency: 'INR',
    rating: 4.8,
    reviewCount: 67,
    hero: img('photo-1519337265831-281ec6cc8514'),
    images: [
      img('photo-1519337265831-281ec6cc8514'),
      img('photo-1456081445129-830eb8d4bfc6'),
      img('photo-1497005367839-6e852de72767')
    ],
    categories: ['stationery', 'personalized'],
    occasions: ['just-because', 'thank-you', 'congratulations'],
    tags: ['handcrafted', 'eco'],
    giftWrapEligible: true,
    personalizable: true,
    inStock: true,
    estimatedDelivery: '3–5 days'
  },
  {
    id: 'p-012',
    slug: 'the-wedding-keepsake',
    name: 'The Wedding Keepsake Box',
    tagline: 'An heirloom for her first day as a wife.',
    description:
      'A curated keepsake: silk eye mask, mini fragrance, hand-stitched journal, gold-dipped pen and a single-origin chocolate bar. In a hand-lined keepsake trunk.',
    brand: 'Reggals Atelier',
    price: 7499,
    compareAt: 8999,
    currency: 'INR',
    rating: 5.0,
    reviewCount: 24,
    hero: img('photo-1519225421980-715cb0215aed'),
    images: [
      img('photo-1519225421980-715cb0215aed'),
      img('photo-1549465220-1a8b9238cd48'),
      img('photo-1505740420928-5e560c06d30e')
    ],
    categories: ['gift-boxes', 'personalized'],
    occasions: ['wedding', 'anniversary'],
    collections: ['the-wedding-suite'],
    tags: ['limited', 'personalizable', 'handcrafted'],
    giftWrapEligible: true,
    personalizable: true,
    inStock: true,
    estimatedDelivery: '5–7 days'
  }
];

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string, limit = 4) {
  const base = findProduct(slug);
  if (!base) return [];
  return products
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const shared =
        p.categories.filter((c) => base.categories.includes(c)).length +
        p.occasions.filter((o) => base.occasions.includes(o)).length;
      return { p, shared };
    })
    .sort((a, b) => b.shared - a.shared)
    .slice(0, limit)
    .map((x) => x.p);
}

export function productsByTag(tag: Product['tags'][number]) {
  return products.filter((p) => p.tags.includes(tag));
}

export function productsByCategory(slug: string) {
  return products.filter((p) => p.categories.includes(slug));
}

export function productsByOccasion(slug: string) {
  return products.filter((p) => p.occasions.includes(slug));
}

export function productsUnder(value: number) {
  return products.filter((p) => p.price <= value);
}
