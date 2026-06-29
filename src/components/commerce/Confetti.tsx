'use client';

import { useEffect, useState } from 'react';

const COLORS = ['#B76E79', '#C9A66B', '#F6E1DE', '#9A5560', '#E6D2A8'];

type Piece = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotate: number;
  size: number;
  color: string;
};

export function Confetti({ pieces = 60 }: { pieces?: number }) {
  const [items, setItems] = useState<Piece[]>([]);

  useEffect(() => {
    const next: Piece[] = Array.from({ length: pieces }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 3 + Math.random() * 3,
      rotate: Math.random() * 720 - 360,
      size: 6 + Math.random() * 8,
      color: COLORS[i % COLORS.length]
    }));
    setItems(next);
  }, [pieces]);

  if (items.length === 0) return null;

  return (
    <>
      <style>{`
        @keyframes reggalsFall {
          0%   { transform: translate3d(0,-10vh,0) rotate(0deg);   opacity: 0; }
          15%  { opacity: 1; }
          100% { transform: translate3d(var(--drift,0),110vh,0) rotate(var(--r,360deg)); opacity: 0.9; }
        }
      `}</style>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      >
        {items.map((p) => (
          <span
            key={p.id}
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size * 1.4}px`,
              background: p.color,
              animation: `reggalsFall ${p.duration}s cubic-bezier(0.22, 1, 0.36, 1) ${p.delay}s forwards`,
              ['--r' as any]: `${p.rotate}deg`,
              ['--drift' as any]: `${(Math.random() - 0.5) * 40}vw`
            }}
            className="absolute top-0 rounded-[2px] shadow-soft"
          />
        ))}
      </div>
    </>
  );
}
