'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '@/data/projects';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Floating WhatsApp contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative mb-2 px-3.5 py-2 rounded-2xl bg-[#0c1428] dark:bg-[#0c1428] light:bg-white border border-[#2F8FFF]/40 shadow-xl shadow-black/30 flex items-center gap-2 text-xs text-white dark:text-white light:text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex flex-col">
            <span className="font-bold text-[#5eb0ff]">Need Quick Help?</span>
            <span className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600">Chat with us on WhatsApp</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="w-5 h-5 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0c1428] dark:bg-[#0c1428] light:bg-white border-r border-b border-[#2F8FFF]/40 rotate-45" />
        </div>
      )}

      {/* Pulsing Action Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with KORE on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#2F8FFF] hover:bg-[#1a77ea] text-white flex items-center justify-center shadow-lg shadow-[#2F8FFF]/40 hover:shadow-xl hover:shadow-[#2F8FFF]/60 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-[#2F8FFF] opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </aside>
  );
}

