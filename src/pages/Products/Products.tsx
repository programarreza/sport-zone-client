/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { FaBangladeshiTakaSign, FaStar, FaRegStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, isLoading, error } = useGetAllProductsQuery(undefined);

  console.log(data?.data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-[#020228]">
      <Container>
        <div className="grid grid-cols-4 gap-6 pt-4">
          {data?.data?.map((product) => (
            <div key={product.id}>
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
                        {/* <h3 className="font-semibold">{product?.brand}</h3> */}
                        <CardDescription>
                          {product.description.length > 30
                            ? `${product.description.substring(0, 30)}...`
                            : product.description}
                        </CardDescription>

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
                            fullSymbol={<FaStar className="text-yellow-500" />}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
