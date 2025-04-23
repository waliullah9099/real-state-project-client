import { DashboardSidebar } from "@/components/dashboard/sidebar/Sidebar";
import { DashboardTopbar } from "@/components/dashboard/topbar/Topbar";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdDashboard, MdOutlinePostAdd } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const items = [
    <li key="item1">
      <Link href="/dashboard" className="flex items-center gap-1">
        {" "}
        <MdDashboard /> Dashboard
      </Link>
    </li>,
    <li key="item1">
      <Link href="/dashboard/skills" className="flex items-center gap-1">
        {" "}
        <GiSkills /> Skils
      </Link>
    </li>,

    <li key="item3">
      <Link href="/dashboard/projects" className="flex items-center gap-1">
        <GrProjects /> Projects
      </Link>
    </li>,
    <li key="item4">
      <Link href="/dashboard/educations" className="flex items-center gap-1">
        {" "}
        <MdCastForEducation />
        Educations
      </Link>
    </li>,
    <li key="item2">
      <Link href="/dashboard/blogs" className="flex items-center gap-1">
        <MdOutlinePostAdd /> Blogs
      </Link>
    </li>,
    <li key="item5">
      <Link href="/" className="flex items-center gap-1">
        {" "}
        <BiHome /> Home
      </Link>
    </li>,
  ];
  return (
    <>
      <div className="flex min-h-screen">
      {/* Sidebar spans full height */}
      <DashboardSidebar />

      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        <DashboardTopbar />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
    </>
  );
};

export default DashboardLayout;
