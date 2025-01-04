import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelByID } from "@/database/queries";

const HotelDetailsPage = async ({ params: { id } }) => {
  const hotelDetails = await getHotelByID(id);
  return (
    <>
      <Summary hotel={hotelDetails} />
      <Gallery gallery={hotelDetails?.gallery} />
      <Overview overview={hotelDetails?.overview} />
    </>
  );
};

export default HotelDetailsPage;
