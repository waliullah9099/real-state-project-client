import Hero from "@/components/Home/Hero";
import OurBlogs from "@/components/Home/OurBlogs/OurBlogs";
import OurAgent from "@/components/Home/OurAgents/OurOgents";
import OurLocation from "@/components/Home/OurLocation/OurLocation";
import OurServices from "@/components/Home/OurServices/OurServices";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";
import FeaturedProperties from "../../components/Home/FeaturedProperties/FeaturedProperties";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <OurLocation />
      <OurServices />
      <WhyChooseUs />
      <OurBlogs />
      <OurAgent />
    </>
  );
}
