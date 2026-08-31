"use client";

import * as React from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";
import type { AssessmentFormData } from "@/lib/validators";

interface Step2Props {
  register: UseFormRegister<AssessmentFormData>;
  errors: FieldErrors<AssessmentFormData>;
  values: Partial<AssessmentFormData>;
}

const qualificationOptions = [
  "SSC",
  "HSC",
  "Diploma",
  "Bachelor's",
  "Master's",
];

const inputCls = cn(
  "block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground",
  "focus:outline-none focus:ring-2 focus:ring-royal-blue focus:ring-offset-1 focus:border-royal-blue",
  "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/30"
);

export function AssessmentStep2({
  register,
  errors,
  values,
}: Step2Props) {
  return (
    <fieldset data-slot="assessment-step-2" className="flex flex-col gap-5">
      <legend className="sr-only">Step 2: Education background</legend>

      <div>
        <span className="mb-2 block text-sm font-medium text-foreground">
          Highest Qualification
        </span>
        <div
          role="radiogroup"
          aria-label="Highest qualification"
          className="flex flex-wrap gap-2"
        >
          {qualificationOptions.map((opt) => {
            const selected = values.qualification === opt;
            return (
              <button
                key={opt}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => {
                  const input = document.querySelector<HTMLInputElement>(
                    'input[name="qualification"]'
                  );
                  if (input) {
                    const setter = Object.getOwnPropertyDescriptor(
                      window.HTMLInputElement.prototype,
                      "value"
                    )?.set;
                    setter?.call(input, opt);
                    input.dispatchEvent(new Event("input", { bubbles: true }));
                    input.dispatchEvent(new Event("change", { bubbles: true }));
                  }
                }}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  selected
                    ? "border-royal-blue bg-royal-blue/5 text-royal-blue"
                    : "border-input bg-background text-foreground hover:bg-muted",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-1"
                )}
              >
                {opt}
              </button>
            );
          })}
        </div>
        <input type="hidden" {...register("qualification")} />
        {errors.qualification && (
          <p role="alert" className="mt-1.5 text-sm text-destructive">
            {errors.qualification.message}
          </p>
        )}
      </div>

      <Field
        label="GPA / Result"
        htmlFor="gpaResult"
        error={errors.gpaResult?.message}
        help="e.g. 4.85 out of 5.00, or 75%"
      >
        <input
          id="gpaResult"
          type="text"
          inputMode="decimal"
          placeholder="e.g. 4.85 / 5.00"
          aria-invalid={!!errors.gpaResult}
          className={inputCls}
          {...register("gpaResult")}
        />
      </Field>
    </fieldset>
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