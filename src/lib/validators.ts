import { z } from "zod";

export const phoneRegex = /^\+?[0-9]{10,15}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const step1Schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  email: z.string().regex(emailRegex, "Please enter a valid email address"),
  maritalStatus: z.enum(["single", "married"], { message: "Please select marital status" }),
});

export const step2Schema = z.object({
  qualification: z.string().min(2, "Please enter your qualification"),
  gpaResult: z.string().min(1, "Please enter your GPA/result"),
});

export const step3Schema = z.object({
  studyLevel: z.enum(["bsc", "msc", "phd", "diploma", "other"], { message: "Please select study level" }),
  fieldOfStudy: z.string().min(2, "Please enter your field of study"),
  englishProficiency: z.enum(["none", "ielts", "toefl", "duolingo", "other"], { message: "Please select English proficiency" }).optional(),
  monthlyBudget: z.string().min(1, "Please enter your monthly budget"),
});

export const assessmentSchema = step1Schema.merge(step2Schema).merge(step3Schema);

export const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().regex(emailRegex, "Please enter a valid email address"),
  phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  country: z.string().min(2, "Please select a country"),
  date: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
});

export type AssessmentFormData = z.infer<typeof assessmentSchema>;
export type ConsultationFormData = z.infer<typeof consultationSchema>;
export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
