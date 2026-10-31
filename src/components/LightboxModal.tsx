'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { X, ExternalLink, ChevronLeft, ChevronRight, Calendar, User, Tag } from 'lucide-react';

interface LightboxModalProps {
  project: Project | null;
  projectsList: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export default function LightboxModal({
  project,
  projectsList,
  onClose,
  onSelectProject,
}: LightboxModalProps) {
  const [imageError, setImageError] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  // Close on Escape & handle keyboard arrows
  useEffect(() => {
    if (!project) return;
    setImageError(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, projectsList]);

  if (!project) return null;

  const currentIndex = projectsList.findIndex((p) => p.id === project.id);
  const hasMultiple = projectsList.length > 1;

  const handleNext = () => {
    if (!hasMultiple) return;
    const nextIdx = (currentIndex + 1) % projectsList.length;
    onSelectProject(projectsList[nextIdx]);
  };

  const handlePrev = () => {
    if (!hasMultiple) return;
    const prevIdx = (currentIndex - 1 + projectsList.length) % projectsList.length;
    onSelectProject(projectsList[prevIdx]);
  };

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Horizontal swipe threshold: 50px
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext(); // swipe left -> next
      } else {
        handlePrev(); // swipe right -> prev
      }
    }

    // Vertical swipe down threshold to close: 80px
    if (diffY < -80 && Math.abs(diffX) < 60) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-4xl bg-[#0b1122] dark:bg-[#0b1122] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto"
        >
          {/* Top Control Bar */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Arrows for Desktop */}
          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous project"
                className="hidden md:flex absolute left-4 top-1/3 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 items-center justify-center transition-all hover:scale-110 focus:outline-none shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next project"
                className="hidden md:flex absolute right-4 top-1/3 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 items-center justify-center transition-all hover:scale-110 focus:outline-none shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Main Visual Display */}
          <div className="relative w-full aspect-video bg-[#060a16] overflow-hidden flex items-center justify-center">
            {!imageError ? (
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              // Fallback Artwork
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0c142b] to-[#060913] text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#2F8FFF]/15 border border-[#2F8FFF]/40 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#2F8FFF]">K</span>
                </div>
                <span className="text-xs font-bold tracking-widest text-[#2F8FFF] uppercase mb-2">
                  {project.categoryLabel}
                </span>
                <h3 className="text-2xl font-extrabold text-white mb-2">{project.title}</h3>
                <p className="text-xs text-slate-400 max-w-md">{project.description}</p>
              </div>
            )}

            {/* Gradient bottom shadow inside media */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1122] to-transparent pointer-events-none" />
          </div>

          {/* Project Details Sheet */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#2F8FFF]/15 border border-[#2F8FFF]/40 text-xs font-bold text-[#5eb0ff] uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
                {project.client && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    {project.client}
                  </span>
                )}
                {project.year && (
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {project.year}
                  </span>
                )}
              </div>

              {hasMultiple && (
                <span className="text-xs text-slate-400 font-medium">
                  {currentIndex + 1} of {projectsList.length}
                </span>
              )}
            </div>

            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 mb-3">
              {project.title}
            </h2>

            {/* Malayalam description highlight */}
            {project.descriptionMl && (
              <p className="font-malayalam text-sm sm:text-base text-[#5eb0ff] font-medium mb-3 leading-relaxed">
                {project.descriptionMl}
              </p>
            )}

            {/* English description */}
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tags list */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Tag className="w-3.5 h-3.5 text-slate-500 mr-1" />
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200">
              <span className="text-[11px] text-slate-400 italic sm:block hidden">
                Tip: Use left/right arrow keys or swipe on mobile to navigate.
              </span>

              <div className="flex items-center gap-3 ml-auto">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  Close
                </button>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2F8FFF] hover:bg-[#1a77ea] text-white text-xs font-bold shadow-md shadow-[#2F8FFF]/30 transition-all hover:-translate-y-0.5"
                  >
                    <span>View Live Case</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
