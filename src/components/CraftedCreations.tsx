'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, ProjectCategory } from '@/types';
import { CATEGORIES, PROJECTS } from '@/data/projects';
import LightboxModal from './LightboxModal';
import { ArrowUpRight, Sparkles, Eye } from 'lucide-react';

interface CraftedCreationsProps {
  selectedCategory: string; // 'all' | 'web' | 'design' | 'social' | 'packaging'
  onSelectCategory: (category: string) => void;
}

export default function CraftedCreations({
  selectedCategory,
  onSelectCategory,
}: CraftedCreationsProps) {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // All filter options (All + the 4 specific categories from reference)
  const filterTabs = [
    { id: 'all', label: 'All Works' },
    ...CATEGORIES,
  ];

  // Filtered projects
  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-[#060913]">
      {/* Background Subtle Ambient Light */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#2F8FFF]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#1a5dbf]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Matching Reference */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white dark:text-white light:text-slate-900 mb-3">
              Crafted Creations
            </h2>
            {/* Signature Short Blue Horizontal Bar Accent (Exact reference match) */}
            <div className="w-12 h-1.5 rounded-full bg-[#2F8FFF] shadow-md shadow-[#2F8FFF]/50" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl"
          >
            A curated showcase of digital platforms, visual identities, campaigns, and packaging designed with precision.
          </motion.p>

          {/* Filter Pills Group (Pill-shaped, animated switching like reference) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-8 max-w-3xl"
          >
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectCategory(tab.id)}
                  className={`relative px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'text-white shadow-pill-active scale-105'
                      : 'bg-[#0d1428] dark:bg-[#0d1428] light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-[#2F8FFF]/50 hover:text-white dark:hover:text-white'
                  }`}
                >
                  {/* Active pill background slider animation */}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#2F8FFF] rounded-full -z-10 shadow-lg shadow-[#2F8FFF]/40"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Portfolio Cards Grid with Reflow & Staggered 400ms Transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const hasError = imageErrors[project.id];

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.96 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => setActiveModalProject(project)}
                  className="group relative cursor-pointer rounded-3xl overflow-hidden bg-[#0c1224] dark:bg-[#0c1224] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-[#2F8FFF]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(47,143,255,0.3)] flex flex-col"
                >
                  {/* Media Showcase Area */}
                  <div className="relative w-full aspect-[16/10] bg-[#070c1a] overflow-hidden flex items-center justify-center">
                    {!hasError ? (
                      project.aspect === 'portrait' ? (
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#090e1f] to-[#04060c]">
                          {/* Ambient soft glow backdrop */}
                          <img
                            src={project.image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-125 pointer-events-none"
                          />
                          {/* Device preview */}
                          <div className="relative z-10 h-[92%] my-auto py-2 flex items-center justify-center">
                            <img
                              src={project.image}
                              alt={project.title}
                              onError={() => handleImageError(project.id)}
                              className="h-full w-auto max-w-[85%] object-contain rounded-2xl shadow-2xl border border-white/20 group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      )
                    ) : (
                      // Interactive Vector Card Fallback
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0c1630] via-[#091022] to-[#050812] text-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#2F8FFF]/15 border border-[#2F8FFF]/40 flex items-center justify-center mb-3">
                          <Sparkles className="w-6 h-6 text-[#2F8FFF]" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-[#5eb0ff] uppercase mb-1">
                          {project.categoryLabel}
                        </span>
                        <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                        <p className="text-xs text-slate-400 max-w-sm line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    )}

                    {/* Hover Overlay with Eye / Expand Cue */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <div className="px-4 py-2 rounded-full bg-[#2F8FFF] text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-[#2F8FFF]/40 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-4 h-4" />
                        <span>View Project Details</span>
                      </div>
                    </div>

                    {/* Category Badge Pill on Top Right */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white shadow-sm">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Card Description & Meta Info */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-[#2F8FFF] transition-colors">
                          {project.title}
                        </h3>
                        <div className="w-8 h-8 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 flex items-center justify-center group-hover:bg-[#2F8FFF] group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                          <ArrowUpRight className="w-4 h-4 text-slate-300 dark:text-slate-300 light:text-slate-600 group-hover:text-white" />
                        </div>
                      </div>

                      {/* Malayalam snippet */}
                      {project.descriptionMl && (
                        <p className="font-malayalam text-xs sm:text-sm text-[#5eb0ff] font-medium mb-2 line-clamp-1">
                          {project.descriptionMl}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-2 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5 dark:border-white/5 light:border-slate-100">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-white/5 dark:bg-white/5 light:bg-slate-100 text-[11px] font-medium text-slate-300 dark:text-slate-300 light:text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] text-slate-500 font-medium">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal with Mobile Touch Swipe Support */}
      <LightboxModal
        project={activeModalProject}
        projectsList={filteredProjects}
        onClose={() => setActiveModalProject(null)}
        onSelectProject={(p) => setActiveModalProject(p)}
      />
    </section>
  );
}

