# KORE — Operations, Simplified.
> Premium Portfolio Website for **KORE** — Business & Digital Solutions Company based in Chelembra, Malappuram, Kerala.  
> **Tagline:** Operations, Simplified.  
> **Positioning:** One Partner. Multiple Solutions.

---

## 🚀 Quick Start (Run Locally)

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

To test the production build locally:
```bash
npm run build
npm run start
```

---

## 🎨 Design & Aesthetic Highlights

- **Dark Theme by Default:** Deep navy-black canvas (`#060913` / `#0a0e1c`) with dark/light mode toggle stored in `localStorage`.
- **Signature Blue Accent:** High-contrast electric blue (`#2F8FFF`). No greens.
- **Typography:** English styled in *Plus Jakarta Sans* / *Inter*; Malayalam text rendered in *Noto Sans Malayalam* and *Manjari*.
- **Interactive Service-to-Work Flow:** Clicking any of the 4 service cards smoothly scrolls to the *Crafted Creations* section and automatically activates the matching category filter pill, with 400ms staggered fade & slide layout animations.
- **Project Lightbox:** Clicking any portfolio card launches an immersive modal with full details, client info, tags, and mobile touch swipe gestures.
- **Floating WhatsApp:** Always-present quick contact pill linked to `+91 70253 87768`.

---

## 📂 Project Structure

```text
kore-portfolio/
├── public/
│   └── work/                      # Place your real project image files here
│       ├── web/                   # e.g., darul-irshad.jpg, findo-web.jpg
│       ├── design/                # e.g., krewx.jpg, findo-branding.jpg
│       ├── social/                # e.g., almaniya.jpg, best-smile.jpg
│       └── packaging/             # e.g., findo-cloth-bag.jpg, findo-kids.jpg
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind directives, animations & glass effects
│   │   ├── layout.tsx             # Fonts, SEO meta tags, OpenGraph
│   │   └── page.tsx               # Main single-page coordinator
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky glass header, nav links, theme toggle
│   │   ├── Hero.tsx               # Bold headline, Malayalam badge, CTA buttons
│   │   ├── Marquee.tsx            # Continuous infinite ticker strip
│   │   ├── WhoWeAre.tsx           # Story, Chelembra roots & stats counters
│   │   ├── Services.tsx           # 4 big clickable interactive cards
│   │   ├── CraftedCreations.tsx   # Filter pills & animated portfolio grid
│   │   ├── LightboxModal.tsx      # Modal with mobile swipe navigation
│   │   ├── AboutWhyKore.tsx       # 4 pillars & concept-to-completion workflow
│   │   ├── Contact.tsx            # WhatsApp, phone, email & interactive form
│   │   ├── FloatingWhatsApp.tsx   # Floating quick chat bubble with pulse
│   │   └── Footer.tsx             # Chelembra Kerala indicator, links & copyright
│   ├── context/
│   │   └── ThemeContext.tsx       # Dark / Light theme provider
│   ├── data/
│   │   └── projects.ts            # ★ SINGLE DATA FILE FOR ALL PORTFOLIO ITEMS
│   └── types/
│       └── index.ts               # TypeScript interfaces
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 📝 How to Add or Edit Projects

All projects are stored in **one single file**: `src/data/projects.ts`.

To add a new project, simply copy an existing block inside `PROJECTS` array:

```typescript
{
  id: 'my-new-project',
  title: 'My Project Name',
  category: 'web', // 'web' | 'design' | 'social' | 'packaging'
  categoryLabel: 'Website Design',
  image: '/work/web/my-image.jpg',
  description: 'Detailed description of the project...',
  descriptionMl: 'മലയാള വിവരണം (optional)',
  client: 'Client Name',
  year: '2025',
  tags: ['Next.js', 'Tailwind', 'UI/UX'],
  link: 'https://client-site.com', // optional
}
```

> **Image Tip:** Place your image in `/public/work/<category>/`. If an image is missing or loading, KORE's card automatically displays a clean geometric vector placeholder card.

---

## 📞 Company Contact Details

- **Location:** Chelembra, Malappuram, Kerala, India
- **Phone / WhatsApp:** +91 70253 87768
- **Email:** hellokoreteam@gmail.com

