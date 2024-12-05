"use client";

import TextAnimation from "../ui/TextAnimation";
import ToggleButtons from "../ui/ToggleButtons";
const Hero = () => {
  return (
    <>
      <section className="bg-[url('https://i.ibb.co.com/WywpjP9/slider-1.jpg')] bg-cover bg-center h-screen bg-fixed relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="project-container h-full flex justify-center pt-[10%] relative z-10">
          <div className="w-4/5 mx-auto text-center">
            <h1 className="text-white text-[70px] font-extrabold relative">
              <span className="pr-[480px]">Find Your </span>
              <TextAnimation />
            </h1>
            {/* content  */}
            <p className="text-xl text-white">
              We are a real estate agency that will help you find the best
              residence you dream of, <br /> let’s discuss for your dream house?
            </p>

            {/* buttons  */}
            <div className="flex justify-center">
              <ToggleButtons />
            </div>

            <div className="flex items-center justify-between bg-white shadow-lg rounded-full px-12 py-6 mt-12">
              {/* <!-- Type Dropdown --> */}
              <div className="flex flex-col items-start border-r w-32 pr-3">
                <label
                  htmlFor="type"
                  className="text-sm text-gray-500 pb-[2px]"
                >
                  Type
                </label>
                <select
                  id="type"
                  className="bg-transparent text-black font-medium focus:outline-none cursor-pointer w-full"
                >
                  <option value="all" selected>
                    All
                  </option>
                  <option value="rent">Rent</option>
                  <option value="buy">Buy</option>
                </select>
              </div>

              {/* <!-- Location Input --> */}
              <div className="flex items-end gap-6 border-r pr-3">
                <div className="flex flex-col items-start">
                  <label htmlFor="location" className="text-sm text-gray-500">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="Search Location"
                    className="bg-transparent text-black font-medium focus:outline-none placeholder:text-black"
                  />
                </div>

                {/* <!-- Icon --> */}
                <button className="text-gray-500 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </button>
              </div>

              {/* <!-- Divider --> */}
              {/* <div className="w-px h-6 bg-gray-300"></div> */}

              {/* <!-- Keyword Input --> */}
              <div className="flex flex-col items-start border-r">
                <label htmlFor="keyword" className="text-sm text-gray-500">
                  Keyword
                </label>
                <input
                  id="keyword"
                  type="text"
                  placeholder="Search Keyword"
                  className="bg-transparent text-black font-medium focus:outline-none placeholder:text-black"
                />
              </div>

              {/* <!-- Divider --> */}
              {/* <div className="w-px h-6 bg-gray-300"></div> */}

              {/* <!-- Search Button --> */}
              <button className="flex items-center px-4 py-2 bg-[#1563DF] text-white rounded-full hover:bg-blue-600">
                <span className="mr-2">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m0 0a7 7 0 10-10-10 7 7 0 0010 10z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
