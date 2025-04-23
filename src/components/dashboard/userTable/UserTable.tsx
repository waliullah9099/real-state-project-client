import Image from "next/image";
import { Eye, Pencil, Trash2, Home, Building, DollarSign } from "lucide-react";
import { USER_ROLE } from "@/constants/role";

const UserTable = ({ users }: any) => {
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
              <div className="flex items-center">* Profile Photo</div>
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <div className="flex items-center">User Name</div>
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <div className="flex items-center">Email</div>
            </th>

            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              <div className="flex items-center">User Role</div>
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
          {users?.map((property: any, index: number) => (
            <tr
              key={property.id}
              className={
                index % 2 === 0
                  ? "bg-white hover:bg-blue-50 transition-colors"
                  : "bg-gray-50 hover:bg-blue-50 transition-colors"
              }
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-16 w-16 flex-shrink-0 mr-4 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={property?.profileImage || "/placeholder.svg"}
                    alt={property.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
              </td>

              <td>
                <div className="text-sm font-medium text-gray-900">
                  {property?.name}
                </div>
              </td>

              <td>
                <div className="text-sm font-medium text-gray-900">
                  {property?.email}
                </div>
              </td>

              <td>
  <div 
    className={`text-sm font-medium ${
      property?.role === USER_ROLE.SUPER_ADMIN || property?.role === USER_ROLE.ADMIN
        ? 'text-blue-600' 
        : property?.role === USER_ROLE.AGENT
          ? 'text-orange-500'
          : property?.role === USER_ROLE.USER
            ? 'text-green-600'
            : 'text-gray-900'
    }`}
  >
    {property?.role}
  </div>
</td>

              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                    property.role === "user"
                      ? "bg-green-500 text-white"
                      : "bg-orange-500 text-white"
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
                  <button className="p-1.5 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                    <Pencil className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-1.5 bg-orange-100 rounded-md hover:bg-orange-200 transition-colors">
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
export default UserTable;
