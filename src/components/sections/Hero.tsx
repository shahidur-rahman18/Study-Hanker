import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/shared/JsonLd";
import { jsonLdTypes } from "@/lib/seo";
import { HeroEntranceContent } from "./hero/HeroEntrance";
import { ProfileAssessmentForm } from "../forms";

export function Hero() {
  return (
    <section
      data-slot="hero"
      aria-labelledby="hero-heading"
      className={cn(
        "relative isolate w-full overflow-hidden bg-black",
        "py-16 sm:py-20 md:py-28 lg:py-40"
      )}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/two.png"
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 h-full w-full select-none object-cover"
        )}
      >
        <source src="/banner.webm" type="video/webm" />
      </video>

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-gradient-to-b from-black/40 via-black/20 to-black/60"
        )}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 id="hero-heading" className="sr-only">
          Bangladesh to World: Your Path to Study Abroad, Guided Right
        </h1>
        <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex w-full flex-col justify-between">
            <HeroEntranceContent
              headline="BANGLADESH"
              highlighted="WORLD"
              subheadline="Your Path to Study Abroad, Guided Right"
            />
          </div>
          {/* <div className="flex w-full flex-col justify-center">
            <ProfileAssessmentForm />
          </div> */}
        </div>
      </div>

      <JsonLd data={jsonLdTypes.educationalOrganization} />
    </section>
  );
}

export default Hero;