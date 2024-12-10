import { AreaChartIcon, MapPin } from "lucide-react";
import { FaBath } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";

import Image from "next/image";

interface Property {
  id: number;
  featured: boolean;
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

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const {
    featured,
    status,
    imageUrl,
    address,
    name,
    beds,
    baths,
    sqft,
    price,
    agentName,
    agentImageUrl,
  } = property;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden hover:shadow-lg bg-white group border duration-300">
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
          {featured && (
            <span className="bg-[#1563DF] text-white text-xs font-semibold px-3 py-1.5 rounded">
              Featured
            </span>
          )}
          <span className="bg-black/30 hover:bg-[#1563DF] text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors duration-300">
            {status}
          </span>
        </div>
        {/* location */}
        <div className="absolute left-4 bottom-2 z-20">
          <div className="flex items-center text-white text-sm mb-2 z-20">
            <MapPin className="w-4 h-4 mr-1" />
            {address}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="font-thin text-xl mb-3 text-black/80 hover:text-[#1563DF] duration-300">
          {name}
        </h2>
        <div className="flex items-center gap-5 text-base text-black mb-5 border-b pb-5">
          <div className="flex items-center gap-1">
            <IoIosBed />
            <span>Beds: {beds} </span>
          </div>
          <div className="flex items-center gap-1">
            <FaBath /> <span>Baths: {baths} </span>
          </div>
          <div className="flex items-center gap-1">
            <AreaChartIcon className="size-4" /> <span>Sqft: {sqft} </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={agentImageUrl}
              alt={agentName}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-[#545454]">{agentName}</span>
          </div>
          <span className="font-thin text-lg">${price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
