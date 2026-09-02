import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CostEstimator } from "@/components/widgets/cost-estimator/CostEstimator";

export function CostEstimatorSection() {
  return (
    <section
      data-slot="cost-estimator-section"
      aria-label="Cost and eligibility estimator"
      className={cn(
        "relative w-full overflow-hidden",
        "bg-gradient-to-b from-background via-royal-blue-50/30 to-background",
        "py-16 sm:py-20 md:py-24"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[radial-gradient(circle_at_85%_15%,rgba(245,158,11,0.08),transparent_45%),radial-gradient(circle_at_15%_85%,rgba(37,99,235,0.08),transparent_50%)]"
        )}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <SectionHeader
              as="h2"
              badge="Plan Your Budget"
              title="Know Your Real Cost Before You Apply"
              description="Pick a country and study level to get a transparent estimate of yearly tuition, living expenses, and available scholarships — in seconds."
              align="left"
              size="default"
            />
            <ul className="mt-6 flex flex-col gap-3 text-sm text-foreground/80">
              {[
                "Up-to-date tuition ranges per country",
                "Living cost estimates (accommodation + food + transport)",
                "Scholarship availability indicator",
                "Part-time work eligibility hint",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-royal-blue"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <CostEstimator />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CostEstimatorSection;