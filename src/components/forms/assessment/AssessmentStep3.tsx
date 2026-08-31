"use client";

import * as React from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import type { AssessmentFormData } from "@/lib/validators";

interface Step3Props {
  register: UseFormRegister<AssessmentFormData>;
  errors: FieldErrors<AssessmentFormData>;
  setValue: UseFormSetValue<AssessmentFormData>;
  watch: UseFormWatch<AssessmentFormData>;
}

const studyLevelOptions = [
  { value: "diploma", label: "Diploma" },
  { value: "bsc", label: "Bachelor's" },
  { value: "msc", label: "Master's" },
  { value: "phd", label: "PhD" },
  { value: "other", label: "Other" },
] as const;

const englishOptions = [
  { value: "none", label: "Not yet" },
  { value: "ielts", label: "IELTS" },
  { value: "toefl", label: "TOEFL" },
  { value: "duolingo", label: "Duolingo" },
  { value: "other", label: "Other" },
] as const;

const budgetOptions = [
  { value: "under-15k", label: "Under $15k / yr" },
  { value: "15k-25k", label: "$15k – $25k / yr" },
  { value: "25k-40k", label: "$25k – $40k / yr" },
  { value: "above-40k", label: "Above $40k / yr" },
] as const;

const inputCls = cn(
  "block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground",
  "focus:outline-none focus:ring-2 focus:ring-royal-blue focus:ring-offset-1 focus:border-royal-blue",
  "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/30"
);

export function AssessmentStep3({
  register,
  errors,
  setValue,
  watch,
}: Step3Props) {
  const studyLevel = watch("studyLevel");
  const english = watch("englishProficiency");
  const budget = watch("monthlyBudget");

  return (
    <fieldset data-slot="assessment-step-3" className="flex flex-col gap-6">
      <legend className="sr-only">Step 3: Study preferences</legend>

      <ChoiceGroup
        label="Study Level"
        error={errors.studyLevel?.message}
        value={studyLevel}
        options={studyLevelOptions as unknown as { value: string; label: string }[]}
        onSelect={(v) =>
          setValue("studyLevel", v as AssessmentFormData["studyLevel"], {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
      />

      <Field
        label="Field of Study"
        htmlFor="fieldOfStudy"
        error={errors.fieldOfStudy?.message}
        help="e.g. Computer Science, Business, Medicine"
      >
        <input
          id="fieldOfStudy"
          type="text"
          placeholder="Your intended major"
          aria-invalid={!!errors.fieldOfStudy}
          className={inputCls}
          {...register("fieldOfStudy")}
        />
      </Field>

      <ChoiceGroup
        label="English Proficiency"
        error={errors.englishProficiency?.message}
        value={english}
        options={englishOptions as unknown as { value: string; label: string }[]}
        onSelect={(v) =>
          setValue("englishProficiency", v as AssessmentFormData["englishProficiency"], {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
        optional
      />

      <ChoiceGroup
        label="Annual Budget (Tuition + Living)"
        error={errors.monthlyBudget?.message}
        value={budget}
        options={budgetOptions as unknown as { value: string; label: string }[]}
        onSelect={(v) =>
          setValue("monthlyBudget", v, {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
      />
    </fieldset>
  );
}

function ChoiceGroup({
  label,
  value,
  options,
  onSelect,
  error,
  optional,
}: {
  label: string;
  value: string | undefined;
  options: { value: string; label: string }[];
  onSelect: (v: string) => void;
  error?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <span className="mb-2 block text-sm font-medium text-foreground">
        {label}
        {optional && (
          <span className="ml-2 text-xs font-normal text-muted-foreground">
            (optional)
          </span>
        )}
      </span>
      <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onSelect(opt.value)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                selected
                  ? "border-royal-blue bg-royal-blue/5 text-royal-blue"
                  : "border-input bg-background text-foreground hover:bg-muted",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-1"
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  help,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  help?: string;
  children: React.ReactElement;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
      {help && !error && (
        <p className="mt-1.5 text-xs text-muted-foreground">{help}</p>
      )}
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}