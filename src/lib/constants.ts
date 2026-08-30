export const SITE_CONFIG = {
  name: "Study Hanker",
  tagline: "Your Path to Study Abroad, Guided Right",
  url: "https://studyhanker.com",
  email: "support@studyhanker.com",
  phone: "+8801711895081",
  whatsapp: "+8801711895081",
  address: "S R Plaza, Mirpur-01, Dhaka-1216, Bangladesh",
  workingHours: "Saturday - Thursday: 10:00 AM - 7:00 PM",
  social: {
    facebook: "https://facebook.com/studyhanker",
    youtube: "https://youtube.com/@studyhanker",
    linkedin: "https://linkedin.com/company/studyhanker",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Countries", href: "/countries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const ANNOUNCEMENT_BAR = {
  text: "🔥 South Korea September 2026 Intake Applications Open!",
  linkText: "Apply Now",
  linkHref: "#assessment",
} as const;

export const TRUST_STATS = [
  { value: "100+", label: "Students Placed" },
  { value: "98%", label: "Visa Approval Rate" },
  { value: "10+", label: "Scholarships Won" },
  { value: "8", label: "Countries Covered" },
] as const;

export const FORM_LIMITS = {
  nameMaxLength: 100,
  messageMaxLength: 1000,
  phoneMinLength: 10,
  phoneMaxLength: 15,
  gpaMaxLength: 10,
} as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const FOCUS_DELAY = 100;
