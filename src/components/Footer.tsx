'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, MapPin, Phone, Mail, MessageCircle, Heart } from 'lucide-react';
import { COMPANY_INFO, CATEGORIES } from '@/data/projects';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04070e] text-slate-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Accent Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1a6cd4] to-[#2F8FFF] flex items-center justify-center font-black text-white text-base">
                K
              </div>
              <span className="font-black text-2xl tracking-tight text-white">
                KORE<span className="text-[#2F8FFF]">.</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              <strong className="text-white font-semibold">{COMPANY_INFO.positioning}</strong>
              <br />
              {COMPANY_INFO.tagline} Kerala&apos;s premier partner for digital transformation, corporate branding, custom web platforms, and operational excellence.
            </p>

            <p className="font-malayalam text-xs text-[#5eb0ff] font-medium leading-relaxed">
              കേരളത്തിലെ സംരംഭങ്ങൾക്ക് ആഗോള ഡിജിറ്റൽ പരിഹാരങ്ങൾ • ചേളമ്പ്ര, മലപ്പുറം.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#2F8FFF]" />
              <span>Chelembra, Malappuram, Kerala, India</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-white transition-colors">
                  Crafted Creations
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About KORE
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href="#work"
                    className="hover:text-[#2F8FFF] transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#services" className="hover:text-[#2F8FFF] transition-colors">
                  Business AI &amp; Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Connect
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#5eb0ff] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#2F8FFF]" />
                <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2F8FFF]" />
                <span>Call: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#2F8FFF]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} KORE Operations. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#2F8FFF] fill-[#2F8FFF]" />
            <span>in Chelembra, Malappuram, Kerala</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#2F8FFF] hover:text-white border border-white/10 flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

