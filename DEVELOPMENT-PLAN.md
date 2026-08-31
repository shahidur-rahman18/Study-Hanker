# Study Hanker — Development Plan & Execution Guide

> **Mentor-led, step-by-step development roadmap**
> Focus: Industry Standard Code, 100/100 Lighthouse Performance, Maximum SEO

---

## Guiding Principles

1. **Server Components by default** — only use `"use client"` when absolutely necessary
2. **Zero unnecessary client JS** — keeps bundle small, performance high
3. **Semantic HTML always** — proper heading hierarchy, landmark roles, ARIA where needed
4. **Mobile-first responsive** — design for small screens first, scale up
5. **SEO in every page** — dynamic metadata, JSON-LD, Open Graph, semantic structure
6. **Accessibility baked in** — keyboard navigation, focus management, color contrast
7. **No overengineering** — only build what the blueprint specifies

---

## Phase 1: Foundation & Configuration ✅ COMPLETE

### 1.1 Project Setup ✅ COMPLETE
- Next.js 16.3.3 with App Router
- TypeScript strict mode
- Tailwind CSS v4
- All required packages installed

### 1.2 Design Tokens & Theme ✅ COMPLETE
- Brand colors defined in `globals.css` with CSS custom properties
- Typography scale, spacing tokens, animation keyframes added
- Font families configured: Geist (body) + Inter (headings)
- Smooth scroll behavior and focus-visible styles implemented

### 1.3 TypeScript Types ✅ COMPLETE
- `src/types/index.ts` created with all 10 interfaces: Country, University, Service, Testimonial, BlogPost, NavLink, ContactInfo, AssessmentForm, ConsultationForm, FAQ

### 1.4 Configuration Files ✅ COMPLETE
- `src/config/site.ts` — verified and complete with brand metadata, nav links, contact info
- `src/config/countries.ts` — full dataset for 10 countries (South Korea, UK, USA, Germany, Malta, Cyprus, China, Japan, Australia, Canada)
- `src/config/services.ts` — 8 core services with icons, features, and process steps
- `src/config/testimonials.ts` — verified student reviews with country tags
- `src/config/faqs.ts` — categorized FAQ data (General, Admissions, Visa, Scholarships, Pre-Departure)

### 1.5 Utility Functions ✅ COMPLETE
- `src/lib/utils.ts` — verified `cn` function with clsx + tailwind-merge
- `src/lib/seo.ts` — metadata generators, JSON-LD builders, schema.org helpers for EducationalOrganization, FAQPage, BreadcrumbList, Article, Service
- `src/lib/validators.ts` — Zod schemas for assessment form (step1, step2, step3) and consultation booking form
- `src/lib/constants.ts` — reusable constants (site config, nav links, trust stats, form limits, animation durations, breakpoints)

---

## Phase 2: Layout Shell & Common Components ✅ COMPLETE

### 2.1 Root Layout Enhancement
**File:** `src/app/layout.tsx`

- [x] Proper font loading with `next/font/google` (Geist)
- [x] Global metadata with Open Graph defaults
- [x] Body class with proper font variable
- [x] Import and render Navbar + Footer
- [x] Render Sticky Announcement Bar at top

**Implementation notes:**
- Geist (body) + Inter (headings) loaded via `next/font/google`
- `defaultMetadata` imported from `src/lib/seo.ts`
- Font variables applied via `className` on `<html>`
- AnnouncementBar → Navbar → main → Footer structure

---

### 2.2 Sticky Announcement Bar
**File:** `src/components/common/AnnouncementBar.tsx`

- [x] Dismissible bar with localStorage persistence
- [x] Dynamic intake announcements
- [x] CTA link to assessment form
- [x] Framer Motion animate on dismiss

**Implementation notes:**
- `localStorage` key: `announcement-dismissed`
- Animated with `framer-motion` (`height` + `opacity` transition)
- Flame icon + golden amber accent color
- Dismiss button with `aria-label`

---

### 2.3 Navbar
**File:** `src/components/common/Navbar.tsx`

