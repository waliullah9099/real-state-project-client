import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo@2x.png";

const Navbar = () => {
  return (
    <>
      <nav className="border-b">
        <div className="project-container flex items-center justify-between py-4">
          <Image src={logo} width={166} height={48} alt="logo" />
          {/* navItems  */}

          <ul className="flex items-center space-x-3 font-thin text-xl">
            <li>
              <Link className="px-2" href={`/`}>
                Home
              </Link>
            </li>
            <li>
              <Link className="px-2" href={`/`}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="px-2" href={`/`}>
                Services
              </Link>
            </li>
            <li>
              <Link className="px-2" href={`/`}>
                Blod
              </Link>
            </li>
            <li>
              <Link className="px-2" href={`/`}>
                Dashboard
              </Link>
            </li>
          </ul>

          {/* <LightDark /> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
