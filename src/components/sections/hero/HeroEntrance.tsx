"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Plane, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroStat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

const stats: HeroStat[] = [
  { icon: Users, value: "100+", label: "Students Placed" },
  { icon: Plane, value: "98%", label: "Visa Success Rate" },
  { icon: Award, value: "10+", label: "Scholarships Won" },
];

interface HeroProps {
  headline?: string;
  highlighted?: string;
  subheadline?: string;
}

export function HeroEntranceContent({
  headline = "BANGLADESH",
  highlighted = "WORLD",
  subheadline = "Your Path to Study Abroad, Guided Right",
}: HeroProps) {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" as const },
      };

  const container = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
      };

  return (
    <motion.div
      data-slot="hero-entrance"
      {...container}
      className="flex w-full flex-col items-start text-left"
    >
      <motion.h1
        {...fadeUp}
        className="mt-6 font-heading text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl md:text-3xl"
      >
        <span
          className="inline-flex items-center gap-3 rounded-2xl border border-royal-blue/20 bg-royal-blue/5 px-5 py-2 sm:gap-4 sm:px-6 sm:py-2.5"
          aria-hidden="true"
        >
          <span>{headline}</span>
          <span className="bg-gradient-to-r from-royal-blue via-royal-blue-600 to-golden-amber bg-clip-text text-transparent">
            → {highlighted}
          </span>
        </span>
      </motion.h1>

      <motion.p
        {...fadeUp}
        className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
      >
        {subheadline}. Get a free personalized profile analysis and find the best university, scholarship, and country match — made for Bangladeshi students.
      </motion.p>

      <motion.div
        {...fadeUp}
        className="mt-8 flex flex-col items-start gap-3 sm:flex-row"
      >
        <a
          href="#assessment"
          className={cn(
            "group inline-flex items-center justify-center gap-2 rounded-lg bg-royal-blue px-6 py-3 text-base font-semibold text-white shadow-lg shadow-royal-blue/20 transition-all",
            "hover:bg-royal-blue-700 hover:shadow-xl hover:shadow-royal-blue/30",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-2",
            "active:scale-[0.98]"
          )}
        >
          Get Free Assessment
          <ArrowRight
            className="size-5 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
        <a
          href="#success-stories"
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors",
            "hover:bg-muted hover:border-royal-blue/30",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-2"
          )}
        >
          See Success Stories
        </a>
      </motion.div>

      <motion.dl
        {...fadeUp}
        className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        aria-label="Trust metrics"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              data-slot="hero-stat"
              className={cn(
                "flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-background/70 px-5 py-5 backdrop-blur",
                "shadow-sm transition-all hover:border-royal-blue/30 hover:shadow-md"
              )}
            >
              <div
                className="flex size-10 items-center justify-center rounded-full bg-royal-blue/10 text-royal-blue"
                aria-hidden="true"
              >
                <Icon className="size-5" />
              </div>
              <dt className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          );
        })}
      </motion.dl>
    </motion.div>
  );
}