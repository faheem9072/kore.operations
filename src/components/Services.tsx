'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCategory } from '@/types';
import { SERVICES } from '@/data/projects';
import { Globe, Sparkles, Share2, Package, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectCategory: (category: ProjectCategory) => void;
}

export default function Services({ onSelectCategory }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#2F8FFF]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#2F8FFF]" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-[#2F8FFF]" />;
      case 'Package':
        return <Package className="w-6 h-6 text-[#2F8FFF]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#2F8FFF]" />;
    }
  };

  const handleServiceClick = (category: ProjectCategory) => {
    onSelectCategory(category);
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#070b17] dark:bg-[#070b17] light:bg-slate-50/50">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F8FFF]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e172e] border border-[#2F8FFF]/30 text-xs font-bold text-[#5eb0ff] uppercase tracking-wider mb-4"
          >
            <span>What We Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white dark:text-white light:text-slate-900 leading-tight mb-4"
          >
            Engineered For Impact.{' '}
            <span className="text-[#2F8FFF]">Built For Results.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Click any service card below to instantly view corresponding live client projects and case studies.
          </motion.p>
        </div>

        {/* 4 Big Clickable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleServiceClick(service.id)}
              className="group relative cursor-pointer rounded-3xl p-7 sm:p-9 bg-[#0c1224] dark:bg-[#0c1224] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-[#2F8FFF]/60 hover-card-glow transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner Ambient Glow on Card Hover */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#2F8FFF]/10 rounded-full blur-2xl group-hover:bg-[#2F8FFF]/20 transition-all pointer-events-none" />

              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#121c38] dark:bg-[#121c38] light:bg-blue-50 border border-[#2F8FFF]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2F8FFF] transition-all duration-300">
                    <div className="group-hover:text-white transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-600 group-hover:border-[#2F8FFF]/40 group-hover:text-[#5eb0ff] transition-colors">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 group-hover:text-[#2F8FFF] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5eb0ff] mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {service.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#2F8FFF]/20 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#2F8FFF]" />
                      </div>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Trigger Banner */}
              <div className="pt-4 border-t border-white/5 dark:border-white/5 light:border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-[#2F8FFF] transition-colors">
                <span className="tracking-wide">Explore {service.title} Projects</span>
                <div className="w-8 h-8 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 flex items-center justify-center group-hover:bg-[#2F8FFF] group-hover:text-white transition-all transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

