import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    login: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    logout: build.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});


export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
} = doctorsApi;
