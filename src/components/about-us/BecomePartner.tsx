'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function BecomePartner() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 3,
    });
  }, []);

  return (
    <section className="w-full flex justify-center px-4 py-12">
      <div className="relative flex flex-col md:flex-row items-center justify-between bg-blue-50 w-full max-w-6xl rounded-3xl px-6 md:px-12 py-8">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-md z-10">
          <p className="text-sm text-blue-700 font-semibold uppercase">Become Partners</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            List your Properties on <br /> Homelengo, join Us Now!
          </h2>
          <div className="mt-12">
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

        {/* Right Floating Image */}
        <div
          ref={imageRef}
          className="relative w-64 h-48 md:w-[400px] md:h-[300px] mt-10 md:mt-0"
        >
          <Image
            src="https://i.ibb.co.com/Df9HYbWK/banner.png" 
            alt="Floating House"
            fill
            className="object-contain rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
