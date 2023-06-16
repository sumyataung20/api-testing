// import { configureStore } from "@reduxjs/toolkit";
// import { authApi } from "./api/authApi";
// export const store = configureStore({
//   reducer: {
//     [authApi.reducerPath]: authApi.reducer,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(authApi.middleware),
// });
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authReducer from "../reducers/authReducer"; // Import your auth reducer

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add your auth reducer to the store
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
