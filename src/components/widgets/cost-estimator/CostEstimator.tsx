"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Calculator,
  GraduationCap,
  Globe2,
  TrendingDown,
  Award,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { countries } from "@/config/countries";
import {
  useEstimatorStore,
  type StudyLevel,
} from "./estimator-store";
import { estimateCost, formatUSD } from "./cost-calculator";

const studyLevels: { value: StudyLevel; label: string }[] = [
  { value: "diploma", label: "Diploma" },
  { value: "bachelor", label: "Bachelor's" },
  { value: "master", label: "Master's" },
  { value: "phd", label: "PhD" },
];

export function CostEstimator() {
  const reduceMotion = useReducedMotion();
  const { countrySlug, studyLevel, setCountry, setStudyLevel } =
    useEstimatorStore();

  const country =
    countries.find((c) => c.slug === countrySlug) ?? countries[0];
  const cost = estimateCost(country, studyLevel);

  return (
    <div
      data-slot="cost-estimator"
      className={cn(
        "rounded-2xl border border-border/60 bg-background p-6 shadow-sm sm:p-8"
      )}
    >
      <header className="mb-6 flex items-center gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-royal-blue/10 text-royal-blue"
          aria-hidden="true"
        >
          <Calculator className="size-5" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold leading-tight text-foreground sm:text-xl">
            Cost & Eligibility Estimator
          </h3>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Quick yearly estimate — tuition + living.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:gap-5">
        <SelectField
          label="Country"
          icon={<Globe2 className="size-4" aria-hidden="true" />}
        >
          <select
            value={countrySlug}
            onChange={(e) => setCountry(e.target.value)}
            className={cn(
              "block w-full appearance-none rounded-lg border border-input bg-background bg-no-repeat px-4 py-2.5 pr-9 text-sm text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-royal-blue focus:ring-offset-1 focus:border-royal-blue",
              "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2364748b%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-[right_0.75rem_center] bg-[length:14px_14px]"
            )}
            aria-label="Select country"
          >
            {countries.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </SelectField>

        <div>
          <span className="mb-2 block text-sm font-medium text-foreground">
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap
                className="size-4 text-royal-blue"
                aria-hidden="true"
              />
              Study Level
            </span>
          </span>
          <div role="radiogroup" aria-label="Study level" className="grid grid-cols-2 gap-2 min-[480px]:grid-cols-4">
            {studyLevels.map((lvl) => {
              const selected = studyLevel === lvl.value;
              return (
                <button
                  key={lvl.value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setStudyLevel(lvl.value)}
                  className={cn(
                    "flex w-full min-w-0 items-center justify-center rounded-lg border px-2.5 py-2 text-xs font-medium transition-colors sm:text-sm text-center",
                    selected
                      ? "border-royal-blue bg-royal-blue/5 text-royal-blue"
                      : "border-input bg-background text-foreground hover:bg-muted",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-1"
                  )}
                >
                  <span className="truncate">{lvl.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div
        key={`${countrySlug}-${studyLevel}`}
        {...(reduceMotion
          ? {}
          : {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, ease: "easeOut" },
            })}
        className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
        aria-live="polite"
      >
        <ResultCard
          icon={<TrendingDown className="size-4" aria-hidden="true" />}
          label="Estimated Tuition / yr"
          value={`${formatUSD(cost.tuitionMin)} – ${formatUSD(cost.tuitionMax)}`}
        />
        <ResultCard
          icon={<Briefcase className="size-4" aria-hidden="true" />}
          label="Living Cost / yr"
          value={`${formatUSD(cost.livingMin)} – ${formatUSD(cost.livingMax)}`}
        />
        <ResultCard
          icon={<Calculator className="size-4" aria-hidden="true" />}
          label="Total Estimate / yr"
          value={`${formatUSD(cost.totalMin)} – ${formatUSD(cost.totalMax)}`}
          highlight
        />
        <ScholarshipCard
          count={cost.scholarshipCount}
          country={country.name}
        />
      </motion.div>

      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        Indicative figures based on public data. Scholarships, part-time work,
        and currency fluctuations can change your real cost. For an exact
        assessment,{" "}
        <a
          href="#assessment"
          className="font-semibold text-royal-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-1 rounded-sm"
        >
          get a free profile assessment
        </a>
        .
      </p>
    </div>
  );
}

function SelectField({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactElement;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span className="text-royal-blue">{icon}</span>
          {label}
        </span>
      </label>
      {children}
    </div>
  );
}

function ResultCard({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border p-4",
        highlight
          ? "border-royal-blue/30 bg-royal-blue/5"
          : "border-border bg-background"
      )}
    >
      <div
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg",
          highlight ? "bg-royal-blue text-white" : "bg-royal-blue/10 text-royal-blue"
        )}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="flex min-w-0 flex-col">
        <span className="text-xs font-medium text-muted-foreground">
          {label}
        </span>
        <span
          className={cn(
            "mt-0.5 font-heading text-base min-[380px]:text-lg font-bold leading-tight sm:text-xl",
            highlight ? "text-royal-blue-700" : "text-foreground"
          )}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function ScholarshipCard({
  count,
  country,
}: {
  count: number;
  country: string;
}) {
  const available = count > 0;
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border p-4",
        available
          ? "border-golden-amber/30 bg-golden-amber/5"
          : "border-border bg-background"
      )}
    >
      <div
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg",
          available
            ? "bg-golden-amber text-white"
            : "bg-muted text-muted-foreground"
        )}
        aria-hidden="true"
      >
        <Award className="size-4" />
      </div>
      <div className="flex min-w-0 flex-col">
        <span className="text-xs font-medium text-muted-foreground">
          Scholarships in {country}
        </span>
        <span
          className={cn(
            "mt-0.5 font-heading text-lg font-bold leading-tight sm:text-xl",
            available ? "text-golden-amber-600" : "text-foreground"
          )}
        >
          {count} program{count === 1 ? "" : "s"} available
        </span>
      </div>
    </div>
  );
}