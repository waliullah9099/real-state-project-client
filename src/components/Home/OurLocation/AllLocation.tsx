"use client";

import Slider from "react-slick";
import { locations } from "../../../../public/data/location";
import LocationCard from "./LocationCard";

function AllLocation() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    customPaging: (i: number) => (
      <button className="e" aria-label={`Go to slide ${i + 1}`} />
    ),
    appendDots: (dots: React.ReactNode) => (
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // gap: "8px",
        }}
      >
        {dots}
      </ul>
    ),
  };
  return (
    <div className="slider-container mx-3">
      <Slider {...settings}>
        {locations.map((location) => (
          <div key={location.id} className="px-2">
            <LocationCard location={location} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AllLocation;
