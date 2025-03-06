
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar menuItem={false} />
      {children}

      <Footer/>
    </>
  );
};

export default CommonLayout;
