'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import WhoWeAre from '@/components/WhoWeAre';
import Services from '@/components/Services';
import CraftedCreations from '@/components/CraftedCreations';
import AboutWhyKore from '@/components/AboutWhyKore';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { ProjectCategory } from '@/types';

export default function Home() {
  // Default to 'web' (Website Design) matching the reference screenshot
  const [selectedCategory, setSelectedCategory] = useState<string>('web');

  const handleServiceSelect = (category: ProjectCategory) => {
    setSelectedCategory(category);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#060913] text-slate-100 transition-colors duration-300">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero onSelectCategory={handleServiceSelect} />

      {/* 2. Scrolling Marquee Strip */}
      <Marquee />

      {/* 3. Who We Are + Stats */}
      <WhoWeAre />

      {/* 4. Services (4 Big Clickable Cards with Interactive Category Linking) */}
      <Services onSelectCategory={handleServiceSelect} />

      {/* 5. Crafted Creations (Portfolio with Category Filter Pills & Animated Layout Grid) */}
      <CraftedCreations
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* 6. About / Why KORE & Process */}
      <AboutWhyKore />

      {/* 7. Contact (WhatsApp button, Phone, Email, Form) */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}

