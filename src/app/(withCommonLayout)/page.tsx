import Hero from "@/components/Home/Hero";
import OurBlogs from "@/components/Home/OurBlogs/OurBlogs";
import OurAgent from "@/components/Home/OurAgents/OurOgents";
import OurLocation from "@/components/Home/OurLocation/OurLocation";
import OurServices from "@/components/Home/OurServices/OurServices";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import FeaturedProperties from "../../components/Home/FeaturedProperties/FeaturedProperties";

export default function Home() {
  return (
    <>
    {/* <div className="h-screen bg-slate-400"></div> */}
      <Hero />
      <FeaturedProperties />
      <OurLocation />
      <OurServices />
      <WhyChooseUs />
      <OurBlogs />
      <OurAgent />
      <Testimonials />
    </>
  );
}
