"use client";

import Search from "../search/Search";
import TextAnimation from "../ui/TextAnimation";
import ToggleButtons from "../ui/ToggleButtons";
const Hero = () => {
  return (
    <>
      <section className="bg-[url('https://i.ibb.co.com/WywpjP9/slider-1.jpg')] bg-cover bg-center h-screen bg-fixed relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="project-container h-full flex justify-center pt-[10%] relative z-10">
          <div className="w-4/5 mx-auto text-center">
            <h1 className="text-white text-[70px] font-extrabold relative">
              <span className="pr-[480px]">Find Your </span>
              <TextAnimation />
            </h1>
            {/* content  */}
            <p className="text-xl text-white">
              We are a real estate agency that will help you find the best
              residence <br /> you dream of, let’s discuss for your dream house?
            </p>

            {/* buttons  */}
            <div className="flex justify-center">
              <ToggleButtons />
            </div>

            {/* <Search />  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
