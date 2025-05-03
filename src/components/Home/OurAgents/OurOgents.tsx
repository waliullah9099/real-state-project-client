import Link from "next/link"
import OutAgentCard from "./OutAgentCard"
import { FaArrowRight } from "react-icons/fa"
import SectionTitle from "@/components/ui/SectionTitle"

const agents = [
  {
    id: "1",
    name: "Tahar Smith",
    position: "Administrative Staff",
    image: "https://homelengohtml.vercel.app/images/agents/agent-2.jpg",
    email: "tahar@example.com",
    phone: "+1 234 567 8900",
  },
  {
    id: "2",
    name: "John Doe",
    position: "Real Estate Agent",
    image: "https://homelengohtml.vercel.app/images/agents/agent-1.jpg",
    email: "john@example.com",
    phone: "+1 234 567 8901",
  },
  {
    id: "3",
    name: "Sarah Johnson",
    position: "Property Consultant",
    image: "https://homelengohtml.vercel.app/images/agents/agent-3.jpg",
    email: "sarah@example.com",
    phone: "+1 234 567 8902",
  },
  {
    id: "4",
    name: "Sarah Johnson",
    position: "Property Consultant",
    image: "https://homelengohtml.vercel.app/images/agents/agent-3.jpg",
    email: "sarah@example.com",
    phone: "+1 234 567 8902",
  },
]

const OurAgent = () => {

  return (
    <div className="project-container mt-20">
      {/* Section Title */}
      <SectionTitle title="Meet Our Agents" subTitle="Our Teams" />

      {/* Agent Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 p-3 md:p-0 px-2">
        {
          agents?.slice(0,3)?.map((agent) => (
            <OutAgentCard
              key={agent.id}
              id={agent.id}
              name={agent.name}
              position={agent.position}
              image={agent.image}
              email={agent.email}
              phone={agent.phone}
            />
          ))
        }
      </div>

      {/* view all button  */}
      <div className="text-center mt-12">
        <button>
          <Link
            href={"/"}
            className="flex items-center gap-2 hover:gap-3 px-7 hover:px-9 py-3.5 rounded-full bg-[#1563DF] text-xl text-white hover:bg-[#0f4da6] duration-300"
          >
            View All Agents
            <FaArrowRight />
          </Link>
        </button>
      </div>
    </div>
  );
};


export default OurAgent;