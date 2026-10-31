'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '@/data/projects';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#2F8FFF]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#1a5cb8]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle Background Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {/* Main Positioning Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d1428] dark:bg-[#0d1428] light:bg-slate-100 border border-[#2F8FFF]/30 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 shadow-sm shadow-[#2F8FFF]/10">
            <span className="w-2 h-2 rounded-full bg-[#2F8FFF] animate-pulse" />
            <span className="text-[#2F8FFF] font-bold">KORE</span>
            <span className="text-slate-400">•</span>
            <span>{COMPANY_INFO.positioning}</span>
          </div>

          {/* Malayalam Location Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-600 font-malayalam">
            <MapPin className="w-3 h-3 text-[#2F8FFF]" />
            <span>ചേളമ്പ്ര, മലപ്പുറം</span>
          </div>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] mb-6 uppercase"
        >
          <span className="text-white dark:text-white light:text-slate-900 block drop-shadow-sm">
            BUSINESS, SIMPLIFIED.
          </span>
          <span className="bg-gradient-to-r from-[#2F8FFF] via-[#5eb0ff] to-[#2F8FFF] bg-clip-text text-transparent block mt-1">
            BRANDS, DEFINED.
          </span>
        </motion.h1>

        {/* Malayalam Accent Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-sm sm:text-base font-malayalam font-medium text-[#5eb0ff]/90 mb-4 tracking-wide"
        >
          നിങ്ങളുടെ ബിസിനസ്സിന് ഏറ്റവും മികച്ച ക്രിയേറ്റീവ് &amp; ഡിജിറ്റൽ പരിഹാരങ്ങൾ
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 font-normal leading-relaxed mb-10"
        >
          Kerala&apos;s creative and digital solutions partner for branding, design, websites, social media and automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* Explore Our Work (Blue Filled) */}
          <button
            onClick={() => scrollTo('work')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2F8FFF] hover:bg-[#1a77ea] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#2F8FFF]/30 hover:shadow-xl hover:shadow-[#2F8FFF]/45 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Hire Us (Dark Outlined) */}
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0a0f1e]/80 dark:bg-[#0a0f1e]/80 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 font-bold text-sm tracking-wide border border-white/20 dark:border-white/20 light:border-slate-300 hover:border-[#2F8FFF]/80 hover:bg-[#0f172a] dark:hover:bg-[#0f172a] light:hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#2F8FFF]" />
            <span>Hire Us</span>
          </button>
        </motion.div>

        {/* Bottom subtle scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white transition-colors"
          onClick={() => scrollTo('services')}
        >
          <span className="text-[11px] uppercase tracking-widest font-semibold">Discover KORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
