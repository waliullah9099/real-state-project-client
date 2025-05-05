import BecomePartner from "@/components/about-us/BecomePartner";
import WelcomeSection from "@/components/about-us/WelcomeSection";
import OurAgent from "@/components/Home/OurAgents/OurOgents";
import AllTestimonials from "@/components/Home/Testimonials/AllTestimonials";
import Testimonials from "@/components/Home/Testimonials/Testimonials";

const AboutPage = () => {
  return (
    <>
      <div className="project-container pt-24 pb-16">
        <WelcomeSection />
        <OurAgent />
      </div>
        <Testimonials />
      <div className="project-container pt-24 pb-16">
        <BecomePartner />
      </div>
    </>
  );
};

export default AboutPage;
