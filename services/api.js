import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const seiApi = createApi({
  reducerPath: "seiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sei-institute-sallaghari.vercel.app/api",
  }),
  tagTypes: [
    "Enroll",
    "About",
    "Contact",
    "Carousel",
    "Routine",
    "Category",
    "Quiz",
    "Result",
    "Gallery",
    "Users"
  ],
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
      query: ({ id, data }) => {
        return {
          url: `/carousel/${id}`,
          method: "PUT",
          body: data,
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
    getQuiz: builder.query({
      query: (currentPage = 1) => {
        return {
          url: `/quiz?page=${currentPage}`,
          method: "GET",
        };
      },
      providesTags: ["Quiz"],
    }),
    getAdminQuiz: builder.query({
      query: () => {
        return {
          url: `/quiz/admin`,
          method: "GET",
        };
      },
      providesTags: ["Quiz"],
    }),
    createQuiz: builder.mutation({
      query: (data) => {
        return {
          url: `quiz`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            return headers;
          },
        };
      },
      invalidatesTags: ["Quiz"],
    }),
    getQuizDetails: builder.query({
      query: (id) => {
        return {
          url: `/quiz/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Quiz"],
    }),
    updateQuiz: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/quiz/${id}`,
          method: "PUT",
          body: data,
        };
      },

      invalidatesTags: ["Quiz"],
    }),
    deleteQuiz: builder.mutation({
      query: (id) => {
        return {
          url: `quiz/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Quiz"],
    }),

    getResult: builder.query({
      query: () => {
        return {
          url: `/result`,
          method: "GET",
        };
      },
      providesTags: ["Result"],
    }),
    createResult: builder.mutation({
      query: (data) => {
        return {
          url: `result`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            return headers;
          },
        };
      },
      invalidatesTags: ["Result"],
    }),
    getResultDetails: builder.query({
      query: (id) => {
        return {
          url: `/result/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Result"],
    }),
    updateResult: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/result/${id}`,
          method: "PUT",
          body: data,
        };
      },

      invalidatesTags: ["Result"],
    }),
    deleteResult: builder.mutation({
      query: (id) => {
        return {
          url: `result/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Result"],
    }),


    getUsers: builder.query({
      query: () => ({
        url: "/admin",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    createUser: builder.mutation({
      query: (data) => {
        return {
          url: `/register`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["User"],
    }),
    getSingleUser: builder.query({
      query: (id) => {
        return {
          url: `/admin/${id}`,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/admin/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `admin/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Users"],
    }),






    getGallery: builder.query({
      query: () => ({
        url: "/gallery",
        method: "GET",
      }),
      providesTags: ["Gallery"],
    }),
    createGallery: builder.mutation({
      query: (data) => {
        return {
          url: `gallery`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Gallery"],
    }),
    getGalleryDetails: builder.query({
      query: (id) => {
        return {
          url: `/gallery/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Gallery"],
    }),
    updateGallery: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/gallery/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Gallery"],
    }),
    deleteGallery: builder.mutation({
      query: (id) => {
        return {
          url: `gallery/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Gallery"],
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
  useGetCategoryQuery,

  useGetQuizDetailsQuery,
  useGetQuizQuery,
  useUpdateQuizMutation,
  useDeleteQuizMutation,
  useCreateQuizMutation,
  useGetAdminQuizQuery,

  useCreateResultMutation,
  useDeleteResultMutation,
  useGetResultDetailsQuery,
  useGetResultQuery,
  useUpdateResultMutation,

  useCreateGalleryMutation,
  useGetGalleryDetailsQuery,
  useDeleteGalleryMutation,
  useUpdateGalleryMutation,
  useGetGalleryQuery,

  useCreateUserMutation,
  useGetSingleUserQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation
} = seiApi;
