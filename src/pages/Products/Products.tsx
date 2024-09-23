/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/Container";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { brands, categories, priceSort } from "@/utils/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FaBangladeshiTakaSign, FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const { categoryName } = useParams(); // Fetch category from URL params
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [price, setPrice] = useState<string | undefined>(undefined);
  const [brand, setBrand] = useState<string | undefined>(undefined);

  const queryParams = [{ name: "searchTerm", value: searchValue }];

  if (categoryName) {
    queryParams.push({ name: "category", value: categoryName });
  }
  if (category) {
    queryParams.push({ name: "category", value: category });
  }
  if (price) {
    queryParams.push({ name: "sort", value: price });
  }
  if (brand) {
    queryParams.push({ name: "brand", value: brand });
  }

  const { data, isLoading, error } = useGetAllProductsQuery(queryParams);

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
        {isLoading && <Loading />}
        <div>
          <div className="flex justify-between items-center ">
            <div className="w-96 py-4">
              <Input
                onChange={(e) => setSearchValue(e.target.value)}
                type="email"
                placeholder="Search Product"
                className="mx-auto bg-[#0B0B30] text-white"
              />
            </div>

            <div className="flex gap-4">
              {/* category filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="ml-auto bg-[#02022D] text-white"
                  >
                    Filter Category <ChevronDown className="ml-2 h-4 w-4 " />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-[#02022D] text-white p-2.5"
                >
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onSelect={() => {
                        setCategory(category);
                        setBrand(undefined);
                        setPrice(undefined);
                      }}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem
                    onSelect={() => {
                      setCategory(undefined);
                    }}
                  >
                    Clear Filter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* brand filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="ml-auto bg-[#02022D] text-white"
                  >
                    Filter Brand <ChevronDown className="ml-2 h-4 w-4 " />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-[#02022D] text-white p-2.5"
                >
                  {brands.map((brand) => (
                    <DropdownMenuItem
                      key={brand}
                      onSelect={() => {
                        setBrand(brand);
                        setCategory(undefined);
                        setPrice(undefined);
                      }}
                    >
                      {brand}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem
                    onSelect={() => {
                      setBrand(undefined);
                    }}
                  >
                    Clear Filter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* price sorting */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="ml-auto bg-[#02022D] text-white"
                  >
                    Filter Price <ChevronDown className="ml-2 h-4 w-4 " />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-[#02022D] text-white p-2.5"
                >
                  {priceSort.map((price) => (
                    <DropdownMenuItem
                      key={price}
                      onSelect={() => {
                        if (price === "High to low") {
                          setPrice("-price");
                        }
                        if (price === "Low to high") {
                          setPrice("price");
                        }
                        setBrand(undefined);
                        setCategory(undefined);
                      }}
                    >
                      {price}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem
                    onSelect={() => {
                      setPrice(undefined);
                    }}
                  >
                    Clear Filter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
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
                            <div className="w-full h-52 group rounded-lg relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow">
                              <img
                                className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
                                src={product?.image}
                                alt=""
                              />
                            </div>
                            <h2 className="font-semibold">
                              {product.name.length > 27
                                ? `${product.name.substring(0, 27)}...`
                                : product.name}
                            </h2>

                            <CardDescription>
                              {product.description.length > 30
                                ? `${product.description.substring(0, 30)}...`
                                : product.description}
                            </CardDescription>

                            <h3 className="flex items-center gap-1">
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
        </div>
      </Container>
    </div>
  );
};

export default Products;