- [x] Logo (SVG or optimized image)
- [x] Desktop navigation links from `navLinks` config
- [x] Primary CTA button "Free Consultation"
- [x] Mobile hamburger menu (opens Drawer)
- [x] Sticky on scroll with backdrop blur
- [x] Active link indicator
- [x] Proper ARIA labels

**Implementation notes:**
- `AnimatedLogo` component with 3D rotateY animation
- Scroll listener with `passive: true` for performance
- Background transitions from `bg-[#f4f4f6]` to `bg-white/95 backdrop-blur-md`
- Active link gets `text-[#5848b8]` + bottom border indicator
- CTA button: `bg-[#6246ea]` with hover/active states

---

### 2.4 Mobile Navigation Drawer
**File:** `src/components/common/MobileDrawer.tsx`

- [x] Slide-in animation (Framer Motion)
- [x] Full navigation links
- [x] CTA button
- [x] Close on outside click + Escape key
- [x] Focus trap when open
- [x] Body scroll lock when open

**Implementation notes:**
- Spring animation: `damping: 25, stiffness: 200`
- `data-slot="mobile-drawer"` for focus trap targeting
- Custom `useFocusTrap` hook with Tab/Shift+Tab loop
- Body `overflow: hidden` when open
- `role="dialog"`, `aria-modal="true"`, `aria-label`

---

### 2.5 Footer
**File:** `src/components/common/Footer.tsx`

- [x] Brand logo + tagline
- [x] Quick navigation links
- [x] Top destinations links
- [x] Contact info (phone, email, address)
- [x] Social media links (Facebook, YouTube, LinkedIn)
- [x] Copyright notice
- [x] Google Maps embed or link

**Implementation notes:**
- 4-column grid: Brand | Quick Links | Top 6 Destinations | Contact
- Custom SVG icons for Facebook, YouTube, LinkedIn
- Address links to Google Maps directions
- Embedded Google Maps iframe (Mirpur-01 office)
- Grayscale + opacity for dark footer integration, hover removes grayscale
- `loading="lazy"` on iframe for performance

---

### 2.6 Reusable UI Components

**Section Header** — `src/components/shared/SectionHeader.tsx`
- [x] Consistent heading + subheading pattern
- [x] Optional accent element

**JSON-LD Schema** — `src/components/shared/JsonLd.tsx`
- [x] Reusable script tag component for structured data
- [x] Accepts any schema.org type

**SEO Card** — `src/components/shared/SeoCard.tsx`
- [x] Consistent card pattern for content sections

**Implementation notes:**
- All three are Server Components (no `"use client"`)
- `SectionHeader`: `cva` variants for `align` (left/center), `size` (sm/default/lg), `as` (h2/h3). Supports `badge`, `description`, custom `className`.
- `JsonLd`: Accepts `Record<string, unknown>`, renders `application/ld+json` via `dangerouslySetInnerHTML`.
- `SeoCard`: Extends shadcn Card visual language. Supports `icon`, `badge`, `href` (renders `<a>`), `children` slot, `size` variants. Hover: shadow + ring highlight.
- All use `data-slot` attributes for Shadcn-compatible styling hooks.

---

## Phase 3: Homepage (Conversion Engine)

### 3.1 Hero Section
**File:** `src/components/sections/Hero.tsx`

- [ ] Compelling headline: "BANGLADESH → WORLD: Your Path to Study Abroad, Guided Right"
- [ ] Sub-headline with value proposition
- [ ] Trust overlay metrics (100+ Students, 98% Visa Rate, 10+ Scholarships)
- [ ] Primary CTA → scrolls to assessment form
- [ ] Background: gradient or subtle pattern (no heavy images)
- [ ] Framer Motion entrance animations

### 3.2 Multi-Step Profile Assessment Form
**File:** `src/components/forms/ProfileAssessmentForm.tsx`

- [ ] Step 1: Contact (Name, Phone, Email, Marital Status)
- [ ] Step 2: Education (Qualification, GPA/Result)
- [ ] Step 3: Preferences (Study Level, Field, English Proficiency, Budget)
- [ ] Progress indicator
- [ ] Form validation (Zod + React Hook Form)
- [ ] Smooth step transitions (Framer Motion)
- [ ] Submit → API route → Resend email
- [ ] Success state with confirmation

