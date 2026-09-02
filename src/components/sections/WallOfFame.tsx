import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { testimonials } from "@/config/testimonials";
import { WallOfFameFilter } from "./wall-of-fame/WallOfFameFilter";

export function WallOfFame() {
  return (
    <section
      id="success-stories"
      data-slot="wall-of-fame"
      aria-label="Student success stories and testimonials"
      className={cn(
        "relative w-full overflow-hidden scroll-mt-24",
        "bg-gradient-to-b from-background via-golden-amber-50/20 to-background",
        "py-16 sm:py-20 md:py-24"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[radial-gradient(circle_at_10%_10%,rgba(245,158,11,0.08),transparent_45%),radial-gradient(circle_at_90%_90%,rgba(37,99,235,0.06),transparent_50%)]"
        )}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            as="h2"
            badge="Wall of Fame"
            title="Real Students. Real Countries. Real Results."
            description="Hear directly from Bangladeshi students we have mentored to admissions and visa approvals at the world's top universities."
            align="center"
            size="default"
          />
        </div>

        <div className="mt-10 sm:mt-12">
          <WallOfFameFilter testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}

export default WallOfFame;