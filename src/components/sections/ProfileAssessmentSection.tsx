import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProfileAssessmentForm } from "@/components/forms/assessment/ProfileAssessmentForm";

export function ProfileAssessmentSection() {
  return (
    <section
      id="assessment"
      data-slot="profile-assessment-section"
      aria-labelledby="assessment-heading"
      className={cn(
        "relative isolate w-full scroll-mt-24 overflow-hidden",
        "bg-gradient-to-b from-background via-royal-blue-50/40 to-background",
        "py-16 sm:py-20 md:py-24"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 opacity-60",
          "bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.08),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(245,158,11,0.08),transparent_50%)]"
        )}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <SectionHeader
              as="h2"
              size="lg"
              align="left"
              badge="Free in 90 Seconds"
              title="Get Your Personalized Study Abroad Profile"
              description="Tell us about yourself and our mentors will match you with universities, scholarships, and visa pathways tailored to your background — completely free."
              className="mb-6"
            />
            <ul className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Personalized university shortlist",
                "Scholarship & funding guidance",
                "Visa eligibility assessment",
                "1-on-1 expert mentorship",
              ].map((item) => (
                <li
                  key={item}
                  className={cn(
                    "flex items-start gap-2 rounded-lg border border-border/60 bg-background/60 p-3 text-sm font-medium text-foreground",
                    "backdrop-blur"
                  )}
                >
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
            <ProfileAssessmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileAssessmentSection;