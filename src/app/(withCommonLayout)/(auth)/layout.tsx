
import Navbar from "@/components/Shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar menuItem={false} />
      {children}
    </>
  );
};

export default CommonLayout;
