'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { COMPANY_INFO } from '@/data/projects';

export default function WhoWeAre() {
  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-[#2F8FFF]" />,
      title: 'Fast Execution',
      desc: 'Rapid turnaround with zero compromise on precision.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#2F8FFF]" />,
      title: 'Reliable Support',
      desc: 'Local presence in Chelembra with dedicated direct support.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#2F8FFF]" />,
      title: 'Growth-Focused',
      desc: 'Every design and code line is engineered to generate business ROI.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Subtle Flare */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#2F8FFF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e162d] border border-[#2F8FFF]/30 text-xs font-bold text-[#5eb0ff] uppercase tracking-wider">
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15]">
              Simplifying Business Operations,{' '}
              <span className="text-[#2F8FFF]">Amplifying Brand Value.</span>
            </h2>

            <p className="text-base sm:text-lg font-medium text-[#5eb0ff]">
              Delivering world-class digital craft &amp; operational excellence.
            </p>

            <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg leading-relaxed">
              Based in <strong>Chelembra, Malappuram</strong>, <strong className="text-white dark:text-white light:text-slate-900">KORE</strong> is your comprehensive business &amp; digital solutions partner. We bridge the gap between ambitious Kerala entrepreneurs and world-class design, modern web infrastructure, and operational efficiency.
            </p>

            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              Instead of juggling multiple freelancers for websites, logo branding, social media posts, and product packaging, KORE provides a unified ecosystem: <em className="text-slate-200 dark:text-slate-200 light:text-slate-800 not-italic font-semibold">&ldquo;One Partner. Multiple Solutions.&rdquo;</em> We handle the digital execution so you can focus on expanding your business.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#0c1224] dark:bg-[#0c1224] light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200"
                >
                  <div className="mb-2">{h.icon}</div>
                  <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 mb-1">
                    {h.title}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-normal">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Brand & Operational Hub Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative p-8 sm:p-9 rounded-3xl bg-[#0d1428] border border-white/10 shadow-2xl shadow-black/60 overflow-hidden">
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#2F8FFF]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/logo.png"
                  alt="KORE"
                  className="h-10 w-auto object-contain"
                />
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2F8FFF]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F8FFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Full-Stack Digital Execution</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Web apps, cloud portals, brand identities, and high-conversion ad creatives under one roof.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2F8FFF]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F8FFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Client Partnership</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Zero middlemen and no fragmented freelancer friction. Fast, accountable sprints from start to finish.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2F8FFF]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F8FFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Modern Enterprise Tech</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Engineered with high-speed Next.js, responsive Tailwind systems, and cloud databases.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="text-slate-400">
                  Headquarters: <span className="text-white font-semibold">Chelembra, Malappuram</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#2F8FFF]/15 border border-[#2F8FFF]/30 text-[#38bdf8] font-bold text-[11px]">
                  Verified Studio
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

