import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: `products/create-product`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    UpdateProduct: builder.mutation({
      query: (product) => {
        console.log({ product });
        return {
          url: `products/${product?.id}`,
          method: "PATCH",
          body: product?.updateData,
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useDeleteProductMutation,
  useAddProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = productApi;
