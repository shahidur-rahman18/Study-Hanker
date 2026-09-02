import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WhyChooseUsGrid } from "./why-choose-us/WhyChooseUsGrid";

export function WhyChooseUs() {
  return (
    <section
      data-slot="why-choose-us"
      aria-label="Why choose Study Hanker"
      className={cn(
        "relative w-full overflow-hidden bg-background",
        "py-16 sm:py-20 md:py-24"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[linear-gradient(180deg,transparent_0%,rgba(37,99,235,0.03)_50%,transparent_100%)]"
        )}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <SectionHeader
            as="h2"
            badge="Why Study Hanker"
            title="Built on Trust, Transparency & Real Mentorship"
            description="Four reasons Bangladeshi students and parents pick us when the stakes are high — and the journey is once-in-a-lifetime."
            align="center"
            size="default"
          />
        </div>

        <div className="mt-12 sm:mt-14">
          <WhyChooseUsGrid />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;