import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { services } from "../../../../public/data/services";

const OurServices = () => {
  return (
    <>
      <div className="my-24 project-container">
        <SectionTitle title="What We Do?" subTitle="Our Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className=" text-center border rounded-xl p-10 group flex flex-col justify-center items-center gap-5 hover:shadow-2xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={204}
                height={182}
                className="group-hover:rotate-x-[180deg] transition-all duration-300 text-center"
              />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>

              <button>
                <Link
                  href={"/"}
                  className="flex items-center gap-2 px-10 group-hover:px-12 py-2.5 rounded-full group-hover:bg-[#1563DF] text-gray-600 group-hover:text-white border border-[#1563DF]  duration-300"
                >
                  Learn More
                  <FaArrowRight />
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
