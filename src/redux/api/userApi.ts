import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
        query: (arg: Record<string, any>) => ({
            url: "/users",
            method: "GET",
            params: arg,
        }),
        transformErrorResponse: (response: any[]) => {
            return {
            users: response
            };
        },
        providesTags: [tagTypes.user],
    }),
    getSingleUser: build.query({
        query: (id: string) => ({
            url: `/users/${id}`,
            method: "GET",
        }),
        providesTags: [tagTypes.user],
    }),

    deleteUser: build.mutation({
        query: (id) => ({
            url: `/users/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: [tagTypes.user],
    }),
    updateUser: build.mutation({
        query: ({ id, data }) => ({
            url: `/users/${id}`,
            method: "PATCH",
            data,
        }),
        invalidatesTags: [tagTypes.user],
    }),
  })
});

export const {
    useGetAllUsersQuery,
    useGetSingleUserQuery,
    useDeleteUserMutation,
    useUpdateUserMutation,
} = doctorsApi;