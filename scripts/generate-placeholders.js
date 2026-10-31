const fs = require('fs');
const path = require('path');

const placeholders = [
  {
    path: 'public/work/web/darul-irshad.jpg',
    category: 'WEB DESIGN & ERP',
    title: 'Darul Irshad ERP',
    subtitle: 'School Management & Student Information System',
    malayalam: 'ദാറുൽ ഇർഷാദ് ഇആർപി സിസ്റ്റം',
    accent: '#2F8FFF',
    bg: '#080e1e',
    pattern: 'erp'
  },
  {
    path: 'public/work/web/findo-web.jpg',
    category: 'WEB DESIGN',
    title: 'Findo Brand Website',
    subtitle: 'Modern Corporate & E-Commerce Flagship',
    malayalam: 'ഫിൻഡോ ഗ്ലോബൽ വെബ്സൈറ്റ്',
    accent: '#3ba0ff',
    bg: '#0a1024',
    pattern: 'web'
  },
  {
    path: 'public/work/design/krewx.jpg',
    category: 'BRAND IDENTITY',
    title: 'Krewx Identity',
    subtitle: 'Visual Brand System & Guidelines',
    malayalam: 'ക്രൂക്സ് ബ്രാൻഡ് ഐഡന്റിറ്റി',
    accent: '#2F8FFF',
    bg: '#060a17',
    pattern: 'logo-krewx'
  },
  {
    path: 'public/work/design/findo-branding.jpg',
    category: 'LOGO & IDENTITY',
    title: 'Findo Visual Identity',
    subtitle: 'Minimalist Signature Monogram & Guidelines',
    malayalam: 'ഫിൻഡോ ബ്രാൻഡിംഗ്',
    accent: '#5eb0ff',
    bg: '#090f22',
    pattern: 'logo-findo'
  },
  {
    path: 'public/work/social/almaniya.jpg',
    category: 'SOCIAL MEDIA CAMPAIGN',
    title: 'Almaniya Group',
    subtitle: 'Luxury Real Estate Launch Poster',
    malayalam: 'അൽമാനിയ ഗ്രൂപ്പ് റിയൽ എസ്റ്റേറ്റ്',
    accent: '#2F8FFF',
    bg: '#0b1329',
    pattern: 'social-re'
  },
  {
    path: 'public/work/social/best-smile.jpg',
    category: 'HEALTHCARE POSTER',
    title: 'Best Smile Clinic',
    subtitle: 'Dental Wellness & Patient Awareness Poster',
    malayalam: 'ബെസ്റ്റ് സ്മൈൽ ഡെന്റൽ ക്ലിനിക്',
    accent: '#38bdf8',
    bg: '#081426',
    pattern: 'social-dental'
  },
  {
    path: 'public/work/packaging/findo-cloth-bag.jpg',
    category: 'PACKAGING DESIGN',
    title: 'Findo Cloth Bag',
    subtitle: 'Sustainable Eco-Friendly Retail Bag',
    malayalam: 'ഫിൻഡോ പ്രീമിയം തുണി ബാഗ്',
    accent: '#2F8FFF',
    bg: '#0a1226',
    pattern: 'bag'
  },
  {
    path: 'public/work/packaging/findo-kids.jpg',
    category: 'PRODUCT PACKAGING',
    title: 'Findo Kids & School',
    subtitle: 'Vibrant Stationery & Educational Box Packaging',
    malayalam: 'ഫിൻഡോ കിഡ്സ് സ്കൂൾ പാക്കേജിംഗ്',
    accent: '#60a5fa',
    bg: '#0c152e',
    pattern: 'box'
  }
];

function generateSvg(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${item.bg}"/>
      <stop offset="100%" stop-color="#04060b"/>
    </linearGradient>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5eb0ff"/>
      <stop offset="100%" stop-color="#1772f4"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#2F8FFF" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#2F8FFF" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="800" fill="url(#bgGrad)"/>
  <circle cx="600" cy="350" r="450" fill="url(#glow)"/>

  <!-- Subtle Grid Lines -->
  <g opacity="0.07" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="200" x2="1200" y2="200"/>
    <line x1="0" y1="400" x2="1200" y2="400"/>
    <line x1="0" y1="600" x2="1200" y2="600"/>
    <line x1="300" y1="0" x2="300" y2="800"/>
    <line x1="600" y1="0" x2="600" y2="800"/>
    <line x1="900" y1="0" x2="900" y2="800"/>
  </g>

  <!-- Central Visual Showcase Card -->
  <rect x="180" y="100" width="840" height="520" rx="24" fill="#0d1428" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" filter="url(#shadow)"/>
  
  <!-- Browser / UI Header Bar -->
  <rect x="180" y="100" width="840" height="48" rx="24" fill="#121b35"/>
  <circle cx="215" cy="124" r="6" fill="#ff5f56"/>
  <circle cx="235" cy="124" r="6" fill="#ffbd2e"/>
  <circle cx="255" cy="124" r="6" fill="#27c93f"/>
  <rect x="300" y="112" width="600" height="24" rx="12" fill="rgba(255,255,255,0.06)"/>
  <text x="600" y="128" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" text-anchor="middle">koresolutions.in / portfolio / ${item.category.toLowerCase().replace(/\\s+/g, '-')}</text>

  <!-- Card Graphic Body -->
  <g transform="translate(240, 200)">
    <!-- Category Badge -->
    <rect x="0" y="0" width="180" height="32" rx="16" fill="rgba(47,143,255,0.15)" stroke="#2F8FFF" stroke-width="1"/>
    <circle cx="16" cy="16" r="4" fill="#2F8FFF"/>
    <text x="30" y="21" fill="#5eb0ff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">${item.category}</text>

    <!-- Main Title -->
    <text x="0" y="90" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="44" font-weight="800">${item.title}</text>
    
    <!-- Subtitle -->
    <text x="0" y="130" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="400">${item.subtitle}</text>

    <!-- Malayalam Tag -->
    <rect x="0" y="165" width="340" height="38" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
    <text x="16" y="190" fill="#cbd5e1" font-family="'Noto Sans Malayalam', 'Manjari', sans-serif" font-size="15" font-weight="500">${item.malayalam}</text>

    <!-- Modern Graphic Shapes on Right -->
    <g transform="translate(460, 20)">
      <rect x="0" y="0" width="240" height="200" rx="16" fill="url(#blueGrad)" opacity="0.9"/>
      <circle cx="120" cy="100" r="50" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.8"/>
      <path d="M 95 100 L 145 100 M 120 75 L 120 125" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
      <rect x="20" y="150" width="200" height="12" rx="6" fill="#ffffff" opacity="0.5"/>
      <rect x="40" y="170" width="160" height="8" rx="4" fill="#ffffff" opacity="0.3"/>
    </g>
  </g>

  <!-- Bottom Brand Watermark -->
  <g transform="translate(180, 680)">
    <text x="0" y="0" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="600" letter-spacing="2">KORE • OPERATIONS, SIMPLIFIED.</text>
    <text x="840" y="0" fill="#3b82f6" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="600" text-anchor="end">CHELEMBRA, MALAPPURAM</text>
  </g>
</svg>`;
}

placeholders.forEach(item => {
  const fullPath = path.resolve(item.path);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, generateSvg(item));
  // Also create .svg alongside .jpg so both work smoothly
  const svgPath = fullPath.replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, generateSvg(item));
  console.log('Created:', item.path);
});
