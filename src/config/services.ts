import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "profile-analysis",
    title: "Profile Analysis",
    slug: "profile-analysis",
    description:
      "Comprehensive evaluation of your academic background, test scores, and career goals to identify the best-fit universities and programs.",
    icon: "UserSearch",
    features: [
      "Academic record evaluation",
      "Standardized test score analysis",
      "Career goal alignment",
      "Strength and weakness assessment",
      "Personalized recommendations",
    ],
    process: [
      "Initial consultation and document review",
      "Academic profile scoring",
      "Identification of suitable programs",
      "Strategic gap analysis",
      "Final profile report delivery",
    ],
  },
  {
    id: "university-matching",
    title: "University & Subject Matching",
    slug: "university-matching",
    description:
      "Data-driven university selection based on your profile, budget, and preferences to maximize admission chances.",
    icon: "Building2",
    features: [
      "AI-powered university matching",
      "Ranking and reputation analysis",
      "Program curriculum review",
      "Faculty and research alignment",
      "Application probability assessment",
    ],
    process: [
      "Profile-based university shortlisting",
      "Detailed program comparison",
      "Faculty and research matching",
      "Admission probability analysis",
      "Final selection with student approval",
    ],
  },
  {
    id: "country-guidance",
    title: "Country Guidance",
    slug: "country-guidance",
    description:
      "Expert advice on selecting the right study destination based on career goals, budget, and immigration prospects.",
    icon: "Globe",
    features: [
      "Country comparison analysis",
      "Immigration policy guidance",
      "Cost of living breakdown",
      "Cultural adaptation tips",
      "Post-study work opportunities",
    ],
    process: [
      "Career goal assessment",
      "Country suitability analysis",
      "Budget and ROI calculation",
      "Visa pathway planning",
      "Final country recommendation",
    ],
  },
  {
    id: "application-support",
    title: "Application Support",
    slug: "application-support",
    description:
      "End-to-end application assistance including SOP writing, document preparation, and submission management.",
    icon: "FileText",
    features: [
      "Statement of Purpose (SOP) writing",
      "Letter of Recommendation (LOR) guidance",
      "Document authentication",
      "Application form filling",
      "Deadline management",
    ],
    process: [
      "Document checklist preparation",
      "SOP and essay drafting",
      "Recommendation letter coordination",
      "Application form completion",
      "Final review and submission",
    ],
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    slug: "interview-preparation",
    description:
      "Mock interviews and coaching sessions to prepare you for university and visa interviews with confidence.",
    icon: "MessageSquare",
    features: [
      "Mock interview sessions",
      "Common question preparation",
      "Body language coaching",
      "Technical interview practice",
      "Visa interview simulation",
    ],
    process: [
      "Interview format briefing",
      "Mock interview session 1",
      "Feedback and improvement plan",
      "Mock interview session 2",
      "Final preparation checklist",
    ],
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    slug: "visa-assistance",
    description:
      "Complete visa application support from document preparation to interview preparation for successful approval.",
    icon: "Passport",
    features: [
      "Document checklist preparation",
      "Visa form filling",
      "Financial documentation guidance",
      "Interview preparation",
      "Application tracking",
    ],
    process: [
      "Visa requirement assessment",
      "Document preparation and verification",
      "Application form completion",
      "Interview preparation",
      "Submission and follow-up",
    ],
  },
  {
    id: "pre-arrival-guide",
    title: "Pre-Arrival Guide",
    slug: "pre-arrival-guide",
    description:
      "Comprehensive pre-departure briefing covering accommodation, travel, insurance, and cultural adaptation.",
    icon: "Plane",
    features: [
      "Accommodation arrangements",
      "Travel booking guidance",
      "Health insurance setup",
      "Bank account opening",
      "Packing and culture briefing",
    ],
    process: [
      "Pre-departure orientation",
      "Accommodation booking support",
      "Travel arrangements",
      "Documentation checklist",
      "Final briefing session",
    ],
  },
  {
    id: "post-arrival-support",
    title: "Post-Arrival Settlement",
    slug: "post-arrival-support",
    description:
      "Ongoing support after arrival including registration, accommodation, and integration assistance.",
    icon: "Home",
    features: [
      "Airport pickup arrangement",
      "University registration help",
      "Local area orientation",
      "Bank and SIM setup",
      "Emergency support",
    ],
    process: [
      "Airport pickup coordination",
      "Initial accommodation support",
      "University registration assistance",
      "Local services setup",
      "Ongoing mentorship connection",
    ],
  },
];
