import { baseApi } from "@/redux/api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
