// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { basicURL } from "../constant.js";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: basicURL,
    credentials: "include",
  }),
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
