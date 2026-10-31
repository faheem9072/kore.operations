'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Starfield from './Starfield';
import { ProjectCategory } from '@/types';

interface HeroProps {
  onSelectCategory?: (category: ProjectCategory) => void;
}

export default function Hero({ onSelectCategory }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const servicePills = [
    { label: 'AGENTIC WORKFLOWS', category: 'web' as ProjectCategory, dotColor: '#2F8FFF' },
    { label: 'VIDEOGRAPHY & PRODUCTION', category: 'social' as ProjectCategory, dotColor: '#38bdf8' },
    { label: 'DIGITAL MARKETING', category: 'social' as ProjectCategory, dotColor: '#60a5fa' },
    { label: 'BUSINESS CONSULTANCY', category: 'web' as ProjectCategory, dotColor: '#818cf8' },
    { label: 'CUSTOM MCP SERVERS', category: 'web' as ProjectCategory, dotColor: '#bae6fd' },
    { label: 'WEB APPS & ERP', category: 'web' as ProjectCategory, dotColor: '#38bdf8' },
    { label: 'BRAND IDENTITY', category: 'design' as ProjectCategory, dotColor: '#a5b4fc' },
  ];

  const handlePillClick = (cat: ProjectCategory) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    scrollTo('work');
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#040711]"
    >
      {/* 1. Deep Space Twinkling Starfield Background */}
      <Starfield />

      {/* 2. Soft Ambient Cosmic Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2F8FFF]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#0284c7]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Big Editorial Multicolored Headline & CTAs */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-7">
            {/* Massive Stylized Headline matching Reference */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1 sm:space-y-2 select-none"
            >
              {/* Line 1: Building Brands */}
              <div className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.2rem] font-bold tracking-tight leading-[1.04]">
                <span className="text-[#2F8FFF] drop-shadow-[0_0_35px_rgba(47,143,255,0.45)]">
                  Building
                </span>{' '}
                <span className="text-white">Brands</span>
              </div>

              {/* Line 2: That Shape */}
              <div className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.2rem] font-bold tracking-tight leading-[1.04]">
                <span className="text-[#38bdf8] drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                  That
                </span>{' '}
                <span className="text-[#818cf8] drop-shadow-[0_0_30px_rgba(129,140,248,0.35)]">
                  Shape
                </span>
              </div>

              {/* Line 3: Perception */}
              <div className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.2rem] font-bold tracking-tight leading-[1.04]">
                <span className="text-[#60a5fa] drop-shadow-[0_0_35px_rgba(96,165,250,0.4)]">
                  Perception
                </span>
              </div>
            </motion.div>

            {/* Sub-line with Dash: CHELEMBRA • KERALA • EST. 2024 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-2.5 sm:gap-3 pt-1"
            >
              <div className="w-8 sm:w-10 h-0.5 bg-[#38bdf8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span className="text-[11px] sm:text-sm font-mono font-bold tracking-[0.16em] sm:tracking-[0.25em] text-[#38bdf8] uppercase">
                CHELEMBRA • KERALA • EST. 2024
              </span>
            </motion.div>

            {/* Paragraph Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-xl text-sm sm:text-base text-slate-300 font-normal leading-relaxed"
            >
              We combine agentic AI workflows, commercial videography, digital marketing, business consultancy, and modern web platforms to scale operations.
            </motion.p>

            {/* CTA Pill Buttons matching Reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
            >
              {/* START A PROJECT */}
              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-[#2F8FFF] hover:border-[#2F8FFF] text-white text-xs font-bold tracking-widest uppercase shadow-lg shadow-black/40 hover:shadow-[0_0_25px_rgba(47,143,255,0.45)] hover:-translate-y-0.5 transition-all duration-300"
              >
                START A PROJECT
              </button>

              {/* OUR SERVICES */}
              <button
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full border border-white/15 bg-transparent hover:border-[#38bdf8] hover:text-[#38bdf8] text-slate-300 text-xs font-bold tracking-widest uppercase hover:-translate-y-0.5 transition-all duration-300"
              >
                OUR SERVICES
              </button>
            </motion.div>
          </div>

          {/* Right Column: Category Badges - Responsive flex wrap on mobile, vertical stack on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 flex flex-wrap lg:flex-col items-center justify-start lg:items-end gap-2.5 sm:gap-3.5 pt-4 lg:pt-0"
          >
            {servicePills.map((pill, idx) => (
              <button
                key={idx}
                onClick={() => handlePillClick(pill.category)}
                className="group w-auto flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 hover:border-[#2F8FFF] bg-[#070e1e]/60 hover:bg-[#0c1833] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(47,143,255,0.3)] hover:scale-105"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-150"
                  style={{
                    backgroundColor: pill.dotColor,
                    boxShadow: `0 0 8px ${pill.dotColor}`,
                  }}
                />
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.18em] text-slate-300 group-hover:text-white transition-colors">
                  {pill.label}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
