import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo@2x.png";
import ProfileMenu from "../ui/ProfileMenu";

const Navbar = async ({ menuItem = true }) => {
  return (
    <nav className="border-b">
      <div className="project-container flex items-center justify-between py-4">
       <Link href={"/"} className="cursor-pointer" > <Image src={logo} width={166} height={48} alt="logo" /></Link>

        {menuItem && (
          <ul className="flex items-center space-x-3 font-thin text-xl">
            <li className="px-2">
              <Link className="relative group" href={`/`}>
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1563DF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="px-2">
              <Link className="relative group" href={`/`}>
                About Us
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1563DF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="px-2">
              <Link className="relative group" href={`/`}>
                Services
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1563DF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="px-2">
              <Link className="relative group" href={`/`}>
                Blog's
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1563DF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        )}

        {/* Client-side Profile menu */}
        <ProfileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
