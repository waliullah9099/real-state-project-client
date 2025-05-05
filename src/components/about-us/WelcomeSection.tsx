// components/WelcomeSection.tsx

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function WelcomeSection() {
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(leftImageRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
    });

    gsap.to(rightImageRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
    });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="relative w-full max-w-6xl">
        {/* Left Floating Image */}
        <div
          ref={leftImageRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-3xl overflow-hidden w-[120px] h-[120px] shadow-lg"
        >
          <Image
            src="https://i.ibb.co.com/1mksH0N/blog-11.jpg"
            alt="House Exterior"
            width={120}
            height={120}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Floating Image */}
        <div
          ref={rightImageRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-3xl overflow-hidden w-[120px] h-[120px] shadow-lg"
        >
          <Image
            src="https://i.ibb.co.com/6F9Tckm/house-5.jpg"
            alt="Interior View"
            width={120}
            height={120}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Welcome to the <span className="text-blue-600">Hom Lengo</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Welcome to Home Lengo, where we turn houses into homes and dreams into
          reality. At Home, we understand that a home is more than just a
          physical space, it’s a place where memories are created, families
          grow, and life unfolds.
        </p>

        <div className="mt-10">
          <h3 className="font-semibold text-gray-800">Leslie Alexander</h3>
          <p className="text-sm text-gray-500">CEO & founder</p>
          <Image
            src="https://i.ibb.co.com/n88tVSvp/signature.png"
            alt="Signature"
            width={150}
            height={40}
            className="mx-auto mt-2"
          />
        </div>

        <div className="text-center mt-12">
          <button>
            <Link
              href={"/contact-us"}
              className="flex items-center gap-2 hover:gap-3 px-7 hover:px-9 py-3.5 rounded-full bg-[#1563DF] text-xl text-white hover:bg-[#0f4da6] duration-300"
            >
              Contact us
              <FaArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
