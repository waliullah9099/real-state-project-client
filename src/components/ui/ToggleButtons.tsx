"use client";
import { useState } from "react";

export default function ToggleButtons() {
  const [selectedButton, setSelectedButton] = useState("for-night");

  return (
    <div className="flex items-center gap-3 mt-20 mx-auto">
      {/* For night Button */}
      <div className="relative inline-block">
        <button
          onClick={() => setSelectedButton("for-night")}
          className={`${
            selectedButton === "for-night"
              ? "bg-[#1563DF] text-white border-[#1563DF]"
              : "bg-transparent text-white border-white hover:bg-[#1563DF] hover:border-[#1563DF]"
          } px-8 py-3 text-lg rounded-full border-[0.5px] transition-colors duration-300`}
        >
          For Night
        </button>
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 ${
            selectedButton === "for-night" ? "bg-[#1563DF]" : "bg-transparent"
          } transition-colors duration-300`}
        ></div>
      </div>

      {/* For Day Button */}
      <div className="relative inline-block">
        <button
          onClick={() => setSelectedButton("for-day")}
          className={`${
            selectedButton === "for-day"
              ? "bg-[#1563DF] text-white border-[#1563DF]"
              : "bg-transparent text-white border-white hover:bg-[#1563DF] hover:border-[#1563DF]"
          } px-8 py-3 text-lg rounded-full border-[0.5px] transition-colors duration-300`}
        >
          For Day
        </button>
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 ${
            selectedButton === "for-day" ? "bg-[#1563DF]" : "bg-transparent"
          } transition-colors duration-300`}
        ></div>
      </div>
    </div>
  );
}
