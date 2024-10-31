/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/Container";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { FaBangladeshiTakaSign, FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const FeaturedProducts = () => {
  const { data, isLoading, error } = useGetAllProductsQuery(
    [{ name: "sort", value: "-createdAt" }],
    {
      pollingInterval: 30000, // 30 seconds
    }
  );

  if (error) {
    const errorMessage =
      "status" in error
        ? `Error: ${error.status}`
        : error.message || "An unexpected error occurred";
    return <p>{errorMessage}</p>;
  }

  return (
    <div className="min-h-screen bg-[#1F0E07] pb-12 ">
      <Container>
        <div>
          {isLoading && <Loading />}
          <h2 className="mb-12 pb-5 text-white text-3xl md:text-4xl text-center pt-12   border-b-2 border-[#FF4500] w-fit mx-auto font-semibold">
            Latest products
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {data?.data?.length === 0 ? (
              <p className="col-span-4 text-center text-white">
                Product not available.
              </p>
            ) : (
              data?.data?.slice(0, 8).map((product: TProduct) => (
                <div key={product._id}>
                  <Card className="bg-[#120500] text-white border-[#FF4500]">
                    <CardContent className="p-0">
                      <div className="grid w-full items-center gap-4  p-2 ">
                        <div className="flex flex-col space-y-1.5">
                          <div className="w-full h-52 group rounded-lg relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow">
                            <img
                              className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
                              src={product?.image}
                              alt=""
                            />
                          </div>
                          <h2 className="font-semibold">
                            {product.name.length > 22
                              ? `${product.name.substring(0, 22)}...`
                              : product.name}
                          </h2>

                          <CardDescription>
                            {product.description.length > 26
                              ? `${product.description.substring(0, 26)}...`
                              : product.description}
                          </CardDescription>

                          <h3 className="  flex  items-center gap-1">
                            <span className="text-sm">Stock Quantity:</span>
                            <span>
                              {product?.stockQuantity > 0 ? (
                                product?.stockQuantity
                              ) : (
                                <p className="text-red-500">out of stock</p>
                              )}
                            </span>
                          </h3>
                          <h3 className=" font-semibold flex  items-center gap-1">
                            <FaBangladeshiTakaSign />
                            <span>{product.price}</span>
                          </h3>

                          <div className="flex justify-between items-center">
                            <Rating
                              initialRating={product?.rating}
                              readonly
                              emptySymbol={
                                <FaRegStar className="text-gray-400" />
                              }
                              fullSymbol={
                                <FaStar className="text-yellow-500" />
                              }
                            />
                            <Link to={`/single-product/${product?._id}`}>
                              <button className="bg-[#b33000] text-white font-semibold py-1.5 px-2 rounded-lg hover:bg-[#ff4500] transition duration-300 shadow-md hover:shadow-lg">
                                View details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
