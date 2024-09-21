/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/Container";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { useState } from "react";
import { FaBangladeshiTakaSign, FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, error } = useGetAllProductsQuery([
    { name: "sort", value: "-createdAt" },
    { name: "searchTerm", value: searchValue },
  ]);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    const errorMessage =
      "status" in error
        ? `Error: ${error.status}`
        : error.message || "An unexpected error occurred";
    return <p>{errorMessage}</p>;
  }

  return (
    <div className="min-h-screen bg-[#020228]">
      <Container>
        <div className="w-96 mx-auto">
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            type="email"
            placeholder="Search Product"
            className="mx-auto"
          />
        </div>
        <div className="grid grid-cols-4 gap-6 pt-4">
          {data?.data?.length === 0 ? (
            <p className="col-span-4 text-center text-white">
              Product not available.
            </p>
          ) : (
            data?.data?.map((product: TProduct) => (
              <div key={product._id}>
                <Link to={`/single-product/${product?._id}`}>
                  <Card className="bg-[#02022d] text-white">
                    <CardContent>
                      <div className="grid w-full items-center gap-4 mt-6">
                        <div className="flex flex-col space-y-1.5">
                          <div className="w-full h-52">
                            <img
                              className="w-full h-full"
                              src={product?.image}
                              alt=""
                            />
                          </div>
                          <h2 className="font-semibold">{product.name}</h2>

                          <CardDescription>
                            {product.description.length > 30
                              ? `${product.description.substring(0, 30)}...`
                              : product.description}
                          </CardDescription>

                          <h3 className="  flex  items-center gap-1">
                            <span className="text-sm">Stock Quantity:</span>
                            <span>{product.stockQuantity}</span>
                          </h3>

                          <h3 className=" font-semibold flex  items-center gap-1">
                            <FaBangladeshiTakaSign />
                            <span>{product.price}</span>
                          </h3>

                          <div>
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
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default Products;
