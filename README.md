# Algoremi Frontend — Technical Documentation

> Written for a mid-level engineer joining with zero prior context.  
> Target: productive and shipping in 48 hours.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Repository Structure](#2-repository-structure)
3. [Setup & Local Development](#3-setup--local-development)
4. [Architecture Decisions](#4-architecture-decisions)
5. [Component Documentation](#5-component-documentation)
6. [Design System & Styling](#6-design-system--styling)
7. [Routing & Navigation](#7-routing--navigation)
8. [State Management](#8-state-management)
9. [API Integration Layer](#9-api-integration-layer)
10. [Forms & Validation](#10-forms--validation)
11. [Performance Considerations](#11-performance-considerations)
12. [Testing Strategy](#12-testing-strategy)
13. [Error Handling & Logging](#13-error-handling--logging)
14. [Accessibility](#14-accessibility)
15. [Internationalization](#15-internationalization)
16. [Build & Deployment](#16-build--deployment)
17. [Code Conventions & Contribution Guide](#17-code-conventions--contribution-guide)
18. [Known Issues & Tech Debt](#18-known-issues--tech-debt)
19. [Decision Log](#19-decision-log)
20. [Glossary](#20-glossary)

---

## 1. Project Overview

### What It Is

Algoremi is a software house built for businesses that take their technology seriously. We design, develop, and deploy digital products — from web platforms to cloud infrastructure — that are fast, scalable, and built to last. No templates. No shortcuts. Just clean engineering.. It is a **static, multi-page React SPA** — no user auth, no CMS, no backend calls in production. Every piece of content is hardcoded in source files or the central data file.

### Who Uses It

- **Potential clients** browsing services, reading case studies, and submitting contact inquiries
- **The Algoremi team** — updating copy, adding new projects, adjusting services

### Core User Goals the Frontend Serves

| User Goal | Where It Happens |
|---|---|
| Understand what Algoremi does | Home (`/`), Services (`/services`) |
| Evaluate past work before reaching out | Portfolio (`/portfolio`), Project Detail (`/portfolio/:id`) |
| Contact the team | Contact (`/contact`) |
| Learn about the company | About (`/about`) |

### Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 (JSX, functional components only) |
| Language | JavaScript (no TypeScript) |
| Styling | Tailwind CSS v3 with custom design tokens |
| Animations | Framer Motion v11 |
| Routing | React Router v6 |
| Bundler | Vite 5 |
| Package manager | npm |
| Fonts | Google Fonts — Syne (display), DM Sans (body) |

### Browser & Device Support

| Browser | Support |
|---|---|
| Chrome 110+ | Full |
| Firefox 110+ | Full |
| Safari 16+ | Full |
| Edge 110+ | Full |
| Mobile Safari (iOS 15+) | Full |
| Chrome Android | Full |

Responsive breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px). The site is designed desktop-first with full mobile support.

### Accessibility Standard

Targeted: **WCAG 2.1 Level AA** (partial — see [Section 14](#14-accessibility) for gaps).

---

## 2. Repository Structure

```
algoremi-frontend/
├── public/                     # Static assets served at root; favicon goes here
├── src/
│   ├── App.jsx                 # Root component: BrowserRouter, route declarations, NotFound
│   ├── main.jsx                # ReactDOM.createRoot entry point
│   ├── index.css               # Tailwind directives + CSS custom properties + global utilities
│   ├── App.css                 # Mostly empty — legacy file, ignore
│   │
│   ├── assets/                 # Static images imported directly into components
│   │   ├── hero.png            # Currently unused in production build
│   │   └── images/
│   │       └── services/       # Per-service illustration PNGs (not yet wired to components)
│   │
│   ├── data/
│   │   └── ProjectData.js      # THE source of truth for all 6 projects — every section of
│   │                           # every project detail page is driven from this file
│   │
│   ├── pages/                  # One file per route. Pages are thin: they import and
│   │   ├── HomePage.jsx        # compose section components. No logic lives in pages.
│   │   ├── ServicesPage.jsx
│   │   ├── PortfolioPage.jsx
│   │   ├── ProjectPage.jsx     # Dynamic — reads :id from URL, looks up ProjectData.js
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   │
│   ├── components/
│   │   ├── layout/             # Persistent UI wrapping every page
│   │   │   ├── Navbar.jsx      # Fixed top nav, scroll shadow, mobile hamburger
│   │   │   ├── MobileMenu.jsx  # Slide-down drawer, AnimatePresence, flat link list
│   │   │   ├── Footer.jsx      # 4-col grid footer, social buttons, dynamic year
│   │   │   └── ScrollToTop.jsx # useEffect watches pathname, calls window.scrollTo(0,0)
│   │   │
│   │   ├── shared/             # Components reused across multiple pages
│   │   │   └── PageHero.jsx    # Consistent hero for Services, Portfolio, About, Contact pages
│   │   │
│   │   ├── ui/                 # Primitive building blocks with no business logic
│   │   │   ├── FadeIn.jsx      # Framer Motion scroll-triggered wrapper (direction, scale, delay)
│   │   │   ├── FadeInStagger.jsx # Stagger container + FadeInItem child pair
│   │   │   ├── SectionTag.jsx  # "◆ SERVICES" label chip — accent or light variant
│   │   │   ├── Button.jsx      # primary / outline / accent variants (currently underused)
│   │   │   └── marquee.jsx     # Duplicate/unused — see tech debt
│   │   │
│   │   ├── home/               # Section components used only on HomePage
│   │   │   ├── Hero.jsx        # Full-viewport hero with stagger mount animation
│   │   │   ├── HeroDashboardCard.jsx  # Animated bar chart card shown in hero visual
│   │   │   ├── Marquee.jsx     # CSS infinite scroll dark strip
│   │   │   ├── SplitSection.jsx       # "Why Algoremi" capability blocks + feature list
│   │   │   ├── ServicesList.jsx       # 5 service rows with hover left-bar effect
│   │   │   ├── StatementSection.jsx   # Dark "built for yesterday" belief section
│   │   │   ├── PortfolioPreview.jsx   # 3-card preview grid with asymmetric layout
│   │   │   └── CtaSection.jsx  # Reusable CTA card — accepts heading/body/button props
│   │   │
│   │   ├── services/           # Section components used only on ServicesPage
│   │   │   ├── Timeline.jsx    # Vertical timeline with gradient connector line
│   │   │   └── AltSection.jsx  # Alternating image+text split sections
│   │   │
│   │   ├── portfolio/          # Section components used only on PortfolioPage
│   │   │   ├── FeaturedProject.jsx    # Full-width 500px hero card for FinCore
│   │   │   ├── ProjectGrid.jsx        # Asymmetric 3-col CSS grid with col-span rules
│   │   │   └── ProjectCard.jsx        # Reusable card — used in grid and home preview
│   │   │
│   │   ├── project/            # Section components used only on ProjectPage (detail)
│   │   │   ├── PdHero.jsx      # Full-viewport hero with tinted bg, grid overlay, meta row
│   │   │   ├── PdStatBar.jsx   # Dark stats bar — 4-col with gradient numbers
│   │   │   ├── PdOverview.jsx  # Description + tech stack + quick stats sidebar
│   │   │   ├── PdChallenges.jsx       # 3-col challenge cards with hover top-line
│   │   │   ├── PdProcess.jsx   # Numbered process steps
│   │   │   ├── Pdresults.jsx   # Dark results grid (note: lowercase 'r' — see tech debt)
│   │   │   ├── PdTestimonial.jsx      # Centred blockquote with author attribution
│   │   │   └── PdNextProject.jsx      # "Next project" nav bar using nextProject field
│   │   │
│   │   ├── about/              # Section components used only on AboutPage
│   │   │   ├── StorySection.jsx
│   │   │   ├── ValuesGrid.jsx
│   │   │   └── TeamGrid.jsx
│   │   │
│   │   └── contact/            # Section components used only on ContactPage
│   │       ├── ContactForm.jsx # Controlled form with inline validation + success state
│   │       ├── ContactInfo.jsx # Legacy file — superseded by ContactSidebar
│   │       └── ContactSidebar.jsx     # Trust banner + contact card + expectations list
│   │
│   └── hooks/
│       ├── UseFadeIn.js        # Custom IntersectionObserver hook (currently unused — FadeIn.jsx used instead)
│       └── UseStagger.jsx      # useStagger(base, step) → delay calculator for manual stagger
│
├── index.html                  # Vite entry HTML, mounts <div id="root">
├── vite.config.js              # historyApiFallback: true for SPA routing
├── tailwind.config.js          # Custom colors, fonts, shadows, border tokens
├── postcss.config.js           # Standard: tailwindcss + autoprefixer
└── package.json
```

### Why This Structure

- **Pages are thin orchestrators** — they import section components and compose them. No logic or state lives in page files. This means you can refactor any section without touching the page.
- **Feature-folder pattern per page** — `home/`, `services/`, `portfolio/`, etc. You always know where a component lives based on where it renders.
- **`ui/` for primitives** — `FadeIn`, `SectionTag`, `Button` have no domain knowledge. They can be used anywhere.
- **`data/` is the single source of truth** — every project detail page reads from `ProjectData.js`. Adding a project means adding one object to this file. Nothing else.

---

## 3. Setup & Local Development

### Prerequisites

```
Node.js  >= 18.0.0   (tested on 22.x)
npm      >= 9.0.0
```

Check your versions:
```bash
node --version
npm --version
```

### Install

```bash
# Clone the repo
git clone <repo-url>
cd algoremi-frontend

# Install dependencies
npm install
```

### Environment Variables

This project has **no environment variables** in production. All content is static. The contact form simulates a submission with a 1.4s delay (`setTimeout`) — there is no real API endpoint. When you wire up a real backend, add:

```env
# .env.local (not committed)
VITE_CONTACT_API_URL=https://api.algoremi.com/contact
```

Then replace the `setTimeout` stub in `ContactForm.jsx` with:
```js
const res = await fetch(import.meta.env.VITE_CONTACT_API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(values),
})
```

### Run Dev Server

```bash
npm run dev
# Opens at http://localhost:5173
```

**Important:** The app has `basename='/Algoremi-frontend'` set in `BrowserRouter` in `App.jsx`. This was set for GitHub Pages deployment. If you're running locally or deploying to a root domain, **remove the `basename` prop** or routes will 404.

```jsx
// App.jsx — change this:
<BrowserRouter basename='/Algoremi-frontend'>

// To this for local / root domain deployment:
<BrowserRouter>
```

### Build for Production

```bash
npm run build
# Output: dist/
```

### Preview Production Build

```bash
npm run preview
# Serves dist/ at http://localhost:4173
```

### Common Setup Errors

| Error | Cause | Fix |
|---|---|---|
| Routes return 404 on refresh | `historyApiFallback` not set | Verify `vite.config.js` has `server: { historyApiFallback: true }` |
| Fonts don't load | No internet / CSP blocking Google Fonts | Check network; fonts are loaded via `@import` in `index.css` |
| `grad-text` class not working | `index.css` not imported | Verify `import './index.css'` is in `main.jsx` |
| Port 5173 in use | Another Vite dev server running | `npm run dev -- --port 3000` |
| White flash before page loads | Font loading delay | Expected — fonts are not self-hosted |

---

## 4. Architecture Decisions

### Component Architecture: Feature-Folder + UI Primitives

**Pattern:** Pages compose feature-folder section components. UI primitives live separately and have no domain knowledge.

**Why not atomic design?** Atomic design (atoms/molecules/organisms) adds categorisation overhead for a site this size. Feature folders give immediate location clarity — if it renders on the services page, it's in `components/services/`.

**Why not a single `components/` flat folder?** With 30+ components, a flat folder becomes unsearchable. The feature folder pattern scales linearly.

### State Management: Local useState Only

There is no global state library (no Redux, no Zustand, no Context). Every stateful piece is:
- `Navbar.jsx` — `scrolled`, `mobileOpen`
- `ContactForm.jsx` — `values`, `errors`, `touched`, `loading`, `submitted`
- `PortfolioPage` (if filter is added) — `activeFilter`

**Why no global state?** There is nothing to share globally. User auth doesn't exist. Cart doesn't exist. The only cross-cutting state is the current route, which React Router provides via `useLocation()`.

### Data Fetching: None — Static Data File

All project data lives in `src/data/ProjectData.js` as a plain JS array. No API calls, no async loading, no loading states for content.

**Why?** The content rarely changes. A CMS or API call would add latency, complexity, and a network dependency for no user benefit. When projects need updating, a developer edits `ProjectData.js` and deploys.

**When to change this:** If the client wants to manage projects without a deploy, integrate a headless CMS (Contentful, Sanity) and replace the static import with an API call wrapped in React Query or SWR.

### Routing: React Router v6 with `historyApiFallback`

Client-side routing. All routes are declared in `App.jsx`. No lazy loading, no route guards (no auth to guard).

**Why React Router v6?** Industry standard, well-documented, hooks-based API (`useParams`, `useNavigate`, `useLocation`) that avoids prop drilling.

### Animation: Framer Motion

All scroll-triggered animations use `whileInView` via the `FadeIn` wrapper. Mount-triggered animations (Hero, PageHero, PdHero) use `animate` directly.

**Why Framer Motion over CSS?** The design requires programmatic stagger, directional variants, and `AnimatePresence` for form state transitions. CSS alone can't handle `AnimatePresence` cleanly.

---

## 5. Component Documentation

### `FadeIn` — `src/components/ui/FadeIn.jsx`

**Purpose:** Wraps any content in a scroll-triggered entrance animation using Framer Motion's `whileInView`.

**Props:**

| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | — | ✅ | Content to animate |
| `delay` | `number` | `0` | ❌ | Seconds before animation starts |
| `duration` | `number` | `0.6` | ❌ | Animation duration in seconds |
| `direction` | `'up' \| 'down' \| 'left' \| 'right' \| 'none'` | `'up'` | ❌ | Translate direction |
| `distance` | `number` | `24` | ❌ | Translate distance in px |
| `scale` | `boolean` | `false` | ❌ | Add `0.97 → 1` scale effect |
| `once` | `boolean` | `true` | ❌ | Only animate once (don't re-trigger on scroll back) |
| `amount` | `number` | `0.08` | ❌ | Viewport threshold to trigger (0–1) |
| `className` | `string` | `''` | ❌ | Forwarded to the wrapping `motion.div` |

**Usage:**
```jsx
// Basic — fades up on scroll
<FadeIn>
  <h2>Section Heading</h2>
</FadeIn>

// Directional with delay
<FadeIn direction="left" distance={32} delay={0.15}>
  <SplitVisual />
</FadeIn>

// Scale entrance for cards
<FadeIn scale>
  <CtaCard />
</FadeIn>
```

**Edge cases:**
- `direction="none"` with `distance` — distance is ignored, pure opacity fade
- If `once={false}`, the animation re-triggers every time the element re-enters the viewport. Avoid for hero sections
- Do NOT wrap a `motion.div` directly inside `FadeIn` if that inner element also has `whileInView` — you'll get double animations

**Does NOT do:** Managing `height` animations, exit animations, or layout animations. Use `AnimatePresence` directly for those.

---

### `FadeInStagger` + `FadeInItem` — `src/components/ui/FadeInStagger.jsx`

**Purpose:** Container/child pair that automatically staggers entrance animations for a list of items. The parent triggers `whileInView` and staggerChildren cascades to each `FadeInItem`.

**`FadeInStagger` Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `stagger` | `number` | `0.08` | Seconds between each child animation |
| `once` | `boolean` | `true` | Trigger once only |
| `amount` | `number` | `0.08` | Viewport threshold |
| `className` | `string` | `''` | Forwarded to wrapper div |

**`FadeInItem` Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | `''` | Forwarded to the motion.div — use for grid span classes |

**Usage:**
```jsx
<FadeInStagger stagger={0.1} className="grid grid-cols-3 gap-4">
  {items.map((item) => (
    <FadeInItem key={item.id}>
      <Card data={item} />
    </FadeInItem>
  ))}
</FadeInStagger>
```

**Critical:** Grid span classes like `lg:col-span-2` must go on `FadeInItem`, not on the child component, because `FadeInItem` renders the `motion.div` that participates in the grid:
```jsx
// ✅ Correct
<FadeInItem className="lg:col-span-2">
  <ProjectCard />
</FadeInItem>

// ❌ Wrong — span applied to inner element which is not a grid child
<FadeInItem>
  <ProjectCard className="lg:col-span-2" />
</FadeInItem>
```

---

### `SectionTag` — `src/components/ui/SectionTag.jsx`

**Purpose:** Renders the small "◆ LABEL" eyebrow chip above section headings.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `string` | — | Label text (e.g. "Our Work") |
| `light` | `boolean` | `false` | Use `accent-g` (green) instead of `accent` (blue) — for dark backgrounds |

**Usage:**
```jsx
<SectionTag>Our Work</SectionTag>           // blue, light bg
<SectionTag light>Our Belief</SectionTag>   // green, dark bg
```

---

### `PageHero` — `src/components/shared/PageHero.jsx`

**Purpose:** Consistent entry hero for interior pages (Services, Portfolio, About, Contact). Fires on mount, not scroll.

**Props:**

| Prop | Type | Required | Description |
|---|---|---|---|
| `tag` | `string` | ✅ | Eyebrow label text |
| `title` | `string` | ✅ | Main H1 heading |
| `subtitle` | `string` | ✅ | Supporting paragraph |

**Usage:**
```jsx
<PageHero
  tag="Our Work"
  title="Projects That Changed How Companies Operate"
  subtitle="Each project is a case study in solving a real business problem."
/>
```

---

### `CtaSection` — `src/components/home/CtaSection.jsx`

**Purpose:** Reusable call-to-action card used at the bottom of Home, Services, Portfolio, and About pages.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `heading` | `string` | `'Ready to Move at a Different Speed?'` | Card heading |
| `body` | `string` | (home copy) | Supporting paragraph |
| `ctaLabel` | `string` | `'Book a Strategy Call'` | Primary button text |
| `ctaTo` | `string` | `'/contact'` | Primary button route |
| `single` | `boolean` | `false` | `true` = hide secondary button |
| `secondaryLabel` | `string` | `'See Case Studies'` | Secondary button text |
| `secondaryTo` | `string` | `'/portfolio'` | Secondary button route |

**Usage:**
```jsx
// Home page (two buttons, default copy)
<CtaSection />

// Services page (single button, custom copy)
<CtaSection
  heading="Not Sure Which Service You Need?"
  body="Start with a 45-minute discovery call."
  ctaLabel="Schedule Discovery Call"
  single
/>

// About page (two buttons, both custom)
<CtaSection
  heading="Come Work With People Who Care"
  body="If you want a vendor, there are plenty..."
  ctaLabel="Start a Conversation"
  ctaTo="/contact"
  secondaryLabel="View Our Work"
  secondaryTo="/portfolio"
/>
```

---

### `ProjectCard` — `src/components/portfolio/ProjectCard.jsx`

**Purpose:** Single project card used in the portfolio grid and the home page preview.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `project` | `ProjectObject` | — | Full project object from `ProjectData.js` |
| `tall` | `boolean` | `false` | Increases image area height from 180px to 220px — used for span-2 cards |

**Behaviour:** Clicking anywhere navigates to `/portfolio/${project.id}` via `useNavigate`.

---

### `ContactForm` — `src/components/contact/ContactForm.jsx`

**Purpose:** Controlled form with touch-on-blur validation, loading state, and success screen transition.

**No props** — fully self-contained. Form state, validation, and submission logic are all internal.

**Validation rules:**

| Field | Rule |
|---|---|
| `firstName` | `trim().length >= 2` |
| `lastName` | `trim().length >= 2` |
| `email` | Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` |
| `company` | `trim().length >= 2` |
| `service` | Non-empty (select) |
| `message` | `trim().length >= 20` |

**States:** `idle` → `loading` (1.4s simulated) → `submitted` (success screen). Reset via "Send another message" link.

---

### `PdHero` — `src/components/project/PdHero.jsx`

**Purpose:** Full-viewport hero for project detail pages. Tinted background derived from `project.color`, grid overlay, big bg emoji, animated meta row.

**Props:**

| Prop | Type | Description |
|---|---|---|
| `project` | `ProjectObject` | Full project object |

**Animation strategy:** Uses `animate` (not `whileInView`) with manual `delay` offsets — fires on mount since it's always above the fold.

---

## 6. Design System & Styling

### Approach

**Tailwind CSS v3** utility-first, configured with custom design tokens in `tailwind.config.js`. Global CSS custom properties (`--ink`, `--accent`, etc.) are defined in `index.css` and also mapped into Tailwind's color scale so you can use either `var(--accent)` in inline styles or `text-accent` as a utility class.

### Color Tokens

Defined in both `index.css` (as CSS vars) and `tailwind.config.js` (as Tailwind colors):

| Token | Hex | CSS Var | Tailwind Class | Usage |
|---|---|---|---|---|
| `bg` | `#F5F7FC` | `var(--bg)` | `bg-bg` | Page background |
| `bg2` | `#EAEEF8` | `var(--bg2)` | `bg-bg2` | Input backgrounds, block fills |
| `bg3` | `#DDE3F0` | `var(--bg3)` | `bg-bg3` | Decorative step numbers, scrollbar |
| `card` | `#FFFFFF` | `var(--card)` | `bg-card` | Card backgrounds |
| `ink` | `#0B0F1A` | `var(--ink)` | `text-ink` | Primary text, dark buttons |
| `ink2` | `#1C2338` | `var(--ink2)` | `text-ink2` | Secondary dark text |
| `muted` | `#637191` | `var(--muted)` | `text-muted` | Supporting text, labels |
| `accent` | `#0066FF` | `var(--accent)` | `text-accent` | Primary brand blue |
| `accent-g` | `#00C48C` | `var(--accent-g)` | `text-accent-g` | Secondary green (CTAs on dark bg) |
| `accent-r` | `#FF3B30` | `var(--accent-r)` | `text-[#FF3B30]` | Error states in forms |

### Gradient

The primary brand gradient is defined as a CSS var — **do not hardcode it inline**:

```css
/* index.css */
--grad: linear-gradient(135deg, #00C48C 0%, #0066FF 100%);
```

To apply gradient text, use the `.grad-text` utility class:
```jsx
<span className="grad-text">Think Ahead</span>
```

To use the gradient as a background on a div:
```jsx
<div style={{ background: 'var(--grad)' }} />
```

Tailwind's `bg-grad` shorthand is defined in `tailwind.config.js` under `backgroundImage` but has limited JIT support for arbitrary gradient values — prefer `style={{ background: 'var(--grad)' }}` for reliability.

### Typography Scale

| Use case | Tailwind | Example value |
|---|---|---|
| Display headings | `font-display` | Syne, 800 weight |
| Body text | `font-body` | DM Sans, 400–600 weight |
| Hero H1 | `text-[clamp(2.8rem,5vw,4.2rem)]` | Fluid sizing |
| Section H2 | `text-[clamp(2rem,3.5vw,2.8rem)]` | Fluid sizing |
| Sub-headings | `text-[1.2rem]` | Fixed |
| Body copy | `text-[0.925rem]` | Fixed |
| Labels/captions | `text-[0.72rem]` to `text-[0.82rem]` | Fixed small |

Use `clamp()` for headings that need to scale between mobile and desktop. Use fixed `rem` for small text that should not scale.

### Spacing System

Tailwind defaults. Sections use `py-[100px] px-[5%]` — **the 5% horizontal padding is consistent across every section** and creates the responsive side gutter without media query breakpoints.

### Border Tokens

```js
// tailwind.config.js
borderColor: {
  DEFAULT: 'rgba(11,15,26,0.08)',  // subtle dividers, card edges
  strong:  'rgba(11,15,26,0.14)',  // more visible borders, form inputs
}
```

Use `border-DEFAULT` and `border-strong` — never hardcode `rgba` values in component files.

### Shadow Tokens

```js
boxShadow: {
  card: '0 4px 24px rgba(11,15,26,0.08)',
  lg:   '0 16px 60px rgba(11,15,26,0.12)',
}
```

### Global Utilities (in `index.css`)

| Class | Effect |
|---|---|
| `.grad-text` | Gradient text fill using `--grad` |
| `.text-accent-g` | Green accent text shorthand |

### Do's and Don'ts

**Do:**
- Use design tokens (`text-ink`, `bg-card`) — never hardcode hex values
- Use `var(--grad)` in inline styles for gradient backgrounds
- Use `clamp()` for headings, fixed rem for body text
- Keep `px-[5%]` as the horizontal padding standard for all sections

**Don't:**
- Don't add new colors in component files — add them to `tailwind.config.js` and `index.css` together
- Don't use `text-black` or `text-white` for content — use `text-ink` and `text-card`/`text-white` respectively
- Don't create one-off shadow values — use `shadow-card` or `shadow-lg`

### How to Add a New Design Token

1. Add the CSS variable to `index.css` under `:root {}`
2. Add the corresponding color to `tailwind.config.js` under `theme.extend.colors`
3. Use `text-{name}`, `bg-{name}`, `border-{name}` as Tailwind utilities

```css
/* index.css */
:root {
  --purple: #8B5CF6;
}
```

```js
// tailwind.config.js
colors: {
  purple: '#8B5CF6',
}
```

---

## 7. Routing & Navigation

### Full Route Map

| Path | Component | Notes |
|---|---|---|
| `/` | `HomePage` | Default route |
| `/services` | `ServicesPage` | Static content |
| `/portfolio` | `PortfolioPage` | Reads all projects from `ProjectData.js` |
| `/portfolio/:id` | `ProjectPage` | Dynamic — `id` maps to `project.id` in `ProjectData.js` |
| `/about` | `AboutPage` | Static content |
| `/contact` | `ContactPage` | Contains `ContactForm` |
| `*` | `NotFound` (inline in `App.jsx`) | Catch-all 404 |

**Note:** The project detail route is declared in `App.jsx` as `ProjectPage` but the file is `src/pages/ProjectPage.jsx` — there is no `ProjectDetailPage.jsx` import in the actual App (the documentation session used this name; check App.jsx for the actual import name).

### Dynamic Routes

`/portfolio/:id` — the `id` param is used by `ProjectPage` to call `getProject(id)` from `ProjectData.js`. If no match is found, the page renders an inline "Project not found" state with a back button rather than navigating to a 404 route.

```jsx
// ProjectPage.jsx
const { id }  = useParams()
const project = getProject(id)     // returns undefined if id not found
if (!project) { return <NotFoundInline /> }
```

Valid `id` values (from `ProjectData.js`): `fincore`, `greenops`, `launchkit`, `medsync`, `logichain`, `targetiq`.

### Protected Routes

**None.** There is no authentication. All routes are publicly accessible.

### Navigation Patterns

**Declarative (links):** Use `<Link to="/path">` from React Router for standard navigation. Used in `Navbar`, `Footer`, `MobileMenu`.

**Programmatic (actions):** Use `useNavigate()` for button-triggered navigation. Used in `ProjectCard`, `FeaturedProject`, `PdNextProject`, `CtaSection`.

```jsx
// Link — for nav items
import { Link } from 'react-router-dom'
<Link to="/portfolio">View Work</Link>

// useNavigate — for buttons
const nav = useNavigate()
<button onClick={() => nav('/contact')}>Get Started</button>
```

**Active state detection:**
```jsx
const isActive = (to) =>
  to === '/' ? pathname === '/' : pathname.startsWith(to)
```
The `startsWith` check means `/services` is active when on `/services/anything` — correct for nested routes if added later.

### `ScrollToTop`

`ScrollToTop.jsx` is rendered inside `BrowserRouter` in `App.jsx`. It watches `pathname` changes and calls `window.scrollTo(0, 0)` — this is what resets scroll position on every route change.

### `basename` Warning

`App.jsx` currently has `<BrowserRouter basename='/Algoremi-frontend'>`. This was set for GitHub Pages deployment at `username.github.io/Algoremi-frontend`. If deploying to a root domain (e.g., `algoremi.com`), remove the `basename` prop or all route matching will break.

---

## 8. State Management

### What State Exists

| Location | State | Why local |
|---|---|---|
| `Navbar.jsx` | `scrolled`, `mobileOpen` | UI state, not needed outside nav |
| `ContactForm.jsx` | `values`, `errors`, `touched`, `loading`, `submitted` | Form lifecycle, not needed elsewhere |
| `PortfolioPage.jsx` (future) | `activeFilter` | If filter tabs added, stays in page component |

### No Global State

There is no Context, Redux, Zustand, or any other global store. The decision is deliberate — this is a marketing site with no cross-component state sharing needs.

### Async State Handling

The only async operation is the contact form submission (currently simulated). The pattern:

```jsx
const [loading,   setLoading]   = useState(false)
const [submitted, setSubmitted] = useState(false)

const handleSubmit = async (e) => {
  e.preventDefault()
  // ... validation ...
  setLoading(true)
  try {
    await submitForm(values)           // real API call when wired
    setSubmitted(true)
  } catch (err) {
    // TODO: surface error to user
    console.error(err)
  } finally {
    setLoading(false)
  }
}
```

The form renders three mutually exclusive states: `idle` (form visible), `loading` (button disabled + spinner), `submitted` (success screen via `AnimatePresence`).

---

## 9. API Integration Layer

### Current State

**There are no API calls in production.** All data is static.

### Contact Form Endpoint (Stub)

`ContactForm.jsx` line ~90 contains:
```js
await new Promise((r) => setTimeout(r, 1400))
```

This simulates a 1.4s API call. Replace with a real call when ready:

```js
const res = await fetch(import.meta.env.VITE_CONTACT_API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(values),
})
if (!res.ok) throw new Error(`HTTP ${res.status}`)
```

### Adding a Real API Layer

When the project needs real API integration (e.g., CMS for projects, contact form backend), the recommended pattern:

1. Create `src/api/` directory
2. One file per resource: `src/api/contact.js`, `src/api/projects.js`
3. Each file exports async functions, not raw `fetch` calls in components:

```js
// src/api/contact.js
const BASE = import.meta.env.VITE_API_BASE_URL

export async function submitContact(data) {
  const res = await fetch(`${BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message ?? `Request failed: ${res.status}`)
  }
  return res.json()
}
```

---

## 10. Forms & Validation

### Library

**No library.** Validation is manual with a `validators` object:

```js
const validators = {
  firstName: (v) => v.trim().length < 2  ? 'First name is required' : '',
  email:     (v) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Enter a valid email' : '',
  // ...
}
```

Each validator is a function `(value: string) => errorString`. An empty string means no error.

### Touch-on-Blur Pattern

Fields show errors only after they've been touched (blurred). This avoids showing errors before the user has interacted:

```js
const handleBlur = (e) => {
  const { name, value } = e.target
  setTouched((t) => ({ ...t, [name]: true }))          // mark as touched
  setErrors((er) => ({ ...er, [name]: validateField(name, value) })) // validate
}
```

On submit, all fields are force-touched so every unvisited invalid field shows an error immediately.

### Error Display

Errors slide in below the field using `AnimatePresence`:

```jsx
<AnimatePresence>
  {touched && error && (
    <motion.p
      key="err"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="text-[11px] text-[#E24B4A]"
    >
      {error}
    </motion.p>
  )}
</AnimatePresence>
```

### Adding a New Form Field

1. Add field name to `INITIAL` object
2. Add validator to `validators` object
3. Add `Field` wrapper + input in JSX
4. Pass `name`, `value`, `onChange`, `onBlur` to the input

---

## 11. Performance Considerations

### Bundle

No code splitting is configured. The entire app ships in one bundle. For a marketing site of this size (6 pages, no heavy libraries except Framer Motion), this is acceptable. Bundle is approximately 350–450kb gzipped.

If the site grows, add route-based lazy loading:
```jsx
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
// Wrap routes in <Suspense fallback={<LoadingScreen />}>
```

### Images

There are no user-uploaded images in production. The `src/assets/images/services/` directory contains PNGs that are **not yet used** in any component. When wired up, use Vite's asset pipeline (imported images get content-hashed filenames automatically):

```jsx
import apiDevImg from '../assets/images/services/apiDev.png'
<img src={apiDevImg} alt="API Development" />
```

Do NOT use public folder paths like `/assets/image.png` for imported assets — they won't be hashed.

### Animation Performance

Framer Motion's `whileInView` uses `IntersectionObserver` under the hood — it's not polling. However, avoid animating `width`, `height`, or `top/left` — these trigger layout. All animations in this project use `transform` (translate, scale) and `opacity` — GPU-composited and cheap.

### Google Fonts

Fonts are loaded via `@import` in `index.css`. This blocks the critical rendering path slightly. If performance becomes an issue, move font loading to a `<link rel="preconnect">` + `<link rel="stylesheet">` in `index.html` instead, and add `font-display: swap`.

### What to Avoid

- Do not add `whileInView` animations to elements already in the viewport on load (hero sections) — use `animate` directly
- Do not import entire icon libraries — this codebase uses inline SVG and emoji for icons
- Do not use `transform: translateZ(0)` as a GPU hack — it creates new stacking contexts that can break `z-index` in the nav

---

## 12. Testing Strategy

### Current State

**No tests exist.** This is the most significant piece of tech debt.

### Recommended Setup (to add)

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

Add to `vite.config.js`:
```js
test: {
  environment: 'jsdom',
  globals: true,
  setupFiles: './src/test/setup.js',
}
```

### What to Test First

| Priority | Test | Why |
|---|---|---|
| 1 | `ContactForm` validation | Most logic in the entire codebase lives here |
| 2 | `getProject(id)` in `ProjectData.js` | Drives the entire detail page — bad data breaks a page |
| 3 | `Navbar` active state | `isActive()` logic has edge cases |
| 4 | `ProjectPage` with unknown id | Should render not-found state, not crash |

### Example Test (ContactForm validation)

```jsx
// src/components/contact/__tests__/ContactForm.test.jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ContactForm from '../ContactForm'

const renderForm = () =>
  render(<MemoryRouter><ContactForm /></MemoryRouter>)

test('shows email error after blur with invalid value', async () => {
  renderForm()
  const emailInput = screen.getByPlaceholderText('john@company.com')
  fireEvent.blur(emailInput)                    // touch it
  expect(await screen.findByText('Enter a valid email')).toBeInTheDocument()
})

test('shows all errors on submit with empty form', async () => {
  renderForm()
  fireEvent.click(screen.getByText('Send message →'))
  expect(await screen.findByText('First name is required')).toBeInTheDocument()
  expect(await screen.findByText('Enter a valid email')).toBeInTheDocument()
})
```

---

## 13. Error Handling & Logging

### Global Error Boundary

**None exists.** If a component throws during render, the entire app white-screens. Add one:

```jsx
// src/components/ErrorBoundary.jsx
import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg">
          <p className="text-muted">Something went wrong. Please refresh.</p>
        </div>
      )
    }
    return this.props.children
  }
}
```

Wrap `App.jsx`:
```jsx
<ErrorBoundary>
  <BrowserRouter>...</BrowserRouter>
</ErrorBoundary>
```

### Runtime Errors

Currently unhandled. The only potential runtime errors are:

1. **Unknown project ID** — handled inline in `ProjectPage.jsx` (renders not-found state)
2. **Contact form submission** — `try/catch` exists but error is only `console.error`'d, not surfaced to the user. Add a `formError` state and display a visible error message

### Logging

No logging service (Sentry, LogRocket, etc.) is integrated. For production, add Sentry:

```bash
npm install @sentry/react
```

```js
// main.jsx
import * as Sentry from '@sentry/react'
Sentry.init({ dsn: import.meta.env.VITE_SENTRY_DSN })
```

---

## 14. Accessibility

### Target

WCAG 2.1 Level AA (partially met — gaps documented below).

### What's Done

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h4>` used appropriately
- `aria-label` on hamburger button: `aria-label="Toggle navigation"`
- `aria-expanded` on hamburger button tied to `mobileOpen` state
- `aria-hidden` on decorative elements (background glows, emoji overlays)
- Form `<label>` elements linked to inputs via wrapping (not `htmlFor` — see gap below)
- `noValidate` on form to suppress native browser validation in favour of custom messages
- Color contrast: `text-muted` (#637191) on white (#FFFFFF) = 4.6:1 — passes AA for normal text

### Known Gaps

| Gap | Impact | Fix |
|---|---|---|
| No `htmlFor` / `id` on form fields | Screen readers may not associate labels with inputs | Add `id` to each input and `htmlFor` to each `<label>` |
| Project cards have no `role` or `aria-label` | Clickable `div` is not a button — keyboard users can't activate | Replace outer `motion.div` with `motion.button` or add `role="button"` + `tabIndex={0}` + `onKeyDown` handler |
| No skip-navigation link | Keyboard users must tab through entire nav on every page | Add `<a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>` before `<Navbar>` |
| `grad-text` on white bg | `-webkit-text-fill-color: transparent` hides text in some high-contrast modes | Test in Windows High Contrast Mode |
| No focus ring styling | Default Tailwind removes focus outlines | Add `focus-visible:ring-2 focus-visible:ring-accent` to interactive elements |

### How to Audit

```bash
npm install -D @axe-core/react
```

Add to `main.jsx` in development only:
```js
if (import.meta.env.DEV) {
  const axe = await import('@axe-core/react')
  axe.default(React, ReactDOM, 1000)
}
```

Also run Lighthouse in Chrome DevTools (Accessibility tab) against each page.

---

## 15. Internationalization

**Not implemented.** The site is English-only. No i18n library is installed.

If internationalization is needed in future, recommended approach: `react-i18next` with JSON translation files per locale in `src/locales/`. All hardcoded strings in components would need to be extracted to translation keys.

Given that all content is in `ProjectData.js` and component files, the extraction effort would be significant. Prioritise this only if a non-English market is targeted.

---

## 16. Build & Deployment

### Build Commands

```bash
# Development
npm run dev                    # Vite dev server with HMR at localhost:5173

# Production build
npm run build                  # Outputs to dist/

# Preview production build locally
npm run preview                # Serves dist/ at localhost:4173
```

### Build Output

```
dist/
├── index.html                 # Entry point
├── assets/
│   ├── index-[hash].js        # Main bundle (React + all components)
│   └── index-[hash].css       # Extracted Tailwind CSS
```

Vite automatically hashes filenames for long-term cache busting.

### GitHub Pages Deployment (Current)

The project is configured for GitHub Pages with `basename='/Algoremi-frontend'` in `App.jsx`.

```bash
# Build then push dist/ to gh-pages branch
npm run build
# Use gh-pages package or GitHub Actions
```

Add to `package.json` for manual deploy:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

```bash
npm install -D gh-pages
npm run deploy
```

### Root Domain Deployment (e.g., Vercel, Netlify)

1. Remove `basename` from `BrowserRouter` in `App.jsx`
2. Add `_redirects` file to `public/` (Netlify) or configure rewrites (Vercel):

**Netlify (`public/_redirects`):**
```
/*  /index.html  200
```

**Vercel (`vercel.json`):**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

3. Set build command: `npm run build`
4. Set output directory: `dist`

### Environment Variable Injection

Vite injects env vars at build time. Only vars prefixed with `VITE_` are exposed to the client:

```bash
VITE_CONTACT_API_URL=https://api.algoremi.com/contact npm run build
```

Access in code: `import.meta.env.VITE_CONTACT_API_URL`

### Rollback

GitHub Pages: push the previous commit's `dist/` output to the `gh-pages` branch.

Vercel/Netlify: both platforms retain all deployment history — roll back via their dashboard in one click.

---

## 17. Code Conventions & Contribution Guide

### File Naming

| Type | Convention | Example |
|---|---|---|
| Component files | PascalCase | `ProjectCard.jsx` |
| Page files | PascalCase | `PortfolioPage.jsx` |
| Data files | PascalCase | `ProjectData.js` |
| Hook files | PascalCase with `Use` prefix | `UseStagger.jsx` |
| CSS | kebab-case | `index.css` |

**Note:** The project currently has inconsistencies — `Pdresults.jsx` (lowercase r), `marquee.jsx` (lowercase), `UseFadeIn.js` (mixed case). Follow PascalCase for all new files. Fix the existing ones opportunistically.

### Component Conventions

```jsx
// 1. Named exports for internal components in the same file
function ServiceRow({ service }) { ... }    // internal, not exported

// 2. Default export for the main component at file bottom
export default function ServicesList() { ... }

// 3. Data/config at the top of the file before the component
const services = [...]

// 4. Props destructured in function signature with defaults
export default function FadeIn({
  delay = 0,
  direction = 'up',
  className = '',
  children,
}) { ... }
```

### Import Order

```jsx
// 1. React built-ins
import { useState, useEffect } from 'react'

// 2. Third-party libraries
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

// 3. Internal — components
import FadeIn from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'

// 4. Internal — data
import { projects } from '../../data/ProjectData'
```

### Tailwind Class Ordering

Group classes logically, not alphabetically:
```jsx
// Layout → Positioning → Sizing → Spacing → Typography → Colors → Border → Effects
className="
  relative flex items-center
  w-full max-w-[1200px]
  px-[5%] py-[100px]
  font-display text-[2rem] font-bold
  text-ink bg-card
  border border-DEFAULT rounded-2xl
  shadow-card transition-all duration-300
"
```

### Git Branch Naming

```
feature/contact-form-backend
fix/navbar-mobile-close-on-route-change
chore/update-project-data-logichain
docs/add-component-documentation
```

### Commit Messages

```
feat: add filter tabs to portfolio page
fix: correct isActive logic for nested routes
chore: update ProjectData.js with TargetIQ results
refactor: extract ProjectCard from PortfolioPreview
```

### Adding a New Project

1. Open `src/data/ProjectData.js`
2. Add a new object to the `projects` array following the exact same shape as existing entries
3. Set `featured: false` unless this replaces FinCore as the featured project
4. Update the previous last project's `nextProject` and `nextTitle` to point to the new one
5. Update the new project's `nextProject` to point back to `fincore` (circular chain)
6. No other files need changing — the detail page, portfolio grid, and home preview all derive from this data

### Adding a New Page

1. Create `src/pages/NewPage.jsx`
2. Create section components in a new `src/components/newpage/` folder
3. Add the route in `App.jsx`
4. Add the nav link in `Navbar.jsx`'s `navLinks` array and `MobileMenu.jsx`

### PR Process

- Keep PRs focused — one feature or fix per PR
- Test at mobile (375px), tablet (768px), and desktop (1280px) before requesting review
- Run `npm run build` before submitting — ensure no build errors
- Assign one reviewer minimum

---

## 18. Known Issues & Tech Debt

### Active Bugs

| Bug | Location | Workaround |
|---|---|---|
| `basename='/Algoremi-frontend'` breaks root domain deployment | `App.jsx` line 7 | Remove `basename` prop when deploying to root domain |
| `ContactForm` submission error is silently swallowed | `ContactForm.jsx` catch block | `console.error` only — no user-facing error message |
| `Pdresults.jsx` filename is inconsistent (lowercase r) | `src/components/project/` | Import must use `Pdresults` (lowercase) to match — fix the filename when touching this file |
| `ContactInfo.jsx` is orphaned (superseded by `ContactSidebar.jsx`) | `src/components/contact/` | Dead file, safe to delete |
| `UseFadeIn.js` hook is never used | `src/hooks/` | `FadeIn.jsx` uses Framer Motion directly — this custom hook is redundant |
| `marquee.jsx` (lowercase) duplicates `Marquee.jsx` | `src/components/ui/` | Dead file, safe to delete |
| `src/assets/hero.png` + `images/services/` not used | `src/assets/` | Files exist, no component imports them |

### Tech Debt

| Area | Debt | Priority |
|---|---|---|
| No tests | Zero test coverage — validation logic, routing, data helpers are untested | High |
| No error boundary | App white-screens on any unhandled render error | High |
| `/portfolio/:id` route not in `App.jsx` | `ProjectPage` exists and `ProjectData.js` has `getProject()` but `App.jsx` only has 5 routes — no dynamic route declared | **Critical — fix immediately** |
| Form submission is a stub | `setTimeout` simulation — real API call not wired | Medium |
| No accessibility audit | Known a11y gaps in click handlers, focus management | Medium |
| Self-hosted fonts | Google Fonts over CDN adds ~200ms on cold load | Low |
| No Sentry/error tracking | Production errors invisible | Low |
| `App.css` is unused | Legacy file from Vite scaffold | Low (delete it) |

### Do Not Touch Without Senior Review

- `tailwind.config.js` — changing border or color tokens will cascade across all components
- `index.css` CSS custom properties — same risk
- `BrowserRouter basename` — affects all routing across the app
- `ProjectData.js` `id` fields — changing an ID breaks all `/portfolio/:id` URLs and `nextProject` references

---

## 19. Decision Log

| Decision | Context | Options Considered | Why Chosen | Date |
|---|---|---|---|---|
| Tailwind CSS | Needed consistent styling without a design library | Tailwind, CSS Modules, styled-components, plain CSS | Fastest for utility-first layout, JIT purges unused CSS, easy token extension | Project start |
| Framer Motion | Needed scroll-triggered animations and AnimatePresence for form transitions | CSS animations, GSAP, React Spring, Framer Motion | Best `whileInView` API, excellent AnimatePresence for conditional rendering, good docs | Project start |
| React Router v6 | SPA routing | Next.js, Remix, React Router | Site is pure frontend with no SSR/SSG needs — React Router is the minimal correct choice | Project start |
| Static data file over CMS | Project content needs to be structured and queryable | Contentful, Sanity, hardcoded in components, central JS file | CMS adds cost, API latency, and auth complexity for content that changes rarely. Central JS file is version-controlled and instantly queryable | Project start |
| No TypeScript | Developer preference / project timeline | TypeScript, JavaScript | JS is faster to write for a fixed-scope marketing site. TypeScript would add value if the codebase grows significantly | Project start |
| Feature-folder components | 30+ components needed organisation | Flat `components/`, atomic design, feature folders | Flat becomes unsearchable at scale. Atomic adds overhead without benefit. Feature folders give immediate location clarity | Project start |
| No global state | Evaluated state needs | Redux Toolkit, Zustand, React Context, local state | No cross-component state sharing exists. Global state would be added complexity with no benefit | Project start |
| basename for GitHub Pages | Deployment target is GitHub Pages at sub-path | Hash router, basename prop, configuring GitHub Pages custom domain | `basename` is the simplest solution. Hash router breaks expected URL patterns. Custom domain requires DNS config | Project start |

---

## 20. Glossary

| Term | Definition |
|---|---|
| **Algoremi** | The company whose website this is — an AI systems consultancy |
| **`ProjectData.js`** | The single source of truth file containing all 6 project case studies as a JS array |
| **`FadeIn`** | The scroll-triggered animation wrapper component used throughout the site |
| **`FadeInStagger`** | Container component that staggers entrance animations for a list of child `FadeInItem` elements |
| **`grad-text`** | CSS utility class that applies the brand gradient as a text fill |
| **`--grad`** | CSS custom property: `linear-gradient(135deg, #00C48C 0%, #0066FF 100%)` — the Algoremi brand gradient |
| **`ink`** | The darkest text/background color (`#0B0F1A`) — used instead of "black" |
| **`muted`** | Supporting text color (`#637191`) — used for captions, labels, secondary copy |
| **`card`** | White (`#FFFFFF`) — used for card backgrounds to distinguish from the page bg |
| **`bg`** | The page background color (`#F5F7FC`) — a very light blue-grey |
| **`accent`** | Primary brand blue (`#0066FF`) |
| **`accent-g`** | Secondary green (`#00C48C`) — used for CTAs on dark backgrounds |
| **`PageHero`** | The consistent hero section used on interior pages (not the home page hero) |
| **`PdHero`** | "Project Detail Hero" — the specific hero for project case study pages |
| **`whileInView`** | Framer Motion prop that triggers an animation when the element enters the viewport |
| **`basename`** | React Router prop that prefixes all routes — set to `/Algoremi-frontend` for GitHub Pages deployment |
| **`historyApiFallback`** | Vite dev server config that serves `index.html` for all routes, enabling client-side routing on refresh |
| **`FeaturedProject`** | The large (500px tall) full-width project card at the top of the portfolio page — currently always shows FinCore |
| **Touch-on-blur** | Form UX pattern where validation errors only appear after the user has focused and left a field |
| **Stagger** | Animation technique where a list of elements entrance-animate one after another with a small time delay between each |
| **`clamp()`** | CSS function for fluid typography: `clamp(min, preferred, max)` — scales between breakpoints without media queries |
| **SPA** | Single Page Application — the entire site runs in one HTML document; routing is handled by JavaScript |
