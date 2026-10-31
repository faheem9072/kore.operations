'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, ProjectCategory } from '@/types';
import { CATEGORIES, PROJECTS } from '@/data/projects';
import LightboxModal from './LightboxModal';
import { ArrowUpRight, Sparkles, Eye, Grid3X3, SlidersHorizontal } from 'lucide-react';

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
  // 'showcase' is the dual-row horizontal scrolling view (Image 3 reference); 'grid' is the full categorized catalog
  const [viewMode, setViewMode] = useState<'showcase' | 'grid'>('showcase');

  // Split projects into 2 balanced rows for the dual-row horizontal showcase
  const mid = Math.ceil(PROJECTS.length / 2);
  const row1Projects: Project[] = PROJECTS.slice(0, mid);
  const row2Projects: Project[] = PROJECTS.slice(mid).concat(
    PROJECTS.length % 2 !== 0 ? [PROJECTS[0]] : []
  );

  // All filter options for Grid mode
  const filterTabs = [
    { id: 'all', label: 'All Works' },
    ...CATEGORIES,
  ];

  // Filtered projects for Grid mode
  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const renderProjectCard = (project: Project, isGrid: boolean = false) => {
    const hasError = imageErrors[project.id];

    return (
      <div
        key={project.id}
        onClick={() => setActiveModalProject(project)}
        className={`group relative ${
          isGrid
            ? 'w-full max-w-[390px]'
            : 'w-[250px] sm:w-[340px] md:w-[390px] shrink-0'
        } aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden cursor-pointer border border-white/10 hover:border-[#2F8FFF] shadow-2xl bg-[#090e1f] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_45px_-10px_rgba(47,143,255,0.4)] select-none`}
      >
        {!hasError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => handleImageError(project.id)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0c1630] via-[#091022] to-[#050812] text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#2F8FFF]/15 border border-[#2F8FFF]/40 flex items-center justify-center mb-3">
              <Sparkles className="w-6 h-6 text-[#2F8FFF]" />
            </div>
            <span className="text-[10px] font-bold tracking-widest text-[#5eb0ff] uppercase mb-1">
              {project.categoryLabel}
            </span>
            <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
            <p className="text-xs text-slate-400 line-clamp-2">{project.description}</p>
          </div>
        )}

        {/* Category Badge Pill on Top Right */}
        <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10">
          <span className="px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-bold text-white shadow-md">
            {project.categoryLabel}
          </span>
        </div>

        {/* Ambient Hover Vignette */}
        <div className="absolute inset-0 bg-[#2F8FFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Gradient Bottom Info Bar */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-[#040711] via-[#040711]/90 to-transparent flex flex-col justify-end">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#38bdf8] uppercase mb-1 drop-shadow-sm">
            {project.client}
          </span>
          <h3 className="text-base sm:text-xl font-extrabold text-white line-clamp-1 group-hover:text-[#2F8FFF] transition-colors drop-shadow-md">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 mt-1.5 sm:mt-2 text-xs font-bold text-[#5eb0ff] opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transform sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300">
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-[#040711]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#2F8FFF]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#0284c7]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header matching Image 3 (Colour Parrot Reference) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-8 h-0.5 bg-[#38bdf8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.22em] text-[#38bdf8] uppercase">
                RECENT WORK
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
            >
              Featured <span className="text-[#2F8FFF] drop-shadow-[0_0_30px_rgba(47,143,255,0.4)]">Projects</span>
            </motion.h2>
          </div>

          {/* VIEW ALL WORK Button matching Image 3 */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            onClick={() => setViewMode(viewMode === 'showcase' ? 'grid' : 'showcase')}
            className="px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-[#2F8FFF] hover:border-[#2F8FFF] text-white text-xs font-bold tracking-widest uppercase shadow-lg shadow-black/40 hover:shadow-[0_0_25px_rgba(47,143,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 shrink-0"
          >
            {viewMode === 'showcase' ? (
              <>
                <span>VIEW ALL WORK</span>
                <Grid3X3 className="w-4 h-4 text-[#38bdf8]" />
              </>
            ) : (
              <>
                <span>FEATURED SHOWCASE</span>
                <SlidersHorizontal className="w-4 h-4 text-[#38bdf8]" />
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* MODE 1: Dual-Row Horizontal Scrolling Showcase (Matching Reference Image 3) */}
      {viewMode === 'showcase' ? (
        <div className="w-full space-y-6 sm:space-y-8 overflow-hidden select-none">
          {/* Row 1: Scrolling Leftwards */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, repIdx) => (
              <div key={repIdx} className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8">
                {row1Projects.map((project) => renderProjectCard(project))}
              </div>
            ))}
          </div>

          {/* Row 2: Scrolling Rightwards (Offset / Staggered) */}
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] -ml-24">
            {[...Array(2)].map((_, repIdx) => (
              <div key={repIdx} className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8">
                {row2Projects.map((project) => renderProjectCard(project))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* MODE 2: Full Categorized Grid Catalog with Category Filters */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-12">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectCategory(tab.id)}
                  className={`relative px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'text-white shadow-pill-active scale-105 bg-[#2F8FFF]'
                      : 'bg-[#0d1428] text-slate-300 border border-white/10 hover:border-[#2F8FFF]/50 hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid of Projects */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="w-full flex justify-center"
                >
                  {renderProjectCard(project, true)}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* Lightbox / Modal with Mobile Touch Swipe Support */}
      <LightboxModal
        project={activeModalProject}
        projectsList={PROJECTS}
        onClose={() => setActiveModalProject(null)}
        onSelectProject={(p) => setActiveModalProject(p)}
      />
    </section>
  );
}
