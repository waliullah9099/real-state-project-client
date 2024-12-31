import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  featured: boolean;
  category: string;
  title: string;
  description: string;
  status: string;
  imageUrl: string;
  address: string;
  name: string;
  beds: number;
  baths: number;
  sqft: number;
  price: number;
  agentName: string;
  agentImageUrl: string;
}

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const {
    id,
    imageUrl,
    name,
    agentName,
    agentImageUrl,
    title,
    description,
    category,
  } = blog;

  return (
    <div className=" rounded-2xl overflow-hidden hover:shadow-lg bg-white group border duration-300">
      <div className="relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25 z-10"></div>
        <Image
          src={imageUrl}
          alt={name}
          width={384}
          height={256}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute top-4 left-4 flex gap-2 z-20">
          <span className="bg-[#1563DF] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-300">
            January 28, 2024
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={agentImageUrl}
              alt={agentName}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm">{agentName}</span>
          </div>
          <span className="font-thin text-sm text-[#545454]">{category}</span>
        </div>

        <Link href={`/blogs/${id}`}>
          <h2
            className="pt-3.5 pb-2.5
         font-extralight text-lg hover:text-[#1563DF] duration-300"
          >
            {title}
          </h2>
        </Link>
        <p className="text-[#545454] text-xs">{description}</p>
      </div>
    </div>
  );
}
