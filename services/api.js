
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const seiApi = createApi({
  reducerPath: "seiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["Enroll", ],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getEnroll: builder.query({
      query: () => ({
        url: "/enroll",
        method: "GET",
      }),
      providesTags: ["Enroll"],
    }),
    createEnroll: builder.mutation({
      query: (data) => {
        return {
          url: `enroll`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Enroll"],
    }),
    getEnrollDetails: builder.query({
      query: (id) => {
        return {
          url: `/enroll/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Enroll"],
    }),
    updateEnroll: builder.mutation({
      query: ({ id, enrollData }) => {
        return {
          url: `/enroll/${id}`,
          method: "PUT",
          body: enrollData,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Enroll"],
    }),
    deleteEnroll: builder.mutation({
      query: (id) => {
        return {
          url: `enroll/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Enroll"],
    }),

    
  }),
});

export const {
    useCreateEnrollMutation,
    useGetEnrollDetailsQuery,
    useDeleteEnrollMutation,
    useUpdateEnrollMutation,
    useGetEnrollQuery,
  
} = seiApi;
