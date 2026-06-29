import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Reggals — Premium Gifting',
    short_name: 'Reggals',
    description:
      'A boutique of curated, premium gifts — quietly extraordinary, beautifully wrapped.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF7F2',
    theme_color: '#FBF8F4',
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }
    ],
    categories: ['shopping', 'lifestyle']
  };
}