### 3.3 Why Choose Us
**File:** `src/components/sections/WhyChooseUs.tsx`

- [ ] 4 pillars: Transparent Process, No Hidden Fees, Dedicated Mentorship, Post-Arrival Support
- [ ] Icon + title + description for each
- [ ] Grid layout (2x2 on mobile, 4 columns on desktop)

### 3.4 Featured Destinations Grid
**File:** `src/components/sections/FeaturedDestinations.tsx`

- [ ] Country cards with flag, name, brief info
- [ ] South Korea highlighted as ⭐ Focus Country
- [ ] Link to country detail page
- [ ] Hover effects (Framer Motion)

### 3.5 Core Services (8-Step Lifecycle)
**File:** `src/components/sections/ServicesOverview.tsx`

- [ ] Visual timeline or grid of 8 services
- [ ] Each step: icon, title, brief description
- [ ] Link to full services page

### 3.6 Wall of Fame (Testimonials)
**File:** `src/components/sections/WallOfFame.tsx`

- [ ] Student cards with photo, name, university, country, quote
- [ ] Filter by country
- [ ] Star ratings
- [ ] Auto-scrolling carousel option

### 3.7 Cost & Eligibility Estimator
**File:** `src/components/widgets/CostEstimator.tsx`

- [ ] Country selector
- [ ] Study level selector
- [ ] Shows estimated tuition + living costs
- [ ] Scholarship availability indicator
- [ ] Client-side calculation (Zustand for state)

### 3.8 Blog Teaser
**File:** `src/components/sections/BlogTeaser.tsx`

- [ ] Latest 3 blog posts
- [ ] Image, title, excerpt, date
- [ ] Link to full blog

---

## Phase 4: Static Pages

### 4.1 About Us (`/about`)
- [ ] Mission & Vision banner
- [ ] Company story section
- [ ] Leadership team cards (photo, name, title, bio, LinkedIn)
- [ ] Accreditation logos
- [ ] Office gallery (Mirpur-01, Dhaka)
- [ ] Video tour embed (YouTube)

### 4.2 Services Hub (`/services`)
- [ ] Grid of all 8 services
- [ ] Each card: icon, title, description, link to detail

### 4.3 Service Detail (`/services/[slug]`)
- [ ] Dynamic page with `generateStaticParams`
- [ ] Service-specific hero
- [ ] What's included checklist
- [ ] Step-by-step workflow
- [ ] Service-specific FAQs
- [ ] Booking CTA

### 4.4 Countries Hub (`/countries`)
- [ ] Search bar
- [ ] Filters: budget range, work permit, IELTS requirement
- [ ] Country grid with flags

### 4.5 Country Detail (`/countries/[slug]`)
- [ ] Country at-a-glance (capital, currency, intakes, tuition)
- [ ] Top universities list
- [ ] Admission document checklist
- [ ] Scholarship programs
- [ ] Part-time job regulations
- [ ] Post-graduation work permits
- [ ] Country-specific lead form

### 4.6 Contact (`/contact`)
- [ ] Consultation booking form
- [ ] Google Maps embed (S R Plaza, Mirpur-01)
- [ ] Contact cards (phone, WhatsApp, email, hours)
- [ ] Direct WhatsApp link

### 4.7 FAQs (`/faqs`)
- [ ] Categorized accordion (Shadcn Accordion)
- [ ] Categories: General, Admissions, Visa, Scholarships, Pre-Departure
- [ ] JSON-LD FAQPage schema

### 4.8 Success Stories (`/success-stories`)
- [ ] Visa wall with student photos
- [ ] Filterable by country/university
- [ ] Video testimonials embed

### 4.9 Legal Pages
- [ ] Privacy Policy (`/privacy-policy`)
- [ ] Terms of Service (`/terms`)

---

## Phase 5: Dynamic Features & API

### 5.1 Profile Assessment API
**File:** `src/app/api/evaluate/route.ts`

