'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Bot, TrendingUp, Compass } from 'lucide-react';

export default function WhoWeAre() {
  const highlights = [
    {
      icon: <Bot className="w-5 h-5 text-[#2F8FFF]" />,
      title: 'Agentic AI & MCP',
      desc: 'Autonomous multi-agent workflows and custom MCP servers for enterprise automation.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#2F8FFF]" />,
      title: 'Digital Marketing',
      desc: 'High-conversion Meta & Google ad campaigns, creative posters, and growth funnels.',
    },
    {
      icon: <Compass className="w-5 h-5 text-[#2F8FFF]" />,
      title: 'Business Consultancy',
      desc: 'Operations audits, digital transformation roadmaps, and scalable tech advisory.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Subtle Flare */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#2F8FFF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Positioning */}
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

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
              Digital Marketing, Business Consultancy &amp;{' '}
              <span className="text-[#2F8FFF]">Agentic AI.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Based in <strong>Chelembra, Kerala</strong>, <strong>KORE</strong> helps businesses scale through high-conversion digital marketing, strategic business consultancy, autonomous agentic workflows, custom MCP servers, and modern web platforms.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#0c1224] border border-white/5 hover:border-[#2F8FFF]/30 transition-all"
                >
                  <div className="mb-2">{h.icon}</div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {h.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Operational Architecture Card */}
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
                    <h4 className="text-sm font-bold text-white">Digital Marketing &amp; Growth Campaigns</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Performance Meta &amp; Google ad campaigns, high-impact creatives, and conversion funnels.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2F8FFF]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F8FFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Business Consultancy &amp; Strategy</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Operational audits, digital transformation roadmaps, tech stack selection, and scaling advisory.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2F8FFF]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F8FFF]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Agentic AI &amp; Web Platforms</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Self-operating agent workflows, custom MCP servers, and fast Next.js applications.</p>
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