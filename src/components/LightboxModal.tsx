'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { X, ExternalLink, ChevronLeft, ChevronRight, Calendar, User, Tag, Layers } from 'lucide-react';

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
  const [galleryIndex, setGalleryIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  // Reset gallery index on project switch
  useEffect(() => {
    setGalleryIndex(0);
    setImageError(false);
  }, [project?.id]);

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

  const currentGallery = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  const currentDisplayImage = currentGallery[galleryIndex] || project.image;

  const isMobileAppChassis =
    currentDisplayImage.includes('-fleet') ||
    currentDisplayImage.includes('-login') ||
    currentDisplayImage.includes('-splash');

  const isCurrentImagePortrait =
    project.aspect === 'portrait' ||
    isMobileAppChassis ||
    currentDisplayImage.includes('-attendance') ||
    currentDisplayImage.includes('-portal');

  const getScreenTabLabel = (img: string, idx: number) => {
    if (img.includes('krewx-logo')) return 'Brand Logo';
    if (img.includes('krewx')) return 'Platform UI';
    if (img.includes('astrella')) return 'Monogram';
    if (img.includes('maplefield-influencer')) return 'Influencer License';
    if (img.includes('maplefield-ejari')) return 'Ejari Services';
    if (img.includes('maplefield-import-export')) return 'Import & Export';
    if (img.includes('-attendance')) return 'Attendance';
    if (img.includes('-portal')) return 'Parent Portal';
    if (img.includes('findo-hero')) return 'Hero View';
    if (img.includes('findo-catalog')) return 'Store Catalog';
    if (img.endsWith('.svg') || img.includes('darul-irshad') || img.includes('findo-web')) return 'Studio Showcase';
    if (img.includes('-fleet')) return 'Live Ops';
    if (img.includes('-login')) return 'Login';
    if (img.includes('-splash')) return 'Splash';
    return `Screen ${idx + 1}`;
  };

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
        // If current project has more gallery items, swipe through gallery first
        if (galleryIndex < currentGallery.length - 1) {
          setGalleryIndex(galleryIndex + 1);
        } else {
          handleNext();
        }
      } else {
        if (galleryIndex > 0) {
          setGalleryIndex(galleryIndex - 1);
        } else {
          handlePrev();
        }
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
          <div className="relative w-full aspect-video min-h-[340px] sm:min-h-[460px] bg-[#060a16] overflow-hidden flex items-center justify-center">
            {!imageError ? (
              isCurrentImagePortrait ? (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#090e1f] to-[#04060c] p-4 sm:p-6">
                  {/* Ambient soft glow backdrop */}
                  <img
                    src={currentDisplayImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-125 pointer-events-none"
                  />
                  {/* Centered Showcase */}
                  <div className="relative z-10 h-full max-h-[440px] sm:max-h-[520px] flex items-center justify-center">
                    {isMobileAppChassis ? (
                      <div className="relative h-full max-h-[420px] sm:max-h-[500px] rounded-[32px] p-2 bg-[#121826] border-2 border-[#2a3854] shadow-2xl shadow-black/80 flex flex-col items-center">
                        {/* Top Island Bar */}
                        <div className="w-24 h-4 bg-black rounded-full mb-1 flex items-center justify-center gap-1.5 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]" />
                          <span className="w-1 h-1 rounded-full bg-[#2F8FFF]" />
                        </div>
                        <img
                          src={currentDisplayImage}
                          alt={project.title}
                          onError={() => setImageError(true)}
                          className="h-[calc(100%-20px)] w-auto max-w-[80vw] object-contain rounded-[24px] overflow-hidden"
                        />
                      </div>
                    ) : (
                      <div className="relative h-full max-h-[440px] sm:max-h-[520px] rounded-2xl p-1.5 bg-[#0f1629]/80 border border-white/15 shadow-2xl shadow-black/80 flex items-center justify-center overflow-hidden">
                        <img
                          src={currentDisplayImage}
                          alt={project.title}
                          onError={() => setImageError(true)}
                          className="h-full w-auto max-w-[85vw] object-contain rounded-xl"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#070b16] p-2">
                  <img
                    src={currentDisplayImage}
                    alt={project.title}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-contain"
                  />
                </div>
              )
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
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b1122] to-transparent pointer-events-none" />

            {/* Gallery Thumbnail Selector Strip if Multiple Screenshots */}
            {currentGallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-lg">
                <Layers className="w-3.5 h-3.5 text-[#5eb0ff]" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-300 mr-1 hidden sm:inline">
                  Views:
                </span>
                {currentGallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                      galleryIndex === idx
                        ? 'bg-[#2F8FFF] text-white shadow-sm shadow-[#2F8FFF]/50 scale-105'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    {getScreenTabLabel(img, idx)}
                  </button>
                ))}
              </div>
            )}
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
                Tip: Click the screen pills or swipe to view all app screens.
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
                    <span>View Live Web App</span>
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
