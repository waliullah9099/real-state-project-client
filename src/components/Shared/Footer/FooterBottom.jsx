import Link from "next/link";

const FooterBottom = () => {
    const currentYear = new Date().getFullYear()
    return (
      <div className="project-container max-w-7xl">

   
      <div className="bg-[#0F172A] text-white border-t border-white/10 py-4 pt-12 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Copyright Text */}
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            ©{currentYear} Homelengo. All Rights Reserved.
          </p>
  
          {/* Policy Links */}
          <div className="flex space-x-6 text-sm">
            <Link href={'/'} className="hover:text-[#1563DF] duration-300 delay-75">
              Terms Of Services
            </Link>
            <Link href={'/'} className="hover:text-[#1563DF] duration-300 delay-75">
              Privacy Policy
            </Link>
            <Link href={'/'} className="hover:text-[#1563DF] duration-300 delay-75">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default FooterBottom;
  