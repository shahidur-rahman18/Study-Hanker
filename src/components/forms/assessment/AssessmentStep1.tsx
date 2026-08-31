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

interface Step1Props {
  register: UseFormRegister<AssessmentFormData>;
  errors: FieldErrors<AssessmentFormData>;
  setValue: UseFormSetValue<AssessmentFormData>;
  watch: UseFormWatch<AssessmentFormData>;
}

const maritalOptions = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
] as const;

const inputCls = cn(
  "block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground",
  "focus:outline-none focus:ring-2 focus:ring-royal-blue focus:ring-offset-1 focus:border-royal-blue",
  "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/30"
);

export function AssessmentStep1({
  register,
  errors,
  setValue,
  watch,
}: Step1Props) {
  const marital = watch("maritalStatus");

  return (
    <fieldset data-slot="assessment-step-1" className="flex flex-col gap-5">
      <legend className="sr-only">Step 1: Contact information</legend>

      <Field
        label="Full Name"
        htmlFor="fullName"
        error={errors.fullName?.message}
      >
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          placeholder="e.g. Tanvir Ahmed"
          aria-invalid={!!errors.fullName}
          className={inputCls}
          {...register("fullName")}
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Phone"
          htmlFor="phone"
          error={errors.phone?.message}
        >
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+8801XXXXXXXXX"
            aria-invalid={!!errors.phone}
            className={inputCls}
            {...register("phone")}
          />
        </Field>

        <Field
          label="Email"
          htmlFor="email"
          error={errors.email?.message}
        >
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            className={inputCls}
            {...register("email")}
          />
        </Field>
      </div>

      <div>
        <span className="mb-2 block text-sm font-medium text-foreground">
          Marital Status
        </span>
        <div role="radiogroup" aria-label="Marital status" className="flex gap-3">
          {maritalOptions.map((opt) => {
            const selected = marital === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() =>
                  setValue("maritalStatus", opt.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                className={cn(
                  "flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors",
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
        {errors.maritalStatus && (
          <p role="alert" className="mt-1.5 text-sm text-destructive">
            {errors.maritalStatus.message}
          </p>
        )}
      </div>
    </fieldset>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
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
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}