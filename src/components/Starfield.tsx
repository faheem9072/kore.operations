'use client';

import React, { useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function Starfield() {
  // Precompute deterministic stars to avoid SSR hydration mismatches
  const stars: Star[] = useMemo(() => {
    const list: Star[] = [];
    const count = 75;
    // Simple pseudo-random generator
    let seed = 42;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let i = 0; i < count; i++) {
      list.push({
        id: i,
        x: Math.round(random() * 1000) / 10, // 0 - 100%
        y: Math.round(random() * 1000) / 10, // 0 - 100%
        size: random() > 0.85 ? 2.5 : random() > 0.5 ? 1.5 : 1, // 1px - 2.5px
        opacity: Math.round((random() * 0.5 + 0.2) * 100) / 100, // 0.2 - 0.7
        duration: Math.round((random() * 3 + 2.5) * 10) / 10, // 2.5s - 5.5s
        delay: Math.round((random() * 4) * 10) / 10, // 0s - 4s
      });
    }
    return list;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            boxShadow: star.size > 1.5 ? '0 0 6px 1px rgba(56, 189, 248, 0.6)' : 'none',
          }}
        />
      ))}
    </div>
  );
}

