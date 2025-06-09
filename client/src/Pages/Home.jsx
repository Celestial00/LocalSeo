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
import Modal from "../Components/Modal";
import {useModal} from '../Contexts/ModelContext'


export default function Home() {

   const { showModal, closeModal } = useModal();


  return (
    <>
      {showModal && (
        <Modal
          title="Hello There!"
          description="To Use These Toosl for free Just Register on our website if you are already register please login to use there free tools"
          onClose={closeModal}
        />
      )}
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
