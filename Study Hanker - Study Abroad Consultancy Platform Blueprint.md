# **Study Hanker \- Study Abroad Consultancy Platform Blueprint**

**Architecture, Technical Roadmap, System Design & Full Specification**  
**Framework Version:** Next.js 16.3.3 (App Router architecture with React 19.2.8 / Server Components)  
**Line Spacing:** 1.15 | **Primary Color Palette:** Royal Blue (\#2563EB), Golden Amber (\#F59E0B), Deep Navy (\#0F172A)

## ---

**1\. Executive Project Summary**

Study Hanker is a high-performance, conversion-centric, and SEO-optimized web platform engineered specifically for Bangladeshi students aiming for international higher education. Built on Next.js 15+ using the App Router, Server Components, and Incremental Static Regeneration (ISR), the platform delivers maximum page load speed (100/100 Lighthouse target), top-tier search engine visibility, and seamless multi-step lead capture user experiences.

## ---

**2\. Tech Stack Architecture**

| Layer / Category | Technology / Tool | Key Purpose & Implementation Details   |
| :---- | :---- | :---- |
| **Core Framework** | Next.js 16.3.3+ (App Router) | Server Components by default, streaming SSR, built-in dynamic SEO metadata, and edge optimization. |
| **Language** | TypeScript 5.x | Strict type safety across routes, static content schemas, and dynamic form payloads. |
| **Styling & UI** | Tailwind CSS v4 \+ Shadcn UI | Utility-first responsive design, accessible primitives (Dialog, Select, Accordion, Drawer). |
| **Animations** | Framer Motion | Micro-interactions, multi-step form slide transitions, and scroll-triggered reveal animations. |
| **Icons & Assets** | Lucide React \+ Next/Image | Lightweight SVG iconography with WebP/AVIF auto-optimized image delivery. |
| **Form Engine** | React Hook Form \+ Zod | Type-safe client/server form validation with schema parsing for assessment and booking forms. |
| **Transactional Mail** | Resend API / EmailJS | Instant lead delivery to counselors and automatic email confirmation receipts to students. |
| **State Management** | Zustand (Client Side) | Lightweight state management for multi-step profile assessment forms and filter tool states. |
| **Deployment & Hosting** | Vercel Enterprise / Pro | Global Edge CDN deployment, instant CI/CD pipelines, static asset caching, and analytics. |

## ---

**3\. Project Directory & Folder Structure**

study-hanker/  
├── src/  
│   ├── app/  
│   │   ├── layout.tsx                  // Global root layout (Fonts, Navbar, Footer, Providers)  
│   │   ├── page.tsx                    // Homepage (Conversion & Trust Engine)  
│   │   ├── about/  
│   │   │   └── page.tsx                // About Us Page  
│   │   ├── services/  
│   │   │   ├── page.tsx                // Services Directory  
│   │   │   └── \[slug\]/  
│   │   │       └── page.tsx            // Service Detail Page (e.g., /services/sop-writing)  
│   │   ├── countries/  
│   │   │   ├── page.tsx                // Countries Hub & Filter Engine  
│   │   │   └── \[slug\]/  
│   │   │       └── page.tsx            // Country Detail Hub (e.g., /countries/south-korea)  
│   │   ├── blog/  
│   │   │   ├── page.tsx                // Blog Listing  
│   │   │   └── \[slug\]/  
│   │   │       └── page.tsx            // Blog Article Detail  
│   │   ├── contact/  
│   │   │   └── page.tsx                // Contact Us Page  
│   │   ├── success-stories/  
│   │   │   └── page.tsx                // Student Visa Wall & Reviews  
│   │   ├── faqs/  
│   │   │   └── page.tsx                // Categorized FAQ Knowledge Base  
│   │   ├── privacy-policy/  
│   │   │   └── page.tsx                // Privacy Policy Legal Document  
│   │   ├── terms/  
│   │   │   └── page.tsx                // Terms of Service  
│   │   ├── api/  
│   │   │   ├── evaluate/  
│   │   │   │   └── route.ts            // API Route for Free Profile Assessment submission  
│   │   │   └── consultation/  
│   │   │       └── route.ts            // API Route for Booking Consultation  
│   │   ├── sitemap.ts                  // Dynamic Dynamic Sitemap Generator  
│   │   ├── robots.ts                   // Search Engine Crawler Directives  
│   │   └── manifest.ts                 // Web App Manifest Config  
│   ├── components/  
│   │   ├── ui/                         // Shadcn Atomic Primitives (Button, Input, Select, Modal)  
│   │   ├── common/                     // Navbar, Sticky Top Banner, Footer, Mobile Drawer  
│   │   ├── forms/                      // ProfileAssessmentForm, ConsultationBookingForm  
│   │   ├── sections/                   // Hero, TrustStats, ServiceGrid, CountryGrid, Testimonials  
│   │   ├── widgets/                    // EligibilityCalculator, CostEstimator, FloatingWhatsApp  
│   │   └── shared/                     // JSON-LD Schema Scripts, Section Headers, SEO Cards  
│   ├── config/  
│   │   ├── site.ts                     // Global Brand Metadata, Navigation Links, Contact Info  
│   │   ├── countries.ts                // Static Country Dataset (South Korea, UK, USA, etc.)  
│   │   ├── services.ts                 // Static 8-Core Services Dataset  
│   │   └── testimonials.ts             // Verified Student Reviews Dataset  
│   ├── lib/  
│   │   ├── utils.ts                    // Class merger (cn) and string formatters  
│   │   ├── zod-schemas.ts              // Validation Schemas for Forms  
│   │   └── email.ts                    // Resend Integration Client  
│   └── types/  
│       └── index.ts                    // TypeScript Structural Interfaces  
├── public/  
│   ├── images/                         // Optimized static WebP visuals  
│   ├── flags/                          // SVG country flag icons  
│   └── favicon.ico  
├── tailwind.config.ts  
├── tsconfig.json  
└── package.json

## ---

**4\. Complete Page Breakdown & Component Hierarchy**

### **A. Homepage (/) — The Conversion & Trust Engine**

> * **Top Notification Bar:** Sticky bar announcing upcoming intakes (e.g., "🔥 South Korea September 2026 Intake Applications Open\! \[Apply Now\]").  
> * **Navbar Component:** Logo, Desktop Navigation Links, Language Indicator, and Primary CTA (\`Free Assessment\`).  
> * **Hero Section:**  
  * Headline: "BANGLADESH → WORLD: Your Path to Study Abroad, Guided Right."  
  * Sub-headline: Personalized study recommendations, university matching, and scholarship discovery tailored for Bangladeshi students.  
  * Trust Overlay Metrics: 100+ Students Placed | 98% Visa Approval Rate | 10+ Scholarships Won.  
> * **Interactive Profile Assessment Form (Multi-Step Engine):**  
  * Step 1: Contact details (Full Name, Phone Number, Email, Marital Status).  
  * Step 2: Educational background (Current Qualification, GPA/Result).  
  * Step 3: Target preferences (Study Level: BSc/MSc/PhD, Field of Study, English Proficiency, Monthly Budget).  
> * **Why Choose Us (4 Pillar Matrix):** 100% Transparent Process, No Hidden Fees, One-on-One Dedicated Mentorship, Post-Arrival Settlement.  
> * **Featured Destinations Grid:** Focus cards featuring South Korea (⭐ Focus Country), UK, USA, Germany, Malta, Cyprus, China, Japan, Australia, and Canada.  
> * **Core Services Pathway (The 8-Step Lifecycle):**  
  1. Profile Analysis  
  2. University & Subject Matching  
  3. Country Guidance  
  4. Application Support (SOP & Documents)  
  5. Interview Preparation  
  6. Visa Assistance  
  7. Pre-Arrival Guide & Air Ticket  
  8. Post-Arrival Settlement Support  
> * **Student Wall of Fame & Video Testimonials:** Reviews with filterable tags by country (e.g., Fatema Sultana, Amirul Islam, Parth Dey at Dong-Eui University).  
> * **Interactive Cost & Eligibility Estimator:** Quick calculator allowing students to estimate living and tuition expenses vs available scholarships.  
> * **Blog & News Teaser:** Latest 3 articles highlighting visa policies and scholarship deadlines.  
> * **Footer:** Full brand bio, quick navigation links, top destinations, physical office address in Dhaka, social channels, and copyright notice.

### **B. About Us Page (/about)**

> * **Mission & Vision Banner:** Building ethical, transparent, and student-first consultancy services in Bangladesh.  
> * **The Study Hanker Story:** History of founding and commitment to removing agent opacity.  
> * **Leadership & Counselors Showcase:** Profile cards with pictures, titles, bios, and LinkedIn credentials for Google E-E-A-T score optimization.  
> * **Accreditation & Institutional Partners:** Logos of recognized international education boards and university partnerships.  
> * **Office Gallery & Video Tour:** High-resolution photos of the physical office at Mirpur-01, Dhaka.

### **C. Services Hub & Detail Pages (/services & /services/\[slug\])**

> * **Main Services Directory:** Interactive grid detailing all 8 services with custom iconography.  
> * **Individual Service Page Features (e.g., SOP Writing, Visa Assistant):**  
  * Service-specific hero section with value proposition.  
  * What is included in the package (Detailed checklist).  
  * Step-by-step workflow process.  
  * Service-specific FAQs.  
  * Dedicated booking CTA button.

### **D. Countries Hub & Detail Pages (/countries & /countries/\[slug\])**

> * **Countries Listing:** Search bar and filters for budget range, work permit options, and IELTS requirements.  
> * **Dynamic Country Page (e.g., /countries/south-korea):**  
  * Country At-a-Glance: Capital, Currency, Main Intake Seasons, Average Tuition Fee.  
  * Top Universities List (50+ partner universities details).  
  * Admission & Visa Document Checklist (Embassy requirements, bank solvency).  
  * Scholarship Programs (GKS Scholarship, Professor Funding, University Grants).  
  * Part-Time Job Regulations & Post-Graduation Work Permits.  
  * Country-Specific Lead Form.

### **E. Contact Us Page (/contact)**

> * **Consultation Booking Form:** Direct booking system with preferred date and destination inputs.  
> * **Interactive Google Maps Embed:** Location pin for S R Plaza, Mirpur-01, Dhaka-1216.  
> * **Direct Contact Cards:** Phone/WhatsApp Hotline (+8801711895081), Support Email (support@studyhanker.com), Working Hours.

## ---

**5\. Technical Development Roadmap & Execution Strategy**

The development lifecycle is divided into 6 structured phases to ensure flawless performance, zero regression, and timely execution:

> 1. **Phase 1: Environment Setup & Architecture Foundations**  
   * Initialize Next.js 15+ project with App Router, TypeScript, and Tailwind CSS v4.  
   * Configure Shadcn UI components and design tokens matching the brand palette (Royal Blue \#2563EB, Golden Amber \#F59E0B).  
   * Set up strict ESLint, Prettier, and TypeScript configuration rules.  
   * Establish static configuration files (site.ts, countries.ts, services.ts).  
> 2. **Phase 2: Core Components & Layout Development**  
   * Build responsive Layout wrapper with Sticky Announcement Header, Navbar, and Footer.  
   * Implement Mobile Navigation Drawer with smooth slide-in animation via Framer Motion.  
   * Create reusable UI primitives: Buttons, Form Inputs, Cards, Badges, and Modal Dialogs.  
> 3. **Phase 3: Page Implementation & Interactive Tools**  
   * Construct Homepage sections and integrate React Hook Form \+ Zod multi-step Profile Assessment.  
   * Build Dynamic Route engines for /services/\[slug\] and /countries/\[slug\].  
   * Implement Interactive Eligibility & Cost Estimator Widget.  
   * Set up Contact Page with integrated Google Map frame.  
> 4. **Phase 4: API Routes & Integration**  
   * Develop Server Actions / API Routes for profile assessment submission (\`/api/evaluate\`) and consultation booking (\`/api/consultation\`).  
   * Integrate Resend API / EmailJS to dispatch instant notifications to administrative email and send auto-reply confirmation to students.  
   * Implement floating WhatsApp quick-chat widget.  
> 5. **Phase 5: Technical SEO, Accessibility & Schema Markup**  
   * Configure dynamic metadata generation (\`generateMetadata\`) across all static and dynamic pages.  
   * Inject JSON-LD Structured Data (\`EducationalOrganization\`, \`FAQPage\`, \`BreadcrumbList\`).  
   * Set up dynamic \`sitemap.ts\` and \`robots.ts\`.  
   * Optimize images using Next.js Image component (\`next/image\`) with WebP conversion and strict responsive sizes.  
> 6. **Phase 6: Quality Assurance, Performance Audit & Vercel Deployment**  
   * Perform Google Lighthouse audit aiming for 100/100 score in Performance, Accessibility, Best Practices, and SEO.  
   * Test responsiveness across Mobile (iOS/Android), Tablet, and Desktop screen widths.  
   * Deploy project to Vercel CDN, configure custom domain, SSL certificates, and edge caching rules.

## ---

**6\. SEO, Performance & Security Compliance Checklist**

| Optimization Focus | Implementation Rule   |
| :---- | :---- |
| **Rendering Method** | Use Static Site Generation (SSG) for static pages and Incremental Static Regeneration (ISR) with revalidation intervals for blog/countries content. |
| **Open Graph & Social Cards** | Include customized OG images and social metadata for Facebook, LinkedIn, and Twitter sharing. |
| **Core Web Vitals** | Ensure LCP (Largest Contentful Paint) \< 1.2s, CLS (Cumulative Layout Shift) \= 0, and FID/INP \< 50ms. |
| **Form Security** | Implement client/server side Zod validation, rate limiting on submission endpoints, and honeypot spam protection. |
| **Data Privacy** | Include explicit privacy consent disclosures on all lead submission forms. |

