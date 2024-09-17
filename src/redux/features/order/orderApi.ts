import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (data) => ({
        url: `/orders/create-order`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useAddOrderMutation } = orderApi;
