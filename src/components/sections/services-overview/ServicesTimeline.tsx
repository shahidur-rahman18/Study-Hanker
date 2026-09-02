"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";
import { getServiceIcon } from "./service-icons";

interface ServicesTimelineProps {
  services: Service[];
}

export function ServicesTimeline({ services }: ServicesTimelineProps) {
  const reduceMotion = useReducedMotion();

  return (
    <ol
      data-slot="services-timeline"
      aria-label="Eight-step study abroad service lifecycle"
      className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
    >
      {services.map((service, index) => {
        const Icon = getServiceIcon(service);
        const stepNumber = index + 1;
        const topFeatures = service.features.slice(0, 3);

        return (
          <motion.li
            key={service.id}
            data-slot="service-card"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.2 },
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: index * 0.05,
                  },
                })}
            className={cn(
              "group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border/60 bg-background p-5 shadow-sm",
              "transition-all duration-300 hover:-translate-y-0.5 hover:border-royal-blue/30 hover:shadow-md"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute right-4 top-4 font-heading text-3xl font-bold leading-none text-muted/70",
                "select-none"
              )}
            >
              {String(stepNumber).padStart(2, "0")}
            </span>

            <div
              className={cn(
                "flex size-12 items-center justify-center rounded-xl bg-royal-blue/10 text-royal-blue",
                "transition-all group-hover:bg-royal-blue group-hover:text-white"
              )}
              aria-hidden="true"
            >
              <Icon className="size-6" />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-base font-semibold leading-snug text-foreground sm:text-lg">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>

            <ul className="mt-1 flex flex-col gap-1.5">
              {topFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-xs text-foreground/80"
                >
                  <Check
                    className="mt-0.5 size-3.5 shrink-0 text-royal-blue"
                    aria-hidden="true"
                  />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/services/${service.slug}`}
              aria-label={`Learn more about ${service.title}`}
              className={cn(
                "mt-auto inline-flex items-center gap-1.5 self-start rounded-md px-1 py-0.5 text-sm font-semibold text-royal-blue",
                "hover:text-royal-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-1"
              )}
            >
              Learn more
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.li>
        );
      })}
    </ol>
  );
}