import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleProductQuery(id);
  const product = data?.data;

  return (
    <div className="bg-[#020228] text-white min-h-screen">
      <Container>
        <div className="flex">
          {/* product image area */}
          <div className="flex-1">
            <img
              className="min-w-[450px] h-[400px] rounded-lg"
              src={product?.image}
              alt=""
            />
          </div>

          {/* product content area */}
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl font-semibold">{product?.name}</h2>
            <p className="text-sm opacity-70">{product?.description}</p>
            <div>
              <Rating
                initialRating={product?.rating}
                readonly
                emptySymbol={<FaRegStar className="text-gray-400" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
              />
            </div>
            <h3>
              <span className="text-gray-500">Brand:</span> {product?.brand}
            </h3>
            <h3>
              <span className="text-gray-500">Category: </span>
              {product?.category}
            </h3>
            <h3>
              <span className="text-gray-500">Stock Quantity:</span>{" "}
              {product?.stockQuantity}
            </h3>
            <div className="flex items-center text-3xl font-semibold">
              <span>
                <FaBangladeshiTakaSign />
              </span>
              <p>{product?.price}</p>
            </div>
            <Button className="">Add To Cart</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
