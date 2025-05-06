"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo@2x.png";
import ProfileMenu from "../ui/ProfileMenu";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/service" },
  { label: "Blog's", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const Navbar = ({ menuItem = true }: { menuItem?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: 0, duration: 0.5, ease: "power3.out" }
      );
    } else if (!isOpen && menuRef.current) {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="border-b fixed w-full bg-white z-50">
      <div className="project-container flex items-center justify-between py-4">
        <Link href="/" className="cursor-pointer">
          <Image src={logo} width={166} height={48} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        {menuItem && (
          <ul className="hidden md:flex items-center space-x-3 font-thin text-xl">
            {menuItems.map((item) => (
              <li key={item.label} className="px-2">
                <Link className="relative group" href={item.href}>
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1563DF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="hidden md:block">
          <ProfileMenu />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg p-6 z-50 md:hidden"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex justify-between items-center mb-6">
          <Image src={logo} width={120} height={36} alt="logo" />
          <button onClick={closeMenu} aria-label="Close Menu">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-4 text-lg">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <ProfileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
