import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { properties } from "../../../../public/data/properties";
import SectionTitle from "../../ui/SectionTitle";
import PropertyCard from "./PropertyCard";
const FeaturedProperties = () => {
  return (
    <div className="py-24">
      <div className="project-container max-w-7xl">
        <SectionTitle title="Best Property Value" subTitle="Top Properties" />

        {/* all properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* view all button  */}
        <div className="text-center mt-12">
          <button>
            <Link
              href={"/"}
              className="flex items-center gap-2 hover:gap-3 px-7 hover:px-9 py-3.5 rounded-full bg-[#1563DF] text-xl text-white hover:bg-[#0f4da6] duration-300"
            >
              View All Properties
              <FaArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
