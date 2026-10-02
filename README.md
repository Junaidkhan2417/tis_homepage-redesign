# Tulas International School (TIS) - Homepage Redesign

A modern, animated, high-converting redesign of the **Tula's International School** ([tis.edu.in](https://tis.edu.in/)) homepage focusing on fluid 60 FPS animations, the "Modern Gurukul" heritage, responsive layout, and an elite boarding school aesthetic.

---

## 🚀 Live Demo & Links
- **Live Demo URL:** [https://tis-homepage-redesign.vercel.app](https://tis-homepage-redesign.vercel.app) *(Deployable with Vercel, Netlify, or GitHub Pages)*
- **Public GitHub Repository:** [https://github.com/your-username/tis-homepage-redesign](https://github.com/your-username/tis-homepage-redesign)
- **Official Reference School Website:** [https://tis.edu.in/](https://tis.edu.in/)

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 (TypeScript) with Vite 8 (lightning-fast HMR and optimized production bundles)
- **Styling:** Tailwind CSS v4 (with custom CSS variables for light/dark Gurukul palettes)
- **Animations:** Framer Motion (spring physics, layout transitions, scroll reveals, interactive cursors)
- **Icons:** Lucide React
- **Micro-Interactions & Delight:** `canvas-confetti` (for festive admission inquiry submission), spring motion values
- **Accessibility:** Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`), `aria-hidden="true"` on decorative animations, `prefers-reduced-motion` fallbacks, keyboard-navigable modals

---

## ✨ Standout Features Implemented (4 of 4 Completed)

### 1. Feature A: Custom Interactive Cursor
- **Implementation:** Built using custom hook `useMousePosition` and Framer Motion spring physics (`damping: 25, stiffness: 300`).
- **Smooth 60 FPS:** Uses `transform: translate3d(-50%, -50%, 0)` driven by compositor springs to avoid layout thrashing and reflows.
- **UX & Touch Isolation:** Completely disabled on touch devices and mobile screens (`pointer: coarse` / touch detection).
- **Hover Micro-Interactions:** Automatically scales and morphs into a view indicator when hovering over interactive elements (`button`, `a`, campus facility cards, and badges).

### 2. Feature B: Scroll-Triggered Reveals
- **Implementation:** Modular `RevealOnScroll` wrapper using Framer Motion `whileInView` with `viewport={{ once: true, margin: '-30px' }}`.
- **UX Rule Adherence:** Entrance durations calibrated strictly between `0.35s` and `0.45s` to maintain smooth scrolling speed without impeding natural user flow.
- **Directions & Staggering:** Supports directional slide-ins (`up`, `down`, `left`, `right`, `scale`, `fade`) with staggered delays across statistics, pillars, and sports cards.
- **Reduced Motion:** Gracefully falls back to static visibility when `prefers-reduced-motion: reduce` is detected.

### 3. Feature C: Animated Dark/Light Theme Switcher
- **Implementation:** Custom `AnimatedThemeToggle` component with rotating Sun and Moon icons and a spring-driven sliding thumb.
- **Theme Persistence:** Stores user preference in `localStorage` (`tis-theme`) with automatic detection of system `prefers-color-scheme`.
- **Prestige Color Palettes:**
  - **Light Mode:** Warm Pearl Ivory (`#FAF9F6`), Royal TIS Crimson (`#B90124`), Imperial Gold (`#C09D59`), and Himalayan Mountain Teal (`#007A83`).
  - **Dark Mode:** Deep Nocturnal Sapphire (`#0B0F19`), Obsidian Slate (`#131B2E`), Vibrant Rose Crimson (`#E11D48`), and Radiant Gold (`#E5C07B`).

### 4. Feature D: Viewport Scroll Progress Bar
- **Implementation:** `ScrollProgress` component pinned fixed to the top viewport edge (`z-[100]`).
- **Compositor Performance:** Uses `scaleX` from `origin-left` driven by `useScroll` and `useSpring` rather than animating layout `width`.
- **Standards Compliant:** Includes mandatory `aria-hidden="true"` as per Web Accessibility Guidelines to exclude decorative elements from screen readers.
- **Styling:** Features a three-stop royal gradient matching the school's heritage colors (TIS Crimson $\rightarrow$ Imperial Gold $\rightarrow$ Mountain Teal).

---

## 🎯 High-Converting Features & UX Enhancements

1. **Admissions Inquiry Modal with OTP Simulation & Confetti:**
   - Interactive modal supporting Class IV to XII selection, contact details, simulated instant SMS OTP delivery, and a celebratory burst of confetti upon successful inquiry submission.
2. **1-on-1 Experience Day & Campus Tour Booking Modal:**
   - Enables prospective parents to schedule an on-campus physical visit (including complimentary lunch in the Annapurna dining hall) or a live 1-on-1 virtual video tour.
3. **Animated Stat Counters:**
   - 22+ Acres Campus, 8:1 Guru-Shishya ratio, 100% university acceptance, 16+ sports disciplines, and 12+ years of educational heritage that count up smoothly upon entering viewport.
4. **Interactive 16+ Sports Filter:**
   - Explore Olympic sports facilities across categories: Precision (Archery, Shooting), Equestrian (Polo, Stables), Aquatics (Heated pool), Court (Tennis, Squash, Badminton), and Field (Cricket, Football).
5. **Interactive Academic Pathways Tabs:**
   - Middle School (IV–VIII), Secondary (IX–X), and Senior Secondary (XI–XII with integrated JEE/NEET/CLAT/SAT coaching).
6. **360° Campus Facilities Lightbox:**
   - Interactive photo inspection modal showcasing classrooms, robotics laboratories, boarding suites, and the Kala Kendra amphitheatre.
7. **Floating Quick Actions:**
   - Direct WhatsApp counselor chat, admissions helpline one-tap dialer, and an animated Back-to-Top button.

---

## 📁 Component Architecture Breakdown

```
src/
├── components/
│   ├── ui/                    # Reusable UI primitives
│   │   ├── Button.tsx         # Motion button with primary, secondary, gold, outline variants
│   │   ├── Badge.tsx          # Status & category pills with pulse indicators
│   │   ├── Card.tsx           # Glassmorphic elevation cards with hover lift
│   │   ├── Modal.tsx          # Accessible modal dialog with scroll lock & backdrop blur
│   │   ├── InquiryModal.tsx   # Admissions form with OTP check & confetti celebration
│   │   └── TourBookingModal.tsx # Experience day & physical tour booking
│   ├── layout/                # Page layout drivers
│   │   ├── Navbar.tsx         # Header with ticker bar, scrollspy & mobile menu drawer
│   │   ├── Footer.tsx         # Semantic footer with CBSE disclosures & contact info
│   │   └── FloatingQuickActions.tsx # WhatsApp, phone helpline, and back-to-top trigger
│   ├── sections/              # Structured homepage sections
│   │   ├── HeroSection.tsx    # Value proposition, badges, dual CTAs & visual cards
│   │   ├── StatsRibbon.tsx    # Viewport-triggered animated metric counters
│   │   ├── AboutSection.tsx   # 3 Pillars: Mind (Manas), Body (Sharira), Soul (Atman)
│   │   ├── AcademicsSection.tsx # Classes IV-XII pathways & integrated coaching
│   │   ├── SportsSection.tsx  # 16+ Olympic sports grid with category filter
│   │   ├── BoardingLifeSection.tsx # Pastoral care, Annapurna dining & infirmary
│   │   ├── CampusTourSection.tsx # 360° visual facilities gallery & lightbox
│   │   ├── TestimonialsSection.tsx # Interactive parent & alumni quote carousel
│   │   ├── AdmissionsSection.tsx # 4-Step roadmap & fast embedded inquiry form
│   │   └── FAQSection.tsx     # Searchable & expandable accordion
│   └── animation/             # Reusable animation drivers
│       ├── ScrollProgress.tsx # Top gradient scaleX progress bar (Feature D)
│       ├── CustomCursor.tsx   # Spring physics cursor follower (Feature A)
│       ├── RevealOnScroll.tsx # Viewport scroll reveal container (Feature B)
│       ├── AnimatedThemeToggle.tsx # Sun/Moon spring theme switcher (Feature C)
│       └── AnimatedCounter.tsx# Viewport smooth number counting utility
├── hooks/                     # Custom React hooks
│   ├── useTheme.ts            # Dark/light mode state & localStorage persistence
│   ├── useMousePosition.ts    # Mouse coordinates, hover detection & touch check
│   └── useScrollProgress.ts   # Scroll progress fraction & navbar scrollspy
├── data/                      # Static copy, statistics, sports & curriculum
│   └── tisData.ts             # Official TIS assets, copy, contacts & curriculum
└── styles/
    └── index.css              # Tailwind base, typography & CSS variables
```

---

## 📦 Getting Started Locally

### Prerequisites
- Node.js (v18.0+ or v20.0+)
- npm or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/your-username/tis-homepage-redesign.git
cd tis-homepage-redesign
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
Verify the production build locally:
```bash
npm run preview
```

---

## 🚢 Deploying to Production

### Deploy on Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` from the project root and follow the prompts.
3. Or import the GitHub repository into your [Vercel Dashboard](https://vercel.com/new).

### Deploy on Netlify
1. Run `npm run build`.
2. Connect repository or drag-and-drop the `dist/` folder into Netlify.

---

## 📋 Evaluation Checklist

- [x] **Project builds locally without errors:** Verified with `npm run build` (`tsc -b && vite build` exits 0 with 0 errors).
- [x] **All 4 bonus standout features implemented:**
  - [x] Custom Cursor (Feature A)
  - [x] Scroll-Triggered Reveals (Feature B)
  - [x] Animated Dark/Light Theme Switcher (Feature C)
  - [x] Top Viewport Scroll Progress Bar (Feature D)
- [x] **Tested & responsive across viewports:** Mobile (375px), Tablet (768px), and Desktop (1280px+).
- [x] **Zero console warnings or dead code:** Clean TypeScript code with strict types.
- [x] **Brand identity retained:** Retains official TIS branding, colors (Crimson, Gold, Teal), Dehradun campus details, CBSE affiliation, and authentic copy.
- [x] **Documentation:** Comprehensive `README.md` with architecture, local setup, and stack explanations.

---

## 🏛️ School Information & Attribution
- **Institution:** Tula's International School (TIS)
- **Trust:** Rishabh Educational Trust
- **Location:** Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand), India
- **CBSE Affiliation No.:** 3530379
- **Official Website:** [https://tis.edu.in/](https://tis.edu.in/)
