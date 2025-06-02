import FinalCTA from "../Components/CTA";
import FAQSection from "../Components/FAQ";
import HeroSection from "../Components/Hero";
import InfoSection from "../Components/InfoSection";
import LocalbusinessSec from "../Components/LocalbusinessSec";
import SimpleInfoSection from "../Components/SimpleInfoSec";
import ComparisonSection from "../Components/Table";
import TestimonialsCarousel from "../Components/Testimonials";
import ToolsCarousel from "../Components/Toolscarsoul";
import GrowthHeroesGrid from "../Components/users";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <SimpleInfoSection />
      <ToolsCarousel />
      <LocalbusinessSec />
      <TestimonialsCarousel />
      <ComparisonSection />
      <GrowthHeroesGrid />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
