import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { countries } from "@/config/countries";
import { FeaturedDestinationsGrid } from "./featured-destinations/FeaturedDestinationsGrid";

const FOCUS_COUNTRY_SLUG = "south-korea";

export function FeaturedDestinations() {
  return (
    <section
      data-slot="featured-destinations"
      aria-label="Featured study destinations"
      className={cn(
        "relative w-full overflow-hidden bg-gradient-to-b from-background to-royal-blue-50/30",
        "py-16 sm:py-20 md:py-24"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -z-10 h-24",
          "bg-gradient-to-b from-background to-transparent"
        )}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionHeader
              as="h2"
              badge="Top Destinations"
              title="10 Countries, One Global Mission"
              description="From South Korea to Canada — pick a destination that matches your budget, career goals, and lifestyle."
              align="left"
              size="default"
            />
          </div>
          <a
            href="/countries"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground",
              "hover:border-royal-blue/40 hover:text-royal-blue hover:bg-royal-blue/5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue focus-visible:ring-offset-2"
            )}
          >
            View all countries
          </a>
        </div>

        <div className="mt-10 sm:mt-12">
          <FeaturedDestinationsGrid
            countries={countries}
            focusSlug={FOCUS_COUNTRY_SLUG}
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;