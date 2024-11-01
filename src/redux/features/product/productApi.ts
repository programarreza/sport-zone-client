import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }

        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["product"],
    }),

    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `products/${id}`,
          method: "GET",
        };
      },
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
