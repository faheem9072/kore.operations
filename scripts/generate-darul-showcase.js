const fs = require('fs');
const path = require('path');

const portalImg = fs.readFileSync('public/work/web/darul-irshad-portal.jpg').toString('base64');
const attendanceImg = fs.readFileSync('public/work/web/darul-irshad-attendance.jpg').toString('base64');

const portalDataUri = `data:image/jpeg;base64,${portalImg}`;
const attendanceDataUri = `data:image/jpeg;base64,${attendanceImg}`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080e1e"/>
      <stop offset="50%" stop-color="#050813"/>
      <stop offset="100%" stop-color="#03050a"/>
    </linearGradient>
    <radialGradient id="centerGlow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#2F8FFF" stop-opacity="0.22"/>
      <stop offset="60%" stop-color="#164e8a" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="phoneGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Drop Shadows -->
    <filter id="phoneShadow" x="-20%" y="-20%" width="140%" height="145%">
      <feDropShadow dx="0" dy="28" stdDeviation="32" flood-color="#000000" flood-opacity="0.75"/>
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#2F8FFF" flood-opacity="0.15"/>
    </filter>
    <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.5"/>
    </filter>

    <!-- Clip Paths for Phone Screens -->
    <clipPath id="screenClip1">
      <rect x="0" y="0" width="360" height="740" rx="36"/>
    </clipPath>
    <clipPath id="screenClip2">
      <rect x="0" y="0" width="360" height="740" rx="36"/>
    </clipPath>
  </defs>

  <!-- Canvas Background -->
  <rect width="1600" height="1000" fill="url(#bgGrad)"/>
  <circle cx="800" cy="460" r="600" fill="url(#centerGlow)"/>

  <!-- Subtle Studio Grid -->
  <g opacity="0.04" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="250" x2="1600" y2="250"/>
    <line x1="0" y1="500" x2="1600" y2="500"/>
    <line x1="0" y1="750" x2="1600" y2="750"/>
    <line x1="400" y1="0" x2="400" y2="1000"/>
    <line x1="800" y1="0" x2="800" y2="1000"/>
    <line x1="1200" y1="0" x2="1200" y2="1000"/>
  </g>

  <!-- Ambient Glow Behind Phones -->
  <ellipse cx="580" cy="520" rx="280" ry="340" fill="#2F8FFF" opacity="0.08" filter="blur(40px)"/>
  <ellipse cx="1020" cy="520" rx="280" ry="340" fill="#1d6fdc" opacity="0.08" filter="blur(40px)"/>

  <!-- ============================================================== -->
  <!-- PHONE 1: LEFT (ATTENDANCE REGISTER & STUDENT TELEMETRY)        -->
  <!-- ============================================================== -->
  <g transform="translate(380, 110)" filter="url(#phoneShadow)">
    <!-- Device Outer Chassis (Titanium Border) -->
    <rect x="-14" y="-14" width="388" height="768" rx="48" fill="#131926" stroke="#2a3854" stroke-width="3"/>
    <rect x="-10" y="-10" width="380" height="760" rx="44" fill="#080c14" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>

    <!-- Screen Bezel -->
    <rect x="0" y="0" width="360" height="740" rx="36" fill="#000000"/>

    <!-- Screen Image Content -->
    <g clip-path="url(#screenClip1)">
      <image href="${attendanceDataUri}" x="0" y="0" width="360" height="740" preserveAspectRatio="xMidYMid slice"/>
      <!-- Soft screen reflection overlay -->
      <rect x="0" y="0" width="360" height="740" fill="url(#phoneGlow)" pointer-events="none"/>
    </g>

    <!-- Top Dynamic Island Speaker Grill -->
    <rect x="120" y="10" width="120" height="20" rx="10" fill="#000000"/>
    <circle cx="140" cy="20" r="4" fill="#1a1a24"/>
    <circle cx="215" cy="20" r="3" fill="#0b1b36"/>

    <!-- Phone Glass Highlight -->
    <path d="M 0 36 Q 0 0 36 0 L 180 0 L 0 360 Z" fill="rgba(255,255,255,0.04)" pointer-events="none"/>
  </g>

  <!-- ============================================================== -->
  <!-- PHONE 2: RIGHT (PORTAL & USTHAD FACULTY LOGIN)                 -->
  <!-- ============================================================== -->
  <g transform="translate(860, 130)" filter="url(#phoneShadow)">
    <!-- Device Outer Chassis (Titanium Border) -->
    <rect x="-14" y="-14" width="388" height="768" rx="48" fill="#131926" stroke="#2a3854" stroke-width="3"/>
    <rect x="-10" y="-10" width="380" height="760" rx="44" fill="#080c14" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>

    <!-- Screen Bezel -->
    <rect x="0" y="0" width="360" height="740" rx="36" fill="#000000"/>

    <!-- Screen Image Content -->
    <g clip-path="url(#screenClip2)">
      <image href="${portalDataUri}" x="0" y="0" width="360" height="740" preserveAspectRatio="xMidYMid slice"/>
      <!-- Soft screen reflection overlay -->
      <rect x="0" y="0" width="360" height="740" fill="url(#phoneGlow)" pointer-events="none"/>
    </g>

    <!-- Top Dynamic Island Speaker Grill -->
    <rect x="120" y="10" width="120" height="20" rx="10" fill="#000000"/>
    <circle cx="140" cy="20" r="4" fill="#1a1a24"/>
    <circle cx="215" cy="20" r="3" fill="#0b1b36"/>

    <!-- Phone Glass Highlight -->
    <path d="M 0 36 Q 0 0 36 0 L 180 0 L 0 360 Z" fill="rgba(255,255,255,0.04)" pointer-events="none"/>
  </g>

  <!-- ============================================================== -->
  <!-- FLOATING STUDIO BADGES (STUDIO PRESENTATION TOUCHES)           -->
  <!-- ============================================================== -->

  <!-- Top Left Badge: Real-time Attendance -->
  <g transform="translate(220, 360)" filter="url(#badgeShadow)">
    <rect width="220" height="58" rx="29" fill="#0c1428" stroke="rgba(47,143,255,0.4)" stroke-width="1.5"/>
    <circle cx="30" cy="29" r="6" fill="#22c55e"/>
    <text x="46" y="27" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700">Daily Attendance</text>
    <text x="46" y="44" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="500">Live Teacher Register</text>
  </g>

  <!-- Bottom Right Badge: Parent & Faculty Portal -->
  <g transform="translate(1160, 520)" filter="url(#badgeShadow)">
    <rect width="240" height="58" rx="29" fill="#0c1428" stroke="rgba(47,143,255,0.4)" stroke-width="1.5"/>
    <circle cx="30" cy="29" r="6" fill="#2F8FFF"/>
    <text x="46" y="27" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700">DISE Portal 2026</text>
    <text x="46" y="44" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="500">Parent &amp; Faculty Access</text>
  </g>

  <!-- Header Branding Info (Top Studio Bar) -->
  <g transform="translate(800, 60)" text-anchor="middle">
    <text y="0" fill="#5eb0ff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" letter-spacing="3">ACADEMIC ERP &amp; CAMPUS TELEMETRY SYSTEM</text>
  </g>

  <!-- Bottom Brand Watermark -->
  <g transform="translate(800, 950)" text-anchor="middle">
    <text y="0" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" letter-spacing="2">DARUL IRSHAD SCHOOL OF EXCELLENCE • DISE MANAGEMENT 2026</text>
  </g>
</svg>`;

fs.writeFileSync('public/work/web/darul-irshad.svg', svg);
fs.writeFileSync('public/work/web/darul-irshad.jpg', svg);
console.log('Successfully generated high-end dual-device studio mockup for Darul Irshad!');

