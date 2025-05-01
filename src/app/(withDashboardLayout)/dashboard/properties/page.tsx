"use client";

import { useState } from "react";
import { Search, Home } from "lucide-react";
import { useGetAllPropertiesQuery } from "@/redux/api/propertyApi/propertyApi";
import PropertyTable from "@/components/dashboard/propertyTable/PropertyTable";


export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const query: Record<string, any> = {};
  const { data, isLoading } = useGetAllPropertiesQuery({ ...query });

  // console.log(data);

  return (
    <div className="containe mx-auto px-4 py-8">
      {/* all propertylist and search button  */}
      <div className="mb-8 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <Home className="mr-2 h-6 w-6 text-blue-600" />
            All Properties List
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <PropertyTable properties={data} />
        </div>

        {/* <Pagination /> */}
      </div>
    </div>
  );
}
