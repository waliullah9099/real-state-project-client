"use client";
import { useEffect, useState } from "react";

const TextAnimation = () => {
  const [isFirstTextVisible, setIsFirstTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstTextVisible((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span
        className={`absolute top-0 left-[45%] transition-opacity duration-1000 ${
          isFirstTextVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Perfect Home
      </span>
      <span
        className={`absolute top-0 left-[45%] transition-opacity duration-1000 ${
          isFirstTextVisible ? "opacity-0" : "opacity-100"
        }`}
      >
        Dream Home
      </span>
    </>
  );
};

export default TextAnimation;
