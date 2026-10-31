'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Layers, Cpu, Compass, Users2, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/data/projects';

export default function AboutWhyKore() {
  const reasons = [
    {
      icon: <Layers className="w-6 h-6 text-[#2F8FFF]" />,
      title: 'One Partner. Multiple Solutions.',
      desc: 'No more coordinating between separate freelancers for websites, logo designs, poster ads, and packaging. KORE centralizes your complete digital footprint.',
    },
    {
      icon: <Compass className="w-6 h-6 text-[#2F8FFF]" />,
      title: 'Strategic Market Insight',
      desc: 'Deep regional and global market insight, paired with compelling typography, high-impact branding, and cultural resonance that builds lasting trust.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#2F8FFF]" />,
      title: 'Cutting-Edge Modern Tech',
      desc: 'Fast-loading Next.js architecture, clean Tailwind styling, 60fps animations, mobile-first responsiveness, and search engine optimization built right in.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#2F8FFF]" />,
      title: 'Rapid & Transparent Delivery',
      desc: 'Agile sprints with clear milestones and continuous updates so your business launches on time without unforeseen delays or hidden expenses.',
    },
  ];

  const steps = [
    { num: '01', title: 'Consult & Audit', desc: 'Understanding your operations and business goals.' },
    { num: '02', title: 'Brand & Architecture', desc: 'Crafting the design system, wireframes, and messaging.' },
    { num: '03', title: 'Sprint Execution', desc: 'Building responsive web, creatives, and packaging assets.' },
    { num: '04', title: 'Launch & Optimize', desc: 'Delivering production-ready assets with ongoing support.' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070b18] dark:bg-[#070b18] light:bg-slate-50/70 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e162d] border border-[#2F8FFF]/30 text-xs font-bold text-[#5eb0ff] uppercase tracking-wider mb-4"
          >
            <span>Why Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white dark:text-white light:text-slate-900 leading-tight mb-4"
          >
            Operations, Simplified.{' '}
            <span className="text-[#2F8FFF]">Results, Amplified.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Here is why businesses across Kerala choose KORE as their primary creative and digital execution partner.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-[#0c1224] dark:bg-[#0c1224] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-[#2F8FFF]/50 hover-card-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#121c38] dark:bg-[#121c38] light:bg-blue-50 border border-[#2F8FFF]/30 flex items-center justify-center mb-5">
                {r.icon}
              </div>
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                {r.title}
              </h3>
              <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Bar / Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-[#090f20] dark:bg-[#090f20] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#5eb0ff] uppercase tracking-widest">
              Our Seamless Workflow
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-slate-900 mt-1">
              From Concept to Completion
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="relative p-5 rounded-2xl bg-[#0d1428] dark:bg-[#0d1428] light:bg-white border border-white/5 dark:border-white/5 light:border-slate-200"
              >
                <div className="text-2xl font-black text-[#2F8FFF] mb-2">{s.num}</div>
                <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 mb-1">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

