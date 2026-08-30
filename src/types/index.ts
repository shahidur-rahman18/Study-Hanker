export interface Country {
  id: string;
  name: string;
  slug: string;
  capital: string;
  currency: string;
  intakes: string[];
  avgTuition: string;
  flag: string;
  description: string;
  scholarships: string[];
  universities: University[];
  workPermitInfo: string;
}

export interface University {
  id: string;
  name: string;
  ranking: string;
  location: string;
  website: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  process: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  university: string;
  country: string;
  quote: string;
  image: string;
  rating: number;
  tag: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
}

export interface AssessmentForm {
  step1: {
    fullName: string;
    phone: string;
    email: string;
    maritalStatus: string;
  };
  step2: {
    qualification: string;
    gpaResult: string;
  };
  step3: {
    studyLevel: string;
    fieldOfStudy: string;
    englishProficiency: string;
    monthlyBudget: string;
  };
}

export interface ConsultationForm {
  name: string;
  email: string;
  phone: string;
  country: string;
  date: string;
  message: string;
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}
