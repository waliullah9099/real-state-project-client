import Link from "next/link";
import FooterBottom from "./FooterBottom";
import { LuSendHorizontal } from "react-icons/lu";
import FooterWithSocialIconsAndLogo from "./FooterWithSocialIconsAndLogo";

const Footer = () => {
    return (
      <footer className="bg-[#0F172A] text-white py-8 mt-10">

        {/* Top Footer -- FooterWithSocialIconsAndLogo */}

        <FooterWithSocialIconsAndLogo />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <p className="mb-4">
              Specializes in providing high-class <br /> tours for those in need. <span className="text-blue-400 cursor-pointer">Contact Us</span>
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                📍 Shibbari, Khulna, Bangladesh
              </li>
              <li className="flex items-center gap-2">
                📞 01518 - 935317
              </li>
              <li className="flex items-center gap-2">
                ✉️ wali@gmail.com
              </li>
            </ul>
          </div>
  
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
               <li className="hover:text-[#1563DF] transition-all duration-300"> <Link href={'/'} >Pricing Plans</Link> </li>
               <li className="hover:text-[#1563DF] transition-all duration-300"> <Link href={'/'} >Our Services</Link> </li>
               <li className="hover:text-[#1563DF] transition-all duration-300"> <Link href={'/'} >About Us</Link> </li>
               <li className="hover:text-[#1563DF] transition-all duration-300"> <Link href={'/'} >Contact Us</Link> </li>
            </ul>
          </div>
  
          {/* Our Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
            <ul className="space-y-3">
              <li className="hover:text-[#1563DF] transition-all duration-300"> <Link href={'/'} >Property For Sale</Link> </li>
              <li className="hover:text-[#1563DF] transition-all duration-300"> <Link href={'/'} >Property For Rent</Link> </li>
              <li className="hover:text-[#1563DF] transition-all duration-300"> <Link href={'/'} >Property For Buy</Link> </li>
              <li className="hover:text-[#1563DF] transition-all duration-300"> <Link href={'/'} >Our Agents</Link> </li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Your Weekly/Monthly Dose of Knowledge and Inspiration
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#1E293B] w-full rounded-full py-3 px-4 outline-none"
              />
              <button className="absolute top-2 right-4 text-[#1563DF] pt-2">
              <LuSendHorizontal className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <FooterBottom />

      </footer>
    );
  };
  
  export default Footer;
  