- [ ] Validate payload with Zod
- [ ] Rate limiting (in-memory or edge config)
- [ ] Honeypot spam protection
- [ ] Send email via Resend to admin
- [ ] Send confirmation to student
- [ ] Return success/error response

### 5.2 Consultation Booking API
**File:** `src/app/api/consultation/route.ts`

- [ ] Same security as above
- [ ] Date validation
- [ ] Calendar-friendly response

### 5.3 Email Templates
**Files:** `src/lib/emails/`

- [ ] Admin notification template (new lead)
- [ ] Student confirmation template (auto-reply)
- [ ] HTML + plain text versions

### 5.4 Floating WhatsApp Widget
**File:** `src/components/widgets/FloatingWhatsApp.tsx`

- [ ] Fixed position bottom-right
- [ ] Pulse animation to draw attention
- [ ] Opens WhatsApp with pre-filled message
- [ ] Only visible on mobile (optional desktop)

### 5.5 Blog System
- [ ] Blog listing page with pagination
- [ ] Blog detail page with dynamic metadata
- [ ] Author schema
- [ ] Related posts

---

## Phase 6: SEO, Performance & Deployment

### 6.1 Dynamic Metadata
- [ ] `generateMetadata` for every page
- [ ] Unique title + description per page
- [ ] Open Graph images (dynamic OG image generation)
- [ ] Twitter card metadata
- [ ] Canonical URLs

### 6.2 Structured Data (JSON-LD)
- [ ] `EducationalOrganization` schema on homepage
- [ ] `FAQPage` schema on FAQ page
- [ ] `BreadcrumbList` on all inner pages
- [ ] `Article` schema on blog posts
- [ ] `Service` schema on service pages

### 6.3 Sitemap & Robots
- [ ] `src/app/sitemap.ts` — dynamic sitemap with all pages
- [ ] `src/app/robots.ts` — crawler directives
- [ ] `src/app/manifest.ts` — PWA manifest

### 6.4 Performance Optimization
- [ ] All images via `next/image` with proper sizes
- [ ] Lazy loading for below-fold images
- [ ] Font display: swap
- [ ] Minimal client JS — audit bundle size
- [ ] ISR for blog/countries with revalidation
- [ ] Proper cache headers

### 6.5 Accessibility Audit
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA landmarks present

### 6.6 Lighthouse Audit Targets
| Metric | Target |
|--------|--------|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| LCP | < 1.2s |
| CLS | 0 |
| INP | < 50ms |

### 6.7 Deployment
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Configure custom domain (studyhanker.com)
- [ ] SSL certificate (auto on Vercel)
- [ ] Environment variables (Resend API key, etc.)
- [ ] Edge caching rules
- [ ] Analytics (Vercel Analytics / Google Analytics)

---

## File Structure (Target)

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── manifest.ts
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── countries/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/page.tsx
│   ├── success-stories/page.tsx
│   ├── faqs/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   └── api/
│       ├── evaluate/route.ts
│       └── consultation/route.ts
├── components/
│   ├── ui/                    (Shadcn primitives)
│   ├── common/                (Navbar, Footer, AnnouncementBar, MobileDrawer)
│   ├── forms/                 (ProfileAssessmentForm, ConsultationBookingForm)
│   ├── sections/              (Hero, WhyChooseUs, FeaturedDestinations, etc.)
│   ├── widgets/               (CostEstimator, FloatingWhatsApp)
│   └── shared/                (JsonLd, SectionHeader, SeoCard)
├── config/
│   ├── site.ts
│   ├── countries.ts
│   ├── services.ts
│   ├── testimonials.ts
│   └── faqs.ts
├── lib/
│   ├── utils.ts
│   ├── seo.ts
│   ├── validators.ts
│   ├── constants.ts
│   └── email.ts
└── types/
    └── index.ts
```

---

## Execution Order

Start → Phase 1.2 → 1.3 → 1.4 → 1.5 → 1.6 → Phase 2 ✅ → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Deploy

---

*Document created: 2026-08-30*
*Last updated: 2026-08-31*
