import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://sportszoneserver.vercel.app/api/v1",
  credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["product", "order"],
  endpoints: () => ({}),
});
