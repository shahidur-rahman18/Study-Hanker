import type { Metadata } from "next";
import type { BlogPost } from "@/types";

export const defaultMetadata: Metadata = {
  title: {
    default: "Study Hanker — Study Abroad Consultancy for Bangladeshi Students",
    template: "%s | Study Hanker",
  },
  description:
    "Your trusted partner for studying abroad. Get free profile assessment, university matching, scholarship guidance, and visa support.",
  keywords: [
    "study abroad",
    "bangladesh",
    "study in south korea",
    "study in uk",
    "study in usa",
    "study in germany",
    "study in canada",
    "study in australia",
    "study in japan",
    "study in china",
    "scholarship",
    "visa assistance",
    "university admission",
    "study hanker",
  ],
  authors: [{ name: "Study Hanker" }],
  creator: "Study Hanker",
  publisher: "Study Hanker",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://studyhanker.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://studyhanker.com",
    siteName: "Study Hanker",
    title: "Study Hanker — Study Abroad Consultancy for Bangladeshi Students",
    description:
      "Your trusted partner for studying abroad. Get free profile assessment, university matching, scholarship guidance, and visa support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Study Hanker - Study Abroad Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Hanker — Study Abroad Consultancy",
    description:
      "Your trusted partner for studying abroad. Get free profile assessment, university matching, scholarship guidance, and visa support.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generateServiceMetadata(service: {
  title: string;
  description: string;
  slug: string;
}): Metadata {
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Study Hanker`,
      description: service.description,
      url: `https://studyhanker.com/services/${service.slug}`,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export function generateCountryMetadata(country: {
  name: string;
  description: string;
  slug: string;
}): Metadata {
  return {
    title: `Study in ${country.name} | Study Hanker`,
    description: country.description,
    openGraph: {
      title: `Study in ${country.name} | Study Hanker`,
      description: country.description,
      url: `https://studyhanker.com/countries/${country.slug}`,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `/countries/${country.slug}`,
    },
  };
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://studyhanker.com/blog/${post.slug}`,
      images: [post.image],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export const jsonLdTypes = {
  educationalOrganization: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Study Hanker",
    description:
      "Study abroad consultancy for Bangladeshi students specializing in South Korea, UK, USA, Germany, and more.",
    url: "https://studyhanker.com",
    logo: "https://studyhanker.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "S R Plaza, Mirpur-01",
      addressLocality: "Dhaka",
      postalCode: "1216",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801711895081",
      contactType: "customer service",
      email: "support@studyhanker.com",
    },
    sameAs: [
      "https://facebook.com/studyhanker",
      "https://youtube.com/@studyhanker",
      "https://linkedin.com/company/studyhanker",
    ],
  },
  faqPage: (faqs: { question: string; answer: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),
  breadcrumbList: (items: { name: string; item: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://studyhanker.com${item.item}`,
    })),
  }),
  article: (post: BlogPost) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Study Hanker",
      logo: {
        "@type": "ImageObject",
        url: "https://studyhanker.com/logo.png",
      },
    },
  }),
  service: (service: { title: string; description: string }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Study Hanker",
    },
  }),
};
