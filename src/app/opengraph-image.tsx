import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Reggals — Premium gifting, quietly extraordinary.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(135deg, #FBF8F4 0%, #F6E1DE 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          fontFamily: 'serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: '#9A5560',
            fontSize: 22,
            letterSpacing: 8,
            textTransform: 'uppercase'
          }}
        >
          Reggals · est. 2026
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              color: '#1F1A17',
              fontSize: 110,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000
            }}
          >
            Gifts that feel
            <br />
            <span style={{ color: '#9A5560', fontStyle: 'italic' }}>
              quietly extraordinary.
            </span>
          </div>
          <div style={{ color: '#4A423D', fontSize: 28, maxWidth: 900 }}>
            A boutique of curated, premium gifting — beautifully wrapped, delivered with care.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#6B625C',
            fontSize: 20,
            letterSpacing: 6,
            textTransform: 'uppercase'
          }}
        >
          <span>reggals.in</span>
          <span>Jewelry · Perfumes · Beauty · Self-Care · Flowers</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
