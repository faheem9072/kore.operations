'use client';

import React from 'react';

const marqueeItems = [
  'BRANDING',
  'WEB DESIGN',
  'UI/UX',
  'SOCIAL MEDIA',
  'PACKAGING',
  'AI AUTOMATION',
  'OPERATIONS',
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-white/10 dark:border-white/10 light:border-slate-200 bg-[#070b16] dark:bg-[#070b16] light:bg-slate-50/70 select-none">
      {/* Side Vignette Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#060913] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#060913] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Render twice for seamless continuous scroll */}
        {[...Array(2)].map((_, listIndex) => (
          <div key={listIndex} className="flex items-center gap-8 shrink-0 pr-8">
            {marqueeItems.map((item, index) => (
              <div key={`${listIndex}-${index}`} className="flex items-center gap-8">
                <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-[#2F8FFF] transition-colors whitespace-nowrap">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F8FFF]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

