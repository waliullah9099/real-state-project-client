"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getUserInfo, removeUser } from "@/services/actions/store.service";

const ProfileMenu = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userInfo = getUserInfo();

  const handleLogout = () => {
    removeUser();
    router.refresh();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!userInfo?.email) {
    return (
      <Link
        href="/login"
        className="btn-primary font-normal text-base"
      >
        Login
      </Link>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      {/* Avatar Button */}
      <button
        onClick={toggleDropdown}
        className="focus:outline-none"
      >
        <Image
          alt="Profile"
          width={40}
          height={40}
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWOuZ5yAzIag6yU0uvACh1WF3qYGXVBpolA&s"}
          className="inline-block size-10 rounded-full ring-2 ring-offset-2"
        />
      </button>

      {/* Dropdown with animation */}
      <div
        className={`absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 z-50 transition-all duration-300 origin-top ${
          isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/profile"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          My Profile
        </Link>
        <Link
          href="/dashboard"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Dashboard
        </Link>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
