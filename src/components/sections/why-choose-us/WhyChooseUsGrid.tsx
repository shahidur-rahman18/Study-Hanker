"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Eye,
  ShieldCheck,
  Users,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

const pillars: Pillar[] = [
  {
    icon: Eye,
    title: "Transparent Process",
    description:
      "Step-by-step guidance with no surprises. You always know what to expect, what is required, and what happens next.",
    highlight: "100% clarity",
  },
  {
    icon: ShieldCheck,
    title: "No Hidden Fees",
    description:
      "Honest pricing, upfront quotes, and no last-minute charges. What we quote is what you pay — period.",
    highlight: "0 surprises",
  },
  {
    icon: Users,
    title: "Dedicated Mentorship",
    description:
      "A personal mentor stays with you from the first counseling call through arrival at your university and beyond.",
    highlight: "1-on-1 support",
  },
  {
    icon: HeartHandshake,
    title: "Post-Arrival Support",
    description:
      "We don't disappear after visa approval. Airport pickup guidance, accommodation help, and on-campus support included.",
    highlight: "Beyond borders",
  },
];

export function WhyChooseUsGrid() {
  const reduceMotion = useReducedMotion();

  const container = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
      };

  return (
    <motion.ul
      data-slot="why-choose-us-grid"
      {...container}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
      aria-label="Four reasons to choose Study Hanker"
    >
      {pillars.map((pillar) => {
        const Icon = pillar.icon;
        return (
          <motion.li
            key={pillar.title}
            data-slot="why-choose-us-card"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.3 },
                  transition: { duration: 0.5, ease: "easeOut" },
                })}
            className={cn(
              "group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border/60 bg-background p-6 shadow-sm",
              "transition-all duration-300 hover:border-royal-blue/30 hover:shadow-md hover:-translate-y-0.5"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-royal-blue/5",
                "transition-transform duration-500 group-hover:scale-125 group-hover:bg-royal-blue/10"
              )}
            />

            <div className="flex items-start justify-between gap-3">
              <div
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-xl bg-royal-blue/10 text-royal-blue",
                  "transition-colors group-hover:bg-royal-blue group-hover:text-white"
                )}
                aria-hidden="true"
              >
                <Icon className="size-6" />
              </div>
              <span
                className={cn(
                  "rounded-full bg-golden-amber/10 px-2.5 py-1 text-xs font-semibold text-golden-amber-600",
                  "whitespace-nowrap"
                )}
              >
                {pillar.highlight}
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="font-heading text-lg font-semibold leading-snug text-foreground sm:text-xl">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {pillar.description}
              </p>
            </div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}