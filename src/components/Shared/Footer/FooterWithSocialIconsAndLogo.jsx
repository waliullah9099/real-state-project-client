

// components/Footer.tsx
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterWithSocialIconsAndLogo = () => {
  return (
    <div className="bg-[#0F172A] pb-10 pt-5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <div className="text-[#1563DF] text-4xl"> 
              🏠
            </div>
            <div>
              <h2 className="text-white text-xl font-semibold">Home Lengo</h2>
              <p className="text-white/70 text-sm">Searching homes</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          <span className="text-white text-sm font-semibold">Follow Us:</span>
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaXTwitter />, link: "#" },
              { icon: <FaPinterestP />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#1563DF] transition-all duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-8"></div>
    </div>
  );
};

export default FooterWithSocialIconsAndLogo;
