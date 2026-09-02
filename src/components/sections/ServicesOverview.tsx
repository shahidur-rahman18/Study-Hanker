import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { services } from "@/config/services";
import { ServicesTimeline } from "./services-overview/ServicesTimeline";

export function ServicesOverview() {
  return (
    <section
      data-slot="services-overview"
      aria-label="Core services and study abroad lifecycle"
      className={cn(
        "relative w-full overflow-hidden bg-deep-navy text-white",
        "py-16 sm:py-20 md:py-24"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-0",
          "bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.10),transparent_60%)]"
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-0 opacity-[0.06]",
          "bg-[linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)]",
          "bg-[size:48px_48px]"
        )}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionHeader
              as="h2"
              badge="8-Step Lifecycle"
              title="End-to-End Support, From Dream to Destination"
              description="From the first profile review to settling into your new city abroad — every step is covered, mentored, and tracked."
              align="left"
              size="default"
              className="[&_[data-slot=section-header-title]]:text-white [&_[data-slot=section-header-description]]:text-white/75"
            />
          </div>
          <a
            href="/services"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur",
              "hover:border-white/40 hover:bg-white/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy"
            )}
          >
            View all services
          </a>
        </div>

        <div className="mt-10 sm:mt-12">
          <ServicesTimeline services={services} />
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;