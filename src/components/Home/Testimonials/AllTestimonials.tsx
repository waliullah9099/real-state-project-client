"use client";

import Slider from "react-slick";
import { locations } from "../../../../public/data/location";
import TestimonialCard from "./TestimonialCard";

const AllTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
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
    ],
    customPaging: (i: number) => (
      <button className="e" aria-label={`Go to slide ${i + 2}`} />
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
            <TestimonialCard
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-su8VQXJ9nW_a72fw_Pmd391-nbeyORWBiQ&s"
              name="Courtney Henry"
              title="CEO Themesflat"
              rating={5}
              text="My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively."
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AllTestimonials;
