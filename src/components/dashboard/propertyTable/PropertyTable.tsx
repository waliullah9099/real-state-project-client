"use client";

import Image from "next/image";
import { Eye, Pencil, Trash2, Home, Building, DollarSign } from "lucide-react";
import { useDeletePropertiesMutation } from "@/redux/api/propertyApi/propertyApi";
import { toast } from "sonner";
import { useState } from "react";
import AddProperty from "../addProperty/AddProperty";

const PropertyTable = ({ properties }: any) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [deleteProperty] = useDeletePropertiesMutation();

  const handlePropertyDelete = (id: string) => {
    toast("Are you sure?", {
      action: {
        label: "Yes, delete it",
        onClick: () => {
          const res = deleteProperty(id);
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => {
          console.log("Action canceled.");
        },
      },
    });
  };

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        {/* table head  */}
        <thead className="bg-gray-100">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <div className="flex items-center">* Property Photo and Name</div>
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <div className="flex items-center">Type</div>
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <div className="flex items-center">Rent/Sale</div>
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <div className="flex items-center">Bedrooms</div>
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <div className="flex items-center">Bathrooms</div>
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <div className="flex items-center">Location</div>
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <div className="flex items-center">Price</div>
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <div className="flex items-center">Status</div>
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>

        {/* table data */}
        <tbody className="bg-white divide-y divide-gray-200">
          {properties?.map((property: any, index: number) => (
            <tr
              key={property?._id}
              className={
                index % 2 === 0
                  ? "bg-white hover:bg-blue-50 transition-colors"
                  : "bg-gray-50 hover:bg-blue-50 transition-colors"
              }
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-16 w-16 flex-shrink-0 mr-4 overflow-hidden rounded-md border border-gray-200">
                    <Image
                      src={property?.thumbNailImage || "/placeholder.svg"}
                      alt={property?.title}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {property?.title}
                  </div>
                </div>
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{property.size}</td> */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {property?.type === "House" ? (
                    <Home className="mr-2 h-4 w-4 text-blue-600" />
                  ) : (
                    <Building className="mr-2 h-4 w-4 text-purple-600" />
                  )}
                  <span className="text-sm text-gray-700">
                    {property?.type}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    property.propertyFor === "Rent"
                      ? "bg-blue-100 text-blue-800"
                      : property.propertyFor === "Sale"
                      ? "bg-green-100 text-green-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {property.propertyFor}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {property.bedrooms}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {property.bathrooms}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {property.propertyAddress}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm font-medium text-gray-900">
                  <DollarSign className="mr-1 h-4 w-4 text-green-600" />
                  {property.price}
                </div>
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
            property.postedBy === "Admin" ? "bg-blue-700 text-white" : "bg-orange-500 text-white"
          }`}
        >
          {property.postedBy}
        </span>
      </td> */}
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex items-center px-2.5 py-1 !rounded-md text-xs font-medium ${
                    property.status === "approved"
                      ? "bg-green-500 text-white rounded-md"
                      : "bg-orange-500 text-white rounded-md"
                  }`}
                >
                  {property.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button className="p-1.5 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProperty(property);
                      setModalOpen(true);
                    }}
                    className="p-1.5 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <Pencil className="h-4 w-4 text-gray-600" />
                  </button>
                  <AddProperty
                    isModalOpen={isModalOpen}
                    setModalOpen={setModalOpen}
                    initialData={selectedProperty}
                    editMode={true}
                  />
                  <button
                    onClick={() => handlePropertyDelete(property?._id)}
                    className="p-1.5 bg-orange-100 rounded-md hover:bg-orange-200 transition-colors"
                  >
                    <Trash2 className="h-4 w-4 text-orange-600" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default PropertyTable;
