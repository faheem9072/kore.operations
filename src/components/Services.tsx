'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCategory } from '@/types';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectCategory: (category: ProjectCategory) => void;
}

interface ServiceTab {
  key: string;
  category: ProjectCategory;
  num: string;
  title: string;
  subtitle: string;
  color: string;
  deliverables: string[];
}

export default function Services({ onSelectCategory }: ServicesProps) {
  // Default active service
  const [activeServiceKey, setActiveServiceKey] = useState<string>('agentic');

  const servicesData: ServiceTab[] = [
    {
      key: 'agentic',
      category: 'web',
      num: '01',
      title: 'AGENTIC AI & MCP',
      subtitle: 'Autonomous Workflows & Custom MCP Servers',
      color: '#2F8FFF',
      deliverables: [
        'Agentic AI Workflows',
        'Custom Model Context Protocol (MCP) Servers',
        'Autonomous Task Pipelines',
        'Enterprise Tool-Calling APIs',
      ],
    },
    {
      key: 'digital-marketing',
      category: 'social',
      num: '02',
      title: 'DIGITAL MARKETING',
      subtitle: 'Growth Campaigns, Meta Ads & Performance Marketing',
      color: '#38bdf8',
      deliverables: [
        'Meta & Google Ad Campaigns',
        'Social Media Growth Strategy',
        'High-Converting Ad Creatives',
        'Conversion Rate Optimization (CRO)',
      ],
    },
    {
      key: 'videography',
      category: 'social',
      num: '03',
      title: 'VIDEOGRAPHY & PRODUCTION',
      subtitle: 'Commercial Ad Films, Brand Stories & Reels',
      color: '#60a5fa',
      deliverables: [
        'Commercial Ad Films & Shoots',
        'Product & Corporate Videography',
        'High-Impact Social Media Reels',
        'Color Grading & Audio Post-Production',
      ],
    },
    {
      key: 'consultancy',
      category: 'web',
      num: '04',
      title: 'BUSINESS CONSULTANCY',
      subtitle: 'Operations Audits, Digital Strategy & Scaling',
      color: '#818cf8',
      deliverables: [
        'Operations Sprints & Audits',
        'Workflow Optimization & Automation',
        'Tech Stack & Cloud Advisory',
        'Go-to-Market Growth Strategy',
      ],
    },
    {
      key: 'web',
      category: 'web',
      num: '05',
      title: 'WEB APPS & ERP',
      subtitle: 'Custom Next.js Systems & Cloud Portals',
      color: '#bae6fd',
      deliverables: [
        'Academic & Business ERPs',
        'Live Fleet Web Apps',
        'E-Commerce Portals',
        'Responsive UI/UX Systems',
      ],
    },
    {
      key: 'design',
      category: 'design',
      num: '06',
      title: 'BRAND IDENTITY',
      subtitle: 'Logo Systems & Visual Strategy',
      color: '#c7d2fe',
      deliverables: [
        'Logo & Monogram Design',
        'Brand Guidelines & Books',
        'Corporate Stationery',
        'Typography Systems',
      ],
    },
  ];

  const handleRowClick = (key: string) => {
    setActiveServiceKey(key);
  };

  const handleNavigateToWork = (cat: ProjectCategory) => {
    onSelectCategory(cat);
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#040711]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2F8FFF]/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-left max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="w-8 h-0.5 bg-[#38bdf8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.22em] text-[#38bdf8] uppercase">
              OUR EXPERTISE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
          >
            What <span className="text-[#2F8FFF] drop-shadow-[0_0_30px_rgba(47,143,255,0.4)]">We Do</span>
          </motion.h2>
        </div>
      </div>

      {/* Interactive Expandable Banner Rows */}
      <div className="w-full space-y-4">
        {servicesData.map((service) => {
          const isActive = activeServiceKey === service.key;

          return (
            <div key={service.key} className="w-full">
              {isActive ? (
                /* ACTIVE STATE: High-Voltage Electric Blue Banner Band */
                <motion.div
                  layout
                  initial={{ opacity: 0, scaleY: 0.8 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavigateToWork(service.category)}
                  className="relative w-full py-5 sm:py-7 bg-gradient-to-r from-[#1772f4] via-[#2F8FFF] to-[#0ea5e9] shadow-[0_10px_40px_-5px_rgba(47,143,255,0.5)] cursor-pointer overflow-hidden select-none group"
                >
                  {/* Subtle Shimmer Overlay on Banner */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Clean Continuous Typography Ticker */}
                  <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                    {[...Array(4)].map((_, repIdx) => (
                      <div
                        key={repIdx}
                        className="flex items-center gap-8 sm:gap-14 shrink-0 pr-8 sm:pr-14"
                      >
                        {/* Title text in Bold Black/Dark Navy */}
                        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#060b18] tracking-tight">
                          {service.title}
                        </span>

                        {/* Bullet Dot Separator */}
                        <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#060b18] rounded-full shrink-0" />

                        {/* Subtitle text */}
                        <span className="text-xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#060b18]/75 tracking-wide">
                          {service.subtitle}
                        </span>

                        {/* Diamond Separator */}
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#060b18]/50 rotate-45 shrink-0" />
                      </div>
                    ))}
                  </div>

                  {/* Floating Click Cue Pill on Top-Right for Desktop */}
                  <div className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 items-center gap-2 px-4 py-2 rounded-full bg-[#060b18] text-white text-xs font-bold shadow-xl border border-white/20 z-10">
                    <span>View Projects</span>
                    <ArrowUpRight className="w-4 h-4 text-[#38bdf8]" />
                  </div>
                </motion.div>
              ) : (
                /* INACTIVE STATE: Numbered Bold Outline Typography (Click to Expand) */
                <motion.div
                  layout
                  onClick={() => handleRowClick(service.key)}
                  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 border-b border-white/10 hover:border-white/25 cursor-pointer transition-all duration-300 group flex items-center justify-between"
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span
                      className="text-sm sm:text-base font-mono font-black"
                      style={{ color: service.color }}
                    >
                      {service.num}
                    </span>
                    <h3
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight transition-all duration-300 group-hover:translate-x-2"
                      style={{ color: service.color }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div className="hidden md:flex items-center gap-3">
                    <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                      {service.subtitle}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#2F8FFF] group-hover:bg-[#2F8FFF]/15 flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Deliverables Cards for the Currently Active Service */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {servicesData
          .filter((s) => s.key === activeServiceKey)
          .map((activeItem) => (
            <motion.div
              key={activeItem.key}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#070e20] border border-white/10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#38bdf8] uppercase">
                  DELIVERABLES &amp; CAPABILITIES
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1 mb-3">
                  {activeItem.subtitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeItem.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNavigateToWork(activeItem.category)}
                className="w-full md:w-auto px-6 py-3.5 rounded-full bg-[#2F8FFF] hover:bg-[#1a77ea] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#2F8FFF]/30 flex items-center justify-center gap-2 shrink-0 transition-all hover:scale-105"
              >
                <span>View {activeItem.title} Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
