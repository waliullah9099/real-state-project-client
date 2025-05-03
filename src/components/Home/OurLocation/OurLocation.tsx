import SectionTitle from "@/components/ui/SectionTitle";
import AllLocation from "./AllLocation";

const OurLocation = () => {
  return (
    <>
      <div className="my-12 overflow-hidden">
        <SectionTitle title="Our Location For You" subTitle="Explore Cities" />
        <AllLocation />
      </div>
    </>
  );
};

export default OurLocation;
