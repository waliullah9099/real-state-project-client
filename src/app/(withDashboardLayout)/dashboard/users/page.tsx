"use client";

import { Users } from "lucide-react";
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import UserTable from "@/components/dashboard/userTable/UserTable";
import { users } from "../../../../../public/data/users";

export default function UsersPage() {
  // const query: Record<string, any> = {};
  // const { data, isLoading } = useGetAllUsersQuery({ ...query });

  // console.log(data?.data);

  return (
    <div className="containe mx-auto px-4 py-8">
      {/* all propertylist and search button  */}
      <div className="mb-8 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <Users className="mr-2 h-6 w-6 text-blue-600" />
            All Users Here
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <UserTable users={users} />
        </div>

        {/* <Pagination /> */}
      </div>
    </div>
  );
}
