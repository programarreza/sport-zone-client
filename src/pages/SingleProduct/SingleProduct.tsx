/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/features/cartSlice";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const product = data?.data;

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-[#020228] text-white min-h-screen pt-20">
      <Container>
        <div>
          {isLoading && <Loading />}
          <div className="flex gap-24">
            {/* product image area */}
            <div className="flex-1">
              <img
                className="w-full h-[400px] rounded-lg"
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
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
                className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
