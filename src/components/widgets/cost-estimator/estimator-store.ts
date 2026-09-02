"use client";

import { create } from "zustand";

export type StudyLevel = "diploma" | "bachelor" | "master" | "phd";

export interface CostEstimate {
  tuitionMin: number;
  tuitionMax: number;
  livingMin: number;
  livingMax: number;
  totalMin: number;
  totalMax: number;
  scholarshipCount: number;
  workPermit: string;
}

export interface EstimatorState {
  countrySlug: string;
  studyLevel: StudyLevel;
  setCountry: (slug: string) => void;
  setStudyLevel: (level: StudyLevel) => void;
}

export const useEstimatorStore = create<EstimatorState>((set) => ({
  countrySlug: "south-korea",
  studyLevel: "bachelor",
  setCountry: (countrySlug) => set({ countrySlug }),
  setStudyLevel: (studyLevel) => set({ studyLevel }),
}));