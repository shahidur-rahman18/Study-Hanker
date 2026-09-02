import { Hero } from "@/components/sections/Hero";
import { ProfileAssessmentSection } from "@/components/sections/ProfileAssessmentSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WallOfFame } from "@/components/sections/WallOfFame";
import { CostEstimatorSection } from "@/components/sections/CostEstimatorSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProfileAssessmentSection />
      <WhyChooseUs />
      <FeaturedDestinations />
      <ServicesOverview />
      <WallOfFame />
      <CostEstimatorSection />
    </>
  );
}