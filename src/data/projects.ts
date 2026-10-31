import { Project, ServiceItem } from '@/types';

/**
 * =========================================================================
 * KORE PORTFOLIO DATA FILE
 * =========================================================================
 * Non-expert friendly: To add a new project, simply copy an existing item
 * below and fill in the details.
 *
 * Categories allowed:
 *   - 'web'       : Web Design & Development / Web Apps / ERP
 *   - 'design'    : Logo & Visual Identity Design
 *   - 'social'    : Social Media & Marketing Creatives
 *   - 'packaging' : Packaging & Physical Goods Design
 *
 * Images:
 *   Place your images in: /public/work/[category]/[filename].jpg
 *   e.g. /work/web/darul-irshad.svg
 * =========================================================================
 */

export const CATEGORIES = [
  { id: 'web', label: 'Website Design' },
  { id: 'design', label: 'Product & Brand Design' },
  { id: 'social', label: 'Social Media Designs' },
] as const;

export const PROJECTS: Project[] = [
  // -----------------------------------------------------------------------
  // 1. WEB DESIGN, WEB APPS & ERP SYSTEMS
  // -----------------------------------------------------------------------
  {
    id: 'darul-irshad-erp',
    title: 'Darul Irshad School of Excellence ERP',
    category: 'web',
    categoryLabel: 'Academic Cloud ERP',
    image: '/work/web/darul-irshad.svg',
    gallery: [
      '/work/web/darul-irshad.svg',
      '/work/web/darul-irshad-attendance.jpg',
      '/work/web/darul-irshad-portal.jpg',
    ],
    description: 'A comprehensive, cloud-native School Management & Academic ERP engineered for Darul Irshad School of Excellence (DISE 2026). Featuring digital attendance registers, role-based faculty access control (RBAC), and unified parent/student notice & timetable portals.',
    client: 'Darul Irshad School of Excellence',
    year: '2026',
    tags: ['School ERP', 'DISE 2026', 'Attendance System', 'Parent Portal', 'Next.js', 'RBAC'],
    link: 'https://example.com/darul-irshad',
    featured: true,
    aspect: 'landscape',
  },
  {
    id: 'nalakath-fleet-app',
    title: 'Nalakath Logistics — Fleet Management',
    category: 'web',
    categoryLabel: 'Fleet Web App',
    image: '/work/web/nalakath-fleet.jpg',
    gallery: [
      '/work/web/nalakath-fleet.jpg',
      '/work/web/nalakath-login.jpg',
      '/work/web/nalakath-splash.png',
    ],
    description: 'A mission-critical, real-time fleet operations and driver tracking web application engineered for Nalakath Logistics (Since 1998). Features live on-trip vehicle tracking, driver PIN verification, idle status monitoring, multi-trip dispatches, and dedicated Driver/Owner authentication portals.',
    client: 'Nalakath Logistics (Since 1998)',
    year: '2025',
    tags: ['Fleet Management', 'Live Tracking', 'Mobile Web App', 'Driver Portal', 'Next.js'],
    link: 'https://nalakathlogistics.com',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 'findo-website',
    title: 'Findo — Kids Lifestyle & E-Commerce Flagship',
    category: 'web',
    categoryLabel: 'E-Commerce Website',
    image: '/work/web/findo-web.svg',
    gallery: [
      '/work/web/findo-web.svg',
      '/work/web/findo-hero.jpg',
      '/work/web/findo-catalog.jpg',
    ],
    description: 'High-conversion, ultra-fast corporate brand and e-commerce portal for Findo ("Find What You Need"). Thoughtfully designed for curious kids products featuring interactive habit-tracker showcases, dynamic product carousels, responsive catalog search, and streamlined shopping cart experience.',
    client: 'Findo Global',
    year: '2025',
    tags: ['E-Commerce', 'Brand Website', 'Kids Products', 'UI/UX Design', 'Next.js', 'Online Store'],
    link: 'https://findokids.store',
    featured: true,
    aspect: 'landscape',
  },

  // -----------------------------------------------------------------------
  // 2. DESIGN (LOGO & BRANDING)
  // -----------------------------------------------------------------------
  {
    id: 'krewx-identity',
    title: 'Krewx — Direct Work & Manpower Platform',
    category: 'design',
    categoryLabel: 'A Product by KORE',
    image: '/work/design/krewx.jpg',
    gallery: [
      '/work/design/krewx.jpg',
    ],
    description: 'On-demand manpower and direct workforce web platform engineered by KORE ("A Product by KORE"). Connects verified job seekers and local businesses with daily shifts, role-based hiring, and zero middlemen across all 14 Kerala districts.',
    client: 'Krewx (A Product by KORE)',
    year: '2025',
    tags: ['Krewx', 'Product by KORE', 'Manpower Platform', 'Direct Work', 'Web App', 'Zero Middlemen'],
    link: 'https://krewx.in',
    featured: true,
    aspect: 'landscape',
  },

  // -----------------------------------------------------------------------
  // 3. SOCIAL MEDIA DESIGN
  // -----------------------------------------------------------------------
  {
    id: 'maplefield-influencer',
    title: 'MapleField — Influencer Licensing Campaign',
    category: 'social',
    categoryLabel: 'Social Media Ad Creative',
    image: '/work/social/maplefield-influencer.jpg',
    gallery: [
      '/work/social/maplefield-influencer.jpg',
      '/work/social/maplefield-ejari.jpg',
      '/work/social/maplefield-import-export.jpg',
    ],
    description: 'High-conversion social media campaign creative engineered for MapleField Business Services LLC (Dubai, UAE). Designed to attract digital creators with compelling messaging on legal monetization, official UAE media licenses, and brand partnership approvals.',
    client: 'MapleField Business Services LLC (Dubai, UAE)',
    year: '2025',
    tags: ['Influencer License', 'Dubai Business', 'Meta Ads', 'Poster Design', 'Social Campaign'],
    link: 'https://maplefield.ae',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 'maplefield-ejari',
    title: 'MapleField — Ejari Approval & Inspection',
    category: 'social',
    categoryLabel: 'Social Media Ad Creative',
    image: '/work/social/maplefield-ejari.jpg',
    gallery: [
      '/work/social/maplefield-ejari.jpg',
      '/work/social/maplefield-influencer.jpg',
      '/work/social/maplefield-import-export.jpg',
    ],
    description: 'Trust-focused corporate promotional visual crafted for MapleField Business Services LLC, highlighting end-to-end Ejari government registration and comprehensive on-site inspections for commercial, residential, warehouse, and retail clients across the UAE.',
    client: 'MapleField Business Services LLC (Dubai, UAE)',
    year: '2025',
    tags: ['Ejari Services', 'Dubai Real Estate', 'Corporate Social Media', 'Poster Design', 'UAE Licensing'],
    link: 'https://maplefield.ae',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: 'maplefield-import-export',
    title: 'MapleField — Fast-Track Import & Export',
    category: 'social',
    categoryLabel: 'Social Media Ad Creative',
    image: '/work/social/maplefield-import-export.jpg',
    gallery: [
      '/work/social/maplefield-import-export.jpg',
      '/work/social/maplefield-influencer.jpg',
      '/work/social/maplefield-ejari.jpg',
    ],
    description: 'Striking 3D-assisted logistics and trade ad creative engineered for MapleField Business Services LLC. Featuring 3D UAE map projections, cargo aircraft, and shipping routes to drive investor inquiries for customs codes and global cross-border trade setups.',
    client: 'MapleField Business Services LLC (Dubai, UAE)',
    year: '2025',
    tags: ['Import & Export', 'UAE Logistics', '3D Visual Ad', 'Customs Clearance', 'Trade Setup'],
    link: 'https://maplefield.ae',
    featured: true,
    aspect: 'portrait',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web',
    title: 'Web Design, Apps & ERP',
    subtitle: 'High Performance & Conversion',
    description: 'Custom web apps, real-time fleet operations portals, and intuitive school/business ERP systems crafted with cutting-edge speed, SEO, and responsiveness.',
    iconName: 'Globe',
    badge: 'Digital Flagship',
    deliverables: ['School & Business ERPs', 'Fleet Management & Web Apps', 'Custom Next.js & React Systems', 'Mobile-First UI/UX'],
  },
  {
    id: 'design',
    title: 'Design & Branding',
    subtitle: 'Logo & Visual Identity',
    description: 'Iconic logos, complete brand architecture, and cohesive guidelines that carve a memorable space in your industry.',
    iconName: 'Sparkles',
    badge: 'Brand Strategy',
    deliverables: ['Logo & Monogram Design', 'Brand Guidelines & Books', 'Corporate Stationery', 'Typography & Palette Systems'],
  },
  {
    id: 'social',
    title: 'Social Media Design',
    subtitle: 'Engagement & Lead Generation',
    description: 'Scroll-stopping creatives, carousel campaigns, and digital ad graphics designed to convert viewers into lifelong customers.',
    iconName: 'Share2',
    badge: 'Growth Creatives',
    deliverables: ['Campaign Posters', 'Instagram Carousels & Reels Cover', 'Meta Ad Creatives', 'Event & Launch Assets'],
  },
  {
    id: 'packaging',
    title: 'Packaging Design',
    subtitle: 'Physical Product Brilliance',
    description: 'Shelf-dominating product packaging, eco-friendly cloth bags, box architecture, and retail labeling that elevates unboxing experiences.',
    iconName: 'Package',
    badge: 'Retail Ready',
    deliverables: ['Eco Cloth Bags & Pouches', 'Product Boxes & Cartons', 'Label & Tag Artworks', 'Print-Ready Die Lines'],
  },
];

export const COMPANY_INFO = {
  name: 'KORE',
  tagline: 'Operations, Simplified.',
  positioning: 'One Partner. Multiple Solutions.',
  location: 'Chelembra, Malappuram, Kerala',
  phone: '+91 70253 87768',
  phoneDisplay: '+91 70253 87768',
  email: 'hellokoreteam@gmail.com',
  whatsappUrl: 'https://wa.me/917025387768?text=Hi%20KORE%20team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.',
  stats: [
    { value: '45+', label: 'Projects Delivered' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Business Niches' },
    { value: '24/7', label: 'Operations Support' },
  ],
};
