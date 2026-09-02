"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GraduationCap, MapPin, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Country } from "@/types";

interface FeaturedDestinationsGridProps {
  countries: Country[];
  focusSlug: string;
}

interface CardData {
  country: Country;
  isFocus: boolean;
}

export function FeaturedDestinationsGrid({
  countries,
  focusSlug,
}: FeaturedDestinationsGridProps) {
  const reduceMotion = useReducedMotion();

  const cards: CardData[] = countries.map((c) => ({
    country: c,
    isFocus: c.slug === focusSlug,
  }));

  const [focus, ...rest] = cards;

  const container = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.1 },
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
      };

  return (
    <motion.div
      data-slot="featured-destinations-grid"
      {...container}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[minmax(0,1fr)]"
    >
      {focus && (
        <FocusCard
          country={focus.country}
          reduceMotion={!!reduceMotion}
        />
      )}

      {rest.map(({ country, isFocus }) => (
        <CountryCard
          key={country.id}
          country={country}
          isFocus={isFocus}
          reduceMotion={!!reduceMotion}
        />
      ))}
    </motion.div>
  );
}

function FocusCard({
  country,
  reduceMotion,
}: {
  country: Country;
  reduceMotion: boolean;
}) {
  return (
    <motion.a
      href={`/countries/${country.slug}`}
      data-slot="destination-focus-card"
      aria-label={`${country.name} — our focus country. View details.`}
      {...(reduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.2 },
            transition: { duration: 0.5, ease: "easeOut" },
          })}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-royal-blue bg-deep-navy p-6 text-white shadow-lg",
        "transition-all duration-300 hover:shadow-2xl hover:border-royal-blue-600 sm:col-span-2 sm:p-8",
        "lg:row-span-2"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-0",
          "bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.45),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.18),transparent_60%)]"
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-0 opacity-[0.08]",
          "bg-[linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)]",
          "bg-[size:32px_32px]"
        )}
      />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full bg-golden-amber/95 px-3 py-1 text-xs font-semibold text-deep-navy"
            )}
          >
            <Star className="size-3.5 fill-current" aria-hidden="true" />
            Focus Country
          </span>
          <div
            className="relative size-14 overflow-hidden rounded-md ring-2 ring-white/20"
            aria-hidden="true"
          >
            <Image
              src={country.flag}
              alt=""
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
            {country.name}
          </h3>
          <p className="flex items-center gap-1.5 text-sm text-white/80">
            <MapPin className="size-4" aria-hidden="true" />
            Capital · {country.capital}
          </p>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
          {country.description}
        </p>

        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-white/15 bg-white/5 p-3 backdrop-blur">
            <dt className="text-xs font-medium text-white/70">Avg. Tuition</dt>
            <dd className="mt-0.5 text-sm font-semibold text-white">
              {country.avgTuition}
            </dd>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-3 backdrop-blur">
            <dt className="text-xs font-medium text-white/70">Intakes</dt>
            <dd className="mt-0.5 text-sm font-semibold text-white">
              {country.intakes.join(" · ")}
            </dd>
          </div>
        </dl>
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-golden-amber">
          Explore {country.name}
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white/90"
          )}
        >
          <GraduationCap className="size-3.5" aria-hidden="true" />
          {country.universities.length}+ Top Unis
        </span>
      </div>
    </motion.a>
  );
}

function CountryCard({
  country,
  isFocus,
  reduceMotion,
}: {
  country: Country;
  isFocus: boolean;
  reduceMotion: boolean;
}) {
  return (
    <motion.a
      href={`/countries/${country.slug}`}
      data-slot="destination-card"
      aria-label={`Study in ${country.name}. View details.`}
      {...(reduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.2 },
            transition: { duration: 0.4, ease: "easeOut" },
          })}
      className={cn(
        "group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border/60 bg-background p-5 shadow-sm",
        "transition-all duration-300 hover:-translate-y-0.5 hover:border-royal-blue/30 hover:shadow-md",
        isFocus && "ring-1 ring-royal-blue/20"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="relative size-10 overflow-hidden rounded-md ring-1 ring-border"
            aria-hidden="true"
          >
            <Image
              src={country.flag}
              alt=""
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-heading text-base font-semibold leading-tight text-foreground">
              {country.name}
            </h3>
            <p className="text-xs text-muted-foreground">
              {country.capital} · {country.currency}
            </p>
          </div>
        </div>
        <ArrowUpRight
          className={cn(
            "size-4 text-muted-foreground transition-all",
            "group-hover:text-royal-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          )}
          aria-hidden="true"
        />
      </div>

      <p className="line-clamp-2 text-sm text-muted-foreground">
        {country.description}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
        <span className="rounded-full bg-royal-blue/5 px-2.5 py-1 text-xs font-medium text-royal-blue">
          {country.avgTuition.split(" - ")[0]}+
        </span>
        <span className="rounded-full bg-golden-amber/10 px-2.5 py-1 text-xs font-medium text-golden-amber-600">
          {country.universities.length} Top Unis
        </span>
      </div>
    </motion.a>
  );
}