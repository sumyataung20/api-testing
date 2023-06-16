// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const authApi = createApi({
//   reducerPath: "authApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://safe.axletechmm.com/api",
//   }),

//   tagTypes: ["Auth"],
//   endpoints: (builder) => ({
//     register: builder.mutation({
//       query: (user) => ({
//         url: "/register",
//         method: "POST",
//         body: user,
//       }),
//       invalidatesTags: ["Auth"],
//     }),
//   }),
// });

// export const { useRegisterMutation } = authApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://safe.axletechmm.com/api",
    prepareHeaders: (headers, { getState }) => {
      // Get the token from your Redux store or any other location
      const token = getState().auth.csrfToken;

      // Add the token to the request headers
      if (token) {
        headers.set("X-CSRF-TOKEN", token);
      }

      // Set other headers as needed
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),

  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useRegisterMutation } = authApi;
