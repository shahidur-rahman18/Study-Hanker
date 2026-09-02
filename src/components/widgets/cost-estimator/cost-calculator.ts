import type { Country } from "@/types";
import type { StudyLevel, CostEstimate } from "./estimator-store";

const LIVING_COST_PER_YEAR: Record<string, [number, number]> = {
  "south-korea": [6000, 12000],
  uk: [12000, 18000],
  usa: [15000, 25000],
  germany: [8000, 12000],
  malta: [8000, 12000],
  cyprus: [7000, 11000],
  china: [4000, 8000],
  japan: [8000, 14000],
  australia: [15000, 22000],
  canada: [12000, 18000],
};

const LEVEL_MULTIPLIER: Record<StudyLevel, number> = {
  diploma: 0.85,
  bachelor: 1,
  master: 1.15,
  phd: 0.6,
};

function parseTuitionRange(value: string): [number, number] {
  const matches = value.match(/\$([\d,]+)/g);
  if (!matches || matches.length === 0) return [0, 0];
  const numbers = matches.map((m) => Number(m.replace(/[$,]/g, "")));
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return [min, max];
}

export function estimateCost(
  country: Country,
  level: StudyLevel
): CostEstimate {
  const [tMin, tMax] = parseTuitionRange(country.avgTuition);
  const mult = LEVEL_MULTIPLIER[level];

  const tuitionMin = Math.round(tMin * mult);
  const tuitionMax = Math.round(tMax * mult);

  const [lMin, lMax] = LIVING_COST_PER_YEAR[country.slug] ?? [6000, 12000];
  const totalMin = tuitionMin + lMin;
  const totalMax = tuitionMax + lMax;

  return {
    tuitionMin,
    tuitionMax,
    livingMin: lMin,
    livingMax: lMax,
    totalMin,
    totalMax,
    scholarshipCount: country.scholarships.length,
    workPermit: country.workPermitInfo,
  };
}

export function formatUSD(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}