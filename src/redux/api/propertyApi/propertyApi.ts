import { tagTypes } from "@/redux/tagTypes";
import { baseApi } from "../baseApi";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProperties: build.mutation({
      query: (data) => ({
        url: "/properties",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.properties],
    }),

    getAllProperties: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/properties",
        method: "GET",
        params: arg,
      }),
      transformErrorResponse: (response: any[]) => {
        return {
          properties: response,
        };
      },
      providesTags: [tagTypes.properties],
    }),

    getSingleProperties: build.query({
      query: (id: string) => ({
        url: `/properties/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.properties],
    }),

    deleteProperties: build.mutation({
      query: (id) => ({
        url: `/properties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.properties],
    }),

    updateProperties: build.mutation({
      query: ({ id, data }) => ({
        url: `/properties/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.properties],
    }),
  }),
});

export const {
    useCreatePropertiesMutation,
    useGetAllPropertiesQuery,
    useGetSinglePropertiesQuery,
    useDeletePropertiesMutation,
    useUpdatePropertiesMutation,
} = doctorsApi;
