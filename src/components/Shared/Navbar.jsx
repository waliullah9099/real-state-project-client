import Image from "next/image";
import Link from "next/link";
import { auth } from "../../../auth";
import logo from "../../../public/assets/logo@2x.png";
import Logout from "../auth/Logout";

const Navbar = async ({ menuItem = true }) => {
  const session = await auth();
  return (
    <>
      <nav className="border-b">
        <div className="project-container flex items-center justify-between py-4">
          <Image src={logo} width={166} height={48} alt="logo" />
          {/* navItems  */}

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
                  Blog
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1563DF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="px-2">
                <Link className="relative group" href={`/`}>
                  Dashboard
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1563DF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              {session?.user ? (
                <div>
                  <span>{session?.user?.name}</span>
                  <span className="mx-1">|</span>
                  <Logout />
                </div>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="login btn-primary font-normal text-base !rounded-[4px]"
                    // style={{ borderRadius: "4px" }}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          )}

          {/* <LightDark /> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
