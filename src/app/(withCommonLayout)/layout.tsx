// import { NavItems } from "@/components/Shared/NavItems";
import Navbar from "@/components/Shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default CommonLayout;
