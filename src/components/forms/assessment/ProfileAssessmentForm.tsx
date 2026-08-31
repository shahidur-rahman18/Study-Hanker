"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Send } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import {
  assessmentSchema,
  type AssessmentFormData,
  step1Schema,
  step2Schema,
  step3Schema,
  type Step1Data,
  type Step2Data,
  type Step3Data,
} from "@/lib/validators";
import { AssessmentStep1 } from "./AssessmentStep1";
import { AssessmentStep2 } from "./AssessmentStep2";
import { AssessmentStep3 } from "./AssessmentStep3";

const steps = [
  { id: 1, title: "Contact", description: "How can we reach you?" },
  { id: 2, title: "Education", description: "Your academic background" },
  { id: 3, title: "Preferences", description: "Where do you want to study?" },
] as const;

type StepNumber = 1 | 2 | 3;

interface SubmitState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
}

export function ProfileAssessmentForm() {
  const [currentStep, setCurrentStep] = React.useState<StepNumber>(1);
  const [formData, setFormData] = React.useState<Partial<AssessmentFormData>>({});
  const [submitState, setSubmitState] = React.useState<SubmitState>({ status: "idle" });

  const stepSchemas = { 1: step1Schema, 2: step2Schema, 3: step3Schema } as const;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    watch,
    setValue,
    reset,
    getValues,
  } = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
    mode: "onChange",
    defaultValues: {
      fullName: formData.fullName ?? "",
      email: formData.email ?? "",
      phone: formData.phone ?? "",
      maritalStatus: formData.maritalStatus,
      qualification: formData.qualification ?? "",
      gpaResult: formData.gpaResult ?? "",
      studyLevel: formData.studyLevel,
      fieldOfStudy: formData.fieldOfStudy ?? "",
      englishProficiency: formData.englishProficiency,
      monthlyBudget: formData.monthlyBudget ?? "",
    },
  });

  const values = watch();

  const handleNext = async () => {
    const fieldsByStep: Record<StepNumber, (keyof AssessmentFormData)[]> = {
      1: ["fullName", "email", "phone", "maritalStatus"],
      2: ["qualification", "gpaResult"],
      3: ["studyLevel", "fieldOfStudy", "englishProficiency", "monthlyBudget"],
    };
    const ok = await trigger(fieldsByStep[currentStep] as never);
    if (!ok) return;

    setFormData((prev) => ({ ...prev, ...getValues() }));

    if (currentStep < 3) {
      setCurrentStep(((currentStep + 1) as StepNumber));
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((currentStep - 1) as StepNumber);
  };

  const onSubmit: SubmitHandler<AssessmentFormData> = async (data) => {
    setSubmitState({ status: "submitting" });
    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message ?? "Submission failed");
      }
      setSubmitState({
        status: "success",
        message: "Thanks! Our mentors will contact you within 24 hours.",
      });
      reset();
      setFormData({});
      setCurrentStep(1);
    } catch (e) {
      setSubmitState({
        status: "error",
        message: e instanceof Error ? e.message : "Something went wrong",
      });
    }
  };

  if (submitState.status === "success") {
    return (
      <motion.div
        data-slot="assessment-success"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "flex flex-col items-center justify-center gap-4 rounded-2xl border border-royal-blue/20 bg-background p-10 text-center shadow-sm"
        )}
        role="status"
        aria-live="polite"
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-royal-blue/10 text-royal-blue">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-foreground">
          Profile Submitted!
        </h3>
        <p className="max-w-md text-muted-foreground">{submitState.message}</p>
        <button
          type="button"
          onClick={() => setSubmitState({ status: "idle" })}
          className={cn(
            "mt-2 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground",
            "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-2"
          )}
        >
          Submit another profile
        </button>
      </motion.div>
    );
  }

  return (
    <div
      data-slot="profile-assessment-form"
      className={cn(
        "rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur sm:p-8"
      )}
    >
      <ProgressIndicator currentStep={currentStep} steps={steps} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Free profile assessment form"
        className="mt-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {currentStep === 1 && (
              <AssessmentStep1
                register={register}
                errors={errors}
                setValue={setValue}
                watch={watch}
              />
            )}
            {currentStep === 2 && (
              <AssessmentStep2
                register={register}
                errors={errors}
                values={values}
              />
            )}
            {currentStep === 3 && (
              <AssessmentStep3
                register={register}
                errors={errors}
                setValue={setValue}
                watch={watch}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {submitState.status === "error" && (
          <p
            role="alert"
            className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
          >
            {submitState.message}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1 || submitState.status === "submitting"}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground",
              "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back
          </button>

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg bg-royal-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-royal-blue/20",
                "hover:bg-royal-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-2",
                "active:scale-[0.98]"
              )}
            >
              Next Step
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitState.status === "submitting"}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg bg-royal-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-royal-blue/20",
                "hover:bg-royal-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-2",
                "active:scale-[0.98] disabled:opacity-70"
              )}
            >
              {submitState.status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  Submitting…
                </>
              ) : (
                <>
                  Submit Profile
                  <Send className="size-4" aria-hidden="true" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function ProgressIndicator({
  currentStep,
  steps,
}: {
  currentStep: StepNumber;
  steps: readonly { id: number; title: string; description: string }[];
}) {
  return (
    <ol
      data-slot="assessment-progress"
      className="grid grid-cols-3 gap-3"
      aria-label="Form progress"
    >
      {steps.map((step) => {
        const active = step.id === currentStep;
        const complete = step.id < currentStep;
        return (
          <li
            key={step.id}
            aria-current={active ? "step" : undefined}
            className="flex flex-col items-start gap-1"
          >
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex size-7 items-center justify-center rounded-full text-xs font-semibold transition-colors",
                  complete && "bg-royal-blue text-white",
                  active && "bg-royal-blue text-white ring-4 ring-royal-blue/15",
                  !active && !complete && "bg-muted text-muted-foreground"
                )}
                aria-hidden="true"
              >
                {complete ? <CheckCircle2 className="size-4" /> : step.id}
              </span>
              <span
                className={cn(
                  "text-sm font-medium",
                  active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {step.title}
              </span>
            </div>
            <span className="ml-9 text-xs text-muted-foreground">
              {step.description}
            </span>
          </li>
        );
      })}
    </ol>
  );
}