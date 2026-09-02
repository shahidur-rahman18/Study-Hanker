"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      data-slot="testimonial-card"
      className={cn(
        "flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-background p-6 shadow-sm"
      )}
    >
      <div className="flex items-center justify-between">
        <div
          aria-label={`${testimonial.rating} out of 5 stars`}
          className="flex items-center gap-0.5 text-golden-amber"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "size-4",
                i < testimonial.rating
                  ? "fill-current"
                  : "fill-transparent opacity-40"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <Quote
          className="size-6 text-royal-blue/15"
          aria-hidden="true"
        />
      </div>

      <blockquote className="flex-1">
        <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <footer className="flex items-center gap-3 border-t border-border/60 pt-4">
        <div
          className="relative size-11 shrink-0 overflow-hidden rounded-full bg-royal-blue/10 ring-1 ring-border"
          aria-hidden="true"
        >
          <Image
            src={testimonial.image}
            alt=""
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col">
          <cite className="truncate text-sm font-semibold not-italic text-foreground">
            {testimonial.name}
          </cite>
          <span className="truncate text-xs text-muted-foreground">
            {testimonial.university} · {testimonial.country}
          </span>
        </div>
      </footer>
    </article>
  );
}

interface WallOfFameFilterProps {
  testimonials: Testimonial[];
}

const ALL = "All" as const;

export function WallOfFameFilter({ testimonials }: WallOfFameFilterProps) {
  const reduceMotion = useReducedMotion();
  const tags = React.useMemo(() => {
    const set = new Set<string>([ALL]);
    testimonials.forEach((t) => set.add(t.tag));
    return Array.from(set);
  }, [testimonials]);

  const [active, setActive] = React.useState<string>(ALL);

  const filtered = React.useMemo(
    () => (active === ALL ? testimonials : testimonials.filter((t) => t.tag === active)),
    [testimonials, active]
  );

  return (
    <div data-slot="wall-of-fame-filter" className="flex flex-col gap-6">
      <div
        role="tablist"
        aria-label="Filter testimonials by country"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {tags.map((tag) => {
          const selected = tag === active;
          return (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tag)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                selected
                  ? "border-royal-blue bg-royal-blue text-white shadow-sm shadow-royal-blue/20"
                  : "border-border bg-background text-foreground hover:border-royal-blue/30 hover:bg-royal-blue/5 hover:text-royal-blue",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-2"
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <motion.ul
        key={active}
        data-slot="testimonial-grid"
        {...(reduceMotion
          ? {}
          : {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.35, ease: "easeOut" },
            })}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        aria-live="polite"
      >
        {filtered.map((t) => (
          <li key={t.id} className="h-full">
            <TestimonialCard testimonial={t} />
          </li>
        ))}
      </motion.ul>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No testimonials yet for this country.
        </p>
      )}
    </div>
  );
}