import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/shared/JsonLd";
import { jsonLdTypes } from "@/lib/seo";
import { HeroEntranceContent } from "./hero/HeroEntrance";

export function Hero() {
  return (
    <section
      data-slot="hero"
      aria-labelledby="hero-heading"
      className={cn(
        "relative isolate w-full overflow-hidden",
        "bg-gradient-to-br from-royal-blue-50 via-background to-golden-amber-50",
        "py-16 sm:py-20 md:py-28 lg:py-32"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.10),transparent_60%)]"
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 opacity-[0.35]",
          "bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)]",
          "bg-[size:48px_48px]"
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full",
          "bg-royal-blue/15 blur-3xl"
        )}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 id="hero-heading" className="sr-only">
          Bangladesh to World: Your Path to Study Abroad, Guided Right
        </h1>
        <HeroEntranceContent
          headline="BANGLADESH"
          highlighted="WORLD"
          subheadline="Your Path to Study Abroad, Guided Right"
        />
      </div>

      <JsonLd data={jsonLdTypes.educationalOrganization} />
    </section>
  );
}

export default Hero;