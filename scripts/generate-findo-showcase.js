const fs = require('fs');

const heroImg = fs.readFileSync('public/work/web/findo-hero.jpg').toString('base64');
const catalogImg = fs.readFileSync('public/work/web/findo-catalog.jpg').toString('base64');

const heroDataUri = `data:image/jpeg;base64,${heroImg}`;
const catalogDataUri = `data:image/jpeg;base64,${catalogImg}`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080e1e"/>
      <stop offset="50%" stop-color="#050813"/>
      <stop offset="100%" stop-color="#03050a"/>
    </linearGradient>
    <radialGradient id="centerGlow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#2F8FFF" stop-opacity="0.2"/>
      <stop offset="60%" stop-color="#164e8a" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Drop Shadows -->
    <filter id="browserShadow" x="-15%" y="-15%" width="130%" height="135%">
      <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#000000" flood-opacity="0.75"/>
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#2F8FFF" flood-opacity="0.12"/>
    </filter>
    <filter id="floatCardShadow" x="-20%" y="-20%" width="140%" height="145%">
      <feDropShadow dx="0" dy="30" stdDeviation="35" flood-color="#000000" flood-opacity="0.85"/>
      <feDropShadow dx="0" dy="8" stdDeviation="14" flood-color="#2F8FFF" flood-opacity="0.2"/>
    </filter>
    <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.5"/>
    </filter>

    <!-- Clip Paths -->
    <clipPath id="heroClip">
      <rect x="0" y="46" width="1200" height="634" rx="0"/>
    </clipPath>
    <clipPath id="catalogClip">
      <rect x="0" y="0" width="700" height="370" rx="20"/>
    </clipPath>
  </defs>

  <!-- Canvas Background -->
  <rect width="1600" height="1000" fill="url(#bgGrad)"/>
  <circle cx="800" cy="450" r="620" fill="url(#centerGlow)"/>

  <!-- Subtle Studio Grid -->
  <g opacity="0.04" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="250" x2="1600" y2="250"/>
    <line x1="0" y1="500" x2="1600" y2="500"/>
    <line x1="0" y1="750" x2="1600" y2="750"/>
    <line x1="400" y1="0" x2="400" y2="1000"/>
    <line x1="800" y1="0" x2="800" y2="1000"/>
    <line x1="1200" y1="0" x2="1200" y2="1000"/>
  </g>

  <!-- Ambient Light Sphere Behind Browser -->
  <ellipse cx="750" cy="420" rx="500" ry="320" fill="#2F8FFF" opacity="0.09" filter="blur(50px)"/>

  <!-- ============================================================== -->
  <!-- MAIN DESKTOP BROWSER MOCKUP (FINDO HERO EXPERIENCE)            -->
  <!-- ============================================================== -->
  <g transform="translate(180, 100)" filter="url(#browserShadow)">
    <!-- Browser Window Outer Shell -->
    <rect x="-4" y="-4" width="1208" height="688" rx="24" fill="#141c2e" stroke="#2a3854" stroke-width="2"/>
    <rect x="0" y="0" width="1200" height="680" rx="20" fill="#ffffff" overflow="hidden"/>

    <!-- Browser Header Bar (macOS style) -->
    <rect x="0" y="0" width="1200" height="46" fill="#121826"/>
    <!-- Window Control Buttons -->
    <circle cx="28" cy="23" r="6" fill="#ff5f56"/>
    <circle cx="48" cy="23" r="6" fill="#ffbd2e"/>
    <circle cx="68" cy="23" r="6" fill="#27c93f"/>

    <!-- URL Pill Bar -->
    <rect x="380" y="10" width="440" height="26" rx="13" fill="rgba(255,255,255,0.08)"/>
    <circle cx="400" cy="23" r="4" fill="#2F8FFF"/>
    <text x="600" y="27" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600" text-anchor="middle">findokids.store • Official E-Commerce Platform</text>

    <!-- Hero Image Content -->
    <g clip-path="url(#heroClip)">
      <image href="${heroDataUri}" x="0" y="46" width="1200" height="634" preserveAspectRatio="xMidYMid slice"/>
    </g>

    <!-- Glass Reflection Highlight -->
    <path d="M 0 46 L 500 46 L 300 680 L 0 680 Z" fill="rgba(255,255,255,0.02)" pointer-events="none"/>
  </g>

  <!-- ============================================================== -->
  <!-- ELEVATED FLOATING SHOWCASE CARD: PRODUCT STORE CATALOG         -->
  <!-- ============================================================== -->
  <g transform="translate(800, 480)" filter="url(#floatCardShadow)">
    <!-- Card Outer Frame -->
    <rect x="-4" y="-4" width="708" height="378" rx="24" fill="#131c30" stroke="#2F8FFF" stroke-width="2" stroke-opacity="0.6"/>
    <rect x="0" y="0" width="700" height="370" rx="20" fill="#ffffff"/>

    <!-- Catalog Image Content -->
    <g clip-path="url(#catalogClip)">
      <image href="${catalogDataUri}" x="0" y="0" width="700" height="370" preserveAspectRatio="xMidYMid slice"/>
    </g>

    <!-- Floating Mini Tag on Card -->
    <g transform="translate(24, 20)" filter="url(#badgeShadow)">
      <rect width="180" height="32" rx="16" fill="#0d1428" stroke="rgba(47,143,255,0.6)" stroke-width="1.2"/>
      <circle cx="16" cy="16" r="4" fill="#2F8FFF"/>
      <text x="28" y="21" fill="#5eb0ff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">Curated Store Catalog</text>
    </g>
  </g>

  <!-- ============================================================== -->
  <!-- FLOATING STUDIO BADGES                                         -->
  <!-- ============================================================== -->

  <!-- Left Floating Badge: Brand Identity & E-Commerce -->
  <g transform="translate(100, 360)" filter="url(#badgeShadow)">
    <rect width="230" height="58" rx="29" fill="#0c1428" stroke="rgba(47,143,255,0.4)" stroke-width="1.5"/>
    <circle cx="30" cy="29" r="6" fill="#2F8FFF"/>
    <text x="46" y="27" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700">Find What You Need</text>
    <text x="46" y="44" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="500">Thoughtfully Chosen for Kids</text>
  </g>

  <!-- Bottom Left Badge: Next.js Fast E-Commerce -->
  <g transform="translate(140, 680)" filter="url(#badgeShadow)">
    <rect width="210" height="52" rx="26" fill="#0c1428" stroke="rgba(47,143,255,0.4)" stroke-width="1.5"/>
    <circle cx="26" cy="26" r="5" fill="#22c55e"/>
    <text x="40" y="25" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">Fast E-Commerce</text>
    <text x="40" y="40" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="500">High-Conversion UX</text>
  </g>

  <!-- Header Info (Top Studio Bar) -->
  <g transform="translate(800, 50)" text-anchor="middle">
    <text y="0" fill="#5eb0ff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" letter-spacing="3">FINDO • E-COMMERCE &amp; BRAND PLATFORM</text>
  </g>

  <!-- Bottom Brand Watermark -->
  <g transform="translate(800, 960)" text-anchor="middle">
    <text y="0" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" letter-spacing="2">FINDO GLOBAL • DESIGNED &amp; ENGINEERED BY KORE</text>
  </g>
</svg>`;

fs.writeFileSync('public/work/web/findo-web.svg', svg);
fs.writeFileSync('public/work/web/findo-web.jpg', svg);
console.log('Successfully generated high-end desktop studio mockup for Findo!');
