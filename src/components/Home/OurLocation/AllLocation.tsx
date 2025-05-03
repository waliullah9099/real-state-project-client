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
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
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
