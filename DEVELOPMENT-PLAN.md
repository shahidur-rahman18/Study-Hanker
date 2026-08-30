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

## Phase 1: Foundation & Configuration

### 1.1 Project Setup ✅ COMPLETE
- Next.js 16.3.3 with App Router
- TypeScript strict mode
- Tailwind CSS v4
- All required packages installed

### 1.2 Design Tokens & Theme
**Goal:** Proper brand system with Royal Blue (#2563EB), Golden Amber (#F59E0B), Deep Navy (#0F172A)

Tasks:
- [ ] Refine `globals.css` — proper typography scale, spacing tokens, animation keyframes
- [ ] Define CSS custom properties for all brand colors
- [ ] Set up font families (Geist Sans for body, consider a display font for headings)
- [ ] Create smooth scroll behavior and focus-visible styles

### 1.3 TypeScript Types
**Goal:** All data structures strictly typed

Create `src/types/index.ts`:
- [ ] `Country` — id, name, slug, capital, currency, intakes, avgTuition, flag, description, scholarships, universities, workPermitInfo
- [ ] `Service` — id, title, slug, description, icon, features, process
- [ ] `Testimonial` — id, name, university, country, quote, image, rating, tag
- [ ] `BlogPost` — id, title, slug, excerpt, content, image, author, date, tags
- [ ] `NavLink` — label, href
- [ ] `ContactInfo` — phone, email, whatsapp, address
- [ ] `AssessmentForm` — step1, step2, step3 fields
- [ ] `ConsultationForm` — name, email, phone, country, date, message

### 1.4 Configuration Files
**Goal:** All static data centralized and typed

Files to create/update:
- [ ] `src/config/site.ts` ✅ (exists — verify completeness)
- [ ] `src/config/countries.ts` — full dataset for South Korea, UK, USA, Germany, Malta, Cyprus, China, Japan, Australia, Canada
- [ ] `src/config/services.ts` — 8 services: Profile Analysis, University Matching, Country Guidance, Application Support, Interview Prep, Visa Assistance, Pre-Arrival Guide, Post-Arrival Settlement
- [ ] `src/config/testimonials.ts` — verified student reviews with country tags
- [ ] `src/config/faqs.ts` — categorized FAQ data

### 1.5 Utility Functions
**Goal:** Reusable helpers for formatting, SEO, validation

Create/update:
- [ ] `src/lib/utils.ts` ✅ (exists — verify `cn` function)
- [ ] `src/lib/seo.ts` — metadata generators, JSON-LD builders, schema.org helpers
- [ ] `src/lib/validators.ts` — Zod schemas for all forms
- [ ] `src/lib/constants.ts` — reusable constants (regex patterns, limits, etc.)

---

## Phase 2: Layout Shell & Common Components

### 2.1 Root Layout Enhancement
**File:** `src/app/layout.tsx`

- [ ] Proper font loading with `next/font/google` (Geist)
- [ ] Global metadata with Open Graph defaults
- [ ] Body class with proper font variable
- [ ] Import and render Navbar + Footer
- [ ] Render Sticky Announcement Bar at top

### 2.2 Sticky Announcement Bar
**File:** `src/components/common/AnnouncementBar.tsx`

- [ ] Dismissible bar with localStorage persistence
- [ ] Dynamic intake announcements
- [ ] CTA link to assessment form
- [ ] Framer Motion animate on dismiss

### 2.3 Navbar
**File:** `src/components/common/Navbar.tsx`

- [ ] Logo (SVG or optimized image)
- [ ] Desktop navigation links from `navLinks` config
- [ ] Primary CTA button "Free Assessment"
- [ ] Mobile hamburger menu (opens Drawer)
- [ ] Sticky on scroll with backdrop blur
- [ ] Active link indicator
- [ ] Proper ARIA labels

### 2.4 Mobile Navigation Drawer
**File:** `src/components/common/MobileDrawer.tsx`

- [ ] Slide-in animation (Framer Motion)
- [ ] Full navigation links
- [ ] CTA button
- [ ] Close on outside click + Escape key
- [ ] Focus trap when open
- [ ] Body scroll lock when open

### 2.5 Footer
**File:** `src/components/common/Footer.tsx`

- [ ] Brand logo + tagline
- [ ] Quick navigation links
- [ ] Top destinations links
- [ ] Contact info (phone, email, address)
- [ ] Social media links (Facebook, YouTube, LinkedIn)
- [ ] Copyright notice
- [ ] Google Maps embed or link

### 2.6 Reusable UI Components

**Section Header** — `src/components/shared/SectionHeader.tsx`
- [ ] Consistent heading + subheading pattern
- [ ] Optional accent element

**JSON-LD Schema** — `src/components/shared/JsonLd.tsx`
- [ ] Reusable script tag component for structured data
- [ ] Accepts any schema.org type

**SEO Card** — `src/components/shared/SeoCard.tsx`
- [ ] Consistent card pattern for content sections

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

Start → Phase 1.2 → 1.3 → 1.4 → 1.5 → 1.6 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Deploy

---

*Document created: 2026-08-30*
*Last updated: 2026-08-30*
