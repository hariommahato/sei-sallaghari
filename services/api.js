import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const seiApi = createApi({
  reducerPath: "seiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["Enroll", "About", "Contact", "Carousel","Routine","Category"],
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
      query: ({ id, data }) => {
        return {
          url: `/enroll/${id}`,
          method: "PUT",
          body: data,
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

    getAbout: builder.query({
      query: () => ({
        url: "/about",
        method: "GET",
      }),
      providesTags: ["About"],
    }),
    createAbout: builder.mutation({
      query: (data) => {
        return {
          url: `about`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["About"],
    }),
    getAboutDetails: builder.query({
      query: (id) => {
        return {
          url: `/about/${id}`,
          method: "GET",
        };
      },
      providesTags: ["About"],
    }),
    updateAbout: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/about/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["About"],
    }),
    deleteAbout: builder.mutation({
      query: (id) => {
        return {
          url: `about/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["About"],
    }),

    getContact: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
    createContact: builder.mutation({
      query: (data) => {
        return {
          url: `contact`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Contact"],
    }),
    getContactDetails: builder.query({
      query: (id) => {
        return {
          url: `/contact/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Contact"],
    }),
    updateContact: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/contact/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (id) => {
        return {
          url: `contact/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Contact"],
    }),

    getHomeCarousel: builder.query({
      query: () => ({
        url: "/carousel",
        method: "GET",
      }),
      providesTags: ["Carousel"],
    }),
    createHomeCarousel: builder.mutation({
      query: (data) => {
        return {
          url: `carousel`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Carousel"],
    }),
    getCarouselDetails: builder.query({
      query: (id) => {
        return {
          url: `/carousel/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Carousel"],
    }),
    updateCarousel: builder.mutation({
      query: ({ id, carouselData }) => {
        return {
          url: `/carousel/${id}`,
          method: "PUT",
          body: carouselData,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Carousel"],
    }),
    deleteCarousel: builder.mutation({
      query: (id) => {
        return {
          url: `carousel/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Carousel"],
    }),





    getRoutine: builder.query({
      query: () => ({
        url: "/routine",
        method: "GET",
      }),
      providesTags: ["Routine"],
    }),
    createRoutine: builder.mutation({
      query: (data) => {
        return {
          url: `routine`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Routine"],
    }),
    getRoutineDetails: builder.query({
      query: (id) => {
        return {
          url: `/routine/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Routine"],
    }),
    updateRoutine: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/routine/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Routine"],
    }),
    deleteRoutine: builder.mutation({
      query: (id) => {
        return {
          url: `routine/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Routine"],
    }),





    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: ["Category"],
    }),
    createCategory: builder.mutation({
      query: (data) => {
        return {
          url: `category`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Category"],
    }),
    getCategoryDetails: builder.query({
      query: (id) => {
        return {
          url: `/category/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Category"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/category/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => {
        return {
          url: `category/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useCreateEnrollMutation,
  useGetEnrollDetailsQuery,
  useDeleteEnrollMutation,
  useUpdateEnrollMutation,
  useGetEnrollQuery,
  useGetAboutDetailsQuery,
  useGetAboutQuery,
  useUpdateAboutMutation,
  useDeleteAboutMutation,
  useCreateAboutMutation,

  useGetContactDetailsQuery,
  useCreateContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
  useGetContactQuery,

  useCreateHomeCarouselMutation,
  useGetCarouselDetailsQuery,
  useGetHomeCarouselQuery,
  useUpdateCarouselMutation,
  useDeleteCarouselMutation,



  useCreateRoutineMutation,
  useDeleteRoutineMutation,
  useUpdateRoutineMutation,
  useGetRoutineQuery,
  useGetRoutineDetailsQuery,

  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useGetCategoryDetailsQuery,
  useGetCategoryQuery
} = seiApi;
