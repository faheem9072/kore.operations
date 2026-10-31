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

            {/* Malayalam Accent Line */}
            <p className="text-base sm:text-lg font-malayalam font-medium text-[#5eb0ff]/90">
              ചേളമ്പ്രയിൽ നിന്ന് ലോകോത്തര നിലവാരത്തിലുള്ള ഡിജിറ്റൽ സേവനങ്ങൾ.
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

          {/* Right Column: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#0d1428] dark:bg-[#0d1428] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-[#2F8FFF]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2F8FFF]/15 overflow-hidden"
              >
                {/* Glow highlight on card hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#2F8FFF]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white dark:text-white light:text-slate-900 group-hover:text-[#2F8FFF] transition-colors mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 tracking-wide">
                  {stat.label}
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#5eb0ff] font-medium">
                  <CheckCircle2 className="w-3 h-3 text-[#2F8FFF]" />
                  <span>Verified Benchmark</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

