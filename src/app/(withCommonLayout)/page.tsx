import Hero from "@/components/Home/Hero";
import OurLocation from "@/components/Home/OurLocation/OurLocation";
import FeaturedProperties from "../../components/Home/FeaturedProperties/FeaturedProperties";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <OurLocation />
      <div className="bg-gray-600 h-80"></div>
      <div className="bg-emerald-50 h-80"></div>
      <div className="bg-yellow-600 h-80"></div>
      <div className="bg-orange-500 h-80"></div>
      <div className="bg-lime-400 h-80"></div>
    </>
  );
}
