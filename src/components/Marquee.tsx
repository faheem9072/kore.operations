'use client';

import React from 'react';

const marqueeItems = [
  'AGENTIC AI WORKFLOWS',
  'CUSTOM MCP SERVERS',
  'AI AUTOMATION',
  'BRAND IDENTITY',
  'NEXT.JS WEB APPS & ERP',
  'AUTONOMOUS TASK PIPELINES',
  'SOCIAL MEDIA CREATIVES',
  'ENTERPRISE CLOUD ARCHITECTURE',
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden py-5 sm:py-6 border-y border-white/10 bg-[#03060f] select-none">
      {/* Side Vignette Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#040711] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#040711] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Render twice for seamless continuous loop */}
        {[...Array(2)].map((_, listIndex) => (
          <div key={listIndex} className="flex items-center gap-10 sm:gap-14 shrink-0 pr-10 sm:pr-14">
            {marqueeItems.map((item, index) => (
              <div key={`${listIndex}-${index}`} className="flex items-center gap-10 sm:gap-14">
                <span className="w-2.5 h-2.5 bg-white/70 rounded-[2px]" />
                <span className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-white/90 hover:text-[#2F8FFF] transition-colors whitespace-nowrap uppercase">
                  {item}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
