export const siteConfig = {
  name: "Study Hanker",
  tagline: "Your Path to Study Abroad, Guided Right",
  description:
    "Bangladesh's trusted study abroad consultancy platform for international higher education.",
  url: "https://studyhanker.com",
  email: "support@studyhanker.com",
  phone: "+8801711895081",
  whatsapp: "+8801711895081",
  address: "S R Plaza, Mirpur-01, Dhaka-1216, Bangladesh",
  social: {
    facebook: "https://facebook.com/studyhanker",
    youtube: "https://youtube.com/@studyhanker",
    linkedin: "https://linkedin.com/company/studyhanker",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Countries", href: "/countries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
