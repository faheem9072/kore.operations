'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/projects';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'services', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="KORE Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1a6cd4] to-[#2F8FFF] flex items-center justify-center font-black text-white text-lg tracking-wider shadow-md shadow-[#2F8FFF]/25 group-hover:scale-105 transition-transform">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white dark:text-white group-hover:text-[#2F8FFF] transition-colors">
                KORE<span className="text-[#2F8FFF]">.</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold -mt-1 hidden sm:block">
                Chelembra
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0d1428]/80 dark:bg-[#0d1428]/80 light:bg-white/80 border border-white/10 dark:border-white/10 light:border-slate-200 px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2F8FFF] text-white shadow-sm shadow-[#2F8FFF]/30'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle & WhatsApp CTA */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 transition-all hover:scale-105 focus:outline-none"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-once" />
              ) : (
                <Moon className="w-4 h-4 text-[#2F8FFF]" />
              )}
            </button>

            {/* Quick Contact CTA */}
            <Link
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2F8FFF] hover:bg-[#1f7ae6] text-white text-xs font-bold tracking-wide shadow-md shadow-[#2F8FFF]/30 transition-all hover:shadow-lg hover:shadow-[#2F8FFF]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden w-9 h-9 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-slate-200 dark:text-slate-200 light:text-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-b border-white/10 px-5 pt-4 pb-6 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2F8FFF] text-white font-semibold'
                      : 'text-slate-200 dark:text-slate-200 light:text-slate-700 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2F8FFF] text-white text-sm font-bold shadow-md shadow-[#2F8FFF]/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 70253 87768)</span>
              </Link>
              <div className="text-center text-[11px] text-slate-400 font-medium">
                Chelembra, Malappuram, Kerala
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
