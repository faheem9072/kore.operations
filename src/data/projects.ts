import { Project, ServiceItem } from '@/types';

/**
 * =========================================================================
 * KORE PORTFOLIO DATA FILE
 * =========================================================================
 * Non-expert friendly: To add a new project, simply copy an existing item
 * below and fill in the details.
 *
 * Categories allowed:
 *   - 'web'       : Web Design & Development
 *   - 'design'    : Logo & Visual Identity Design
 *   - 'social'    : Social Media & Marketing Creatives
 *   - 'packaging' : Packaging & Physical Goods Design
 *
 * Images:
 *   Place your images in: /public/work/[category]/[filename].jpg
 *   e.g. /work/web/darul-irshad.jpg
 *   If the image is missing, the site will automatically render a premium
 *   geometric placeholder with the project title and category badge!
 * =========================================================================
 */

export const CATEGORIES = [
  { id: 'web', label: 'Website Design' },
  { id: 'design', label: 'Logo Design' },
  { id: 'social', label: 'Social Media Designs' },
  { id: 'packaging', label: 'Packaging Design' },
] as const;

export const PROJECTS: Project[] = [
  // -----------------------------------------------------------------------
  // 1. WEB DESIGN
  // -----------------------------------------------------------------------
  {
    id: 'darul-irshad-erp',
    title: 'Darul Irshad ERP',
    category: 'web',
    categoryLabel: 'Website & Systems',
    image: '/work/web/darul-irshad.jpg',
    description: 'A comprehensive, cloud-based School Management and Student Information ERP system built with responsive dashboards, real-time fee tracking, and academic reporting.',
    descriptionMl: 'സ്കൂൾ മാനേജ്‌മെന്റ്, അക്കാദമിക് വിവരങ്ങൾ, ഫീസ് ട്രാക്കിംഗ് എന്നിവ സജ്ജീകരിച്ച സമ്പൂർണ്ണ ക്ലൗഡ് ഇആർപി സിസ്റ്റം.',
    client: 'Darul Irshad Islamic Academy',
    year: '2025',
    tags: ['ERP System', 'UI/UX Design', 'Next.js', 'Dashboard'],
    link: 'https://example.com/darul-irshad',
    featured: true,
  },
  {
    id: 'findo-website',
    title: 'Findo Brand Website',
    category: 'web',
    categoryLabel: 'Website Design',
    image: '/work/web/findo-web.jpg',
    description: 'High-conversion, ultra-fast corporate brand and e-commerce portal for Findo featuring interactive product showcases and sleek modern aesthetics.',
    descriptionMl: 'ആധുനിക ബ്രാൻഡ് എക്സ്പീരിയൻസും ഉയർന്ന പെർഫോമൻസും ഉറപ്പുനൽകുന്ന ഫിൻഡോ കോർപ്പറേറ്റ് വെബ്സൈറ്റ്.',
    client: 'Findo Global',
    year: '2025',
    tags: ['Web Design', 'E-Commerce', 'Responsive', 'Tailwind CSS'],
    link: 'https://example.com/findo',
    featured: true,
  },

  // -----------------------------------------------------------------------
  // 2. DESIGN (LOGO & BRANDING)
  // -----------------------------------------------------------------------
  {
    id: 'krewx-identity',
    title: 'Krewx Brand Identity',
    category: 'design',
    categoryLabel: 'Logo & Branding',
    image: '/work/design/krewx.jpg',
    description: 'Bold, tech-forward visual identity and logo architecture engineered for modern digital presence, apparel, and corporate branding assets.',
    descriptionMl: 'പുതിയ തലമുറ സംരംഭങ്ങൾക്കായുള്ള വേറിട്ട ലോഗോയും സമ്പൂർണ്ണ ബ്രാൻഡ് ഐഡന്റിറ്റിയും.',
    client: 'Krewx Innovations',
    year: '2024',
    tags: ['Brand Identity', 'Logo System', 'Typography', 'Styleguide'],
    link: 'https://example.com/krewx',
    featured: true,
  },
  {
    id: 'findo-identity',
    title: 'Findo Brand Identity',
    category: 'design',
    categoryLabel: 'Logo & Branding',
    image: '/work/design/findo-branding.jpg',
    description: 'Minimalist brand system, signature monogram, color theory, and complete corporate stationery guidelines crafted for scalable recognition.',
    descriptionMl: 'മിനിമലിസ്റ്റിക് ലോഗോ, ബ്രാൻഡ് കളർ പാലറ്റ്, സമഗ്രമായ കോർപ്പറേറ്റ് ഗൈഡ്‌ലൈനുകൾ.',
    client: 'Findo Global',
    year: '2024',
    tags: ['Visual Identity', 'Monogram', 'Brand Guidelines'],
    link: 'https://example.com/findo-brand',
    featured: true,
  },

  // -----------------------------------------------------------------------
  // 3. SOCIAL MEDIA DESIGN
  // -----------------------------------------------------------------------
  {
    id: 'almaniya-poster',
    title: 'Almaniya Group Real Estate Campaign',
    category: 'social',
    categoryLabel: 'Social Media Design',
    image: '/work/social/almaniya.jpg',
    description: 'High-impact social media posters and multi-platform promotional creatives designed for luxury real estate property launches and investor acquisition.',
    descriptionMl: 'പ്രീമിയം റിയൽ എസ്റ്റേറ്റ് പ്രോജക്റ്റുകൾക്കായുള്ള ആകർഷകമായ സോഷ്യൽ മീഡിയ കാമ്പെയ്ൻ പോസ്റ്ററുകൾ.',
    client: 'Almaniya Group',
    year: '2024',
    tags: ['Real Estate', 'Ad Campaign', 'Social Posters', 'Instagram'],
    link: 'https://example.com/almaniya',
    featured: true,
  },
  {
    id: 'best-smile-clinic',
    title: 'Best Smile Dental Clinic Posters',
    category: 'social',
    categoryLabel: 'Social Media Design',
    image: '/work/social/best-smile.jpg',
    description: 'Engaging, trust-building healthcare creatives and awareness campaign posters tailored to generate appointment inquiries across Kerala.',
    descriptionMl: 'വിശ്വാസ്യതയും വ്യക്തതയും നൽകുന്ന ദന്തചികിത്സാ അവബോധ പോസ്റ്ററുകൾ.',
    client: 'Best Smile Dental Care',
    year: '2024',
    tags: ['Healthcare', 'Poster Design', 'Social Creatives', 'Visual Storytelling'],
    link: 'https://example.com/best-smile',
    featured: true,
  },

  // -----------------------------------------------------------------------
  // 4. PACKAGING DESIGN
  // -----------------------------------------------------------------------
  {
    id: 'findo-cloth-bag',
    title: 'Findo Packaging — Premium Cloth Bag',
    category: 'packaging',
    categoryLabel: 'Packaging Design',
    image: '/work/packaging/findo-cloth-bag.jpg',
    description: 'Sustainable, eco-conscious retail cloth bag packaging featuring custom pattern typography and durable organic aesthetic.',
    descriptionMl: 'പരിസ്ഥിതി സൗഹൃദമായ പ്രീമിയം തുണി ബാഗ് പാക്കേജിംഗ് ഡിസൈൻ.',
    client: 'Findo Lifestyle',
    year: '2025',
    tags: ['Eco Packaging', 'Cloth Bag', 'Retail Merchandise', 'Print Production'],
    link: 'https://example.com/findo-packaging',
    featured: true,
  },
  {
    id: 'findo-kids-school',
    title: 'Findo Kids & School Products Packaging',
    category: 'packaging',
    categoryLabel: 'Packaging Design',
    image: '/work/packaging/findo-kids.jpg',
    description: 'Vibrant, child-friendly packaging design for school supplies, stationery boxes, and durable educational product kits.',
    descriptionMl: 'കുട്ടികൾക്കായുള്ള ആകർഷകമായ വർണ്ണങ്ങളിലും രൂപകൽപ്പനയിലുമുള്ള സ്കൂൾ ഉൽപ്പന്ന പാക്കേജിംഗ്.',
    client: 'Findo Kids Division',
    year: '2025',
    tags: ['Product Box', 'Kids Range', 'Illustration', 'Shelf Impact'],
    link: 'https://example.com/findo-kids',
    featured: true,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web',
    title: 'Web Design',
    subtitle: 'High Performance & Conversion',
    description: 'Bespoke corporate websites, web applications, and intuitive ERP systems crafted with cutting-edge speed, SEO, and responsiveness.',
    iconName: 'Globe',
    badge: 'Digital Flagship',
    deliverables: ['Custom Next.js & React Apps', 'School / Business ERPs', 'E-Commerce Platforms', 'Mobile-First UI/UX'],
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
