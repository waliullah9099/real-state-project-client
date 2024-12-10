import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Location {
  id: number;
  propertyCount: number;
  location: string;
  image: string;
}

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="max-w-sm mx-auto h-[362px]">
      <Link href="/" className="relative bloc overflow-hidden rounded-xl group">
        <div className="relative aspect-square h-full w-full">
          <Image
            src={location?.image}
            alt={location?.location}
            fill
            className="object-cover rounded-xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
        </div>
        <div className="absolute bottom-2 left-2 right-2 p-4 bg-white rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                {location?.propertyCount} Properties
              </p>
              <h3 className="text-lg font-semibold">{location?.location}</h3>
            </div>
            <div className=" border border-gray-200 rounded-full p-1.5 group-hover:bg-[#1563DF] group-hover:text-white duration-300 shadow-sm">
              <ArrowRight />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
