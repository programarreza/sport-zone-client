import { Button } from "@/components/ui/button";
import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types";
import { Minus, Plus } from "lucide-react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import Rating from "react-rating";

const CartDetails = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();

  const handleQuantity = (type: string, id: string) => {
    if (type === "increment" && product.quantity < 5) {
      const payload = { type, id };
      dispatch(updateQuantity(payload));
    } else if (type === "decrement" && product.quantity > 1) {
      const payload = { type, id };
      dispatch(updateQuantity(payload));
    }
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="">
      {/* product info */}
      <div className="flex flex-col md:flex-row lg:gap-6 xl:gap-32 items-center border mb-4 justify-between p-2 shadow-md rounded-md">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <img
            className="size-full md:size-28"
            src={product?.image}
            alt="product image"
          />
          <div>
            <h3 className="text-2xl font-semibold">
              {product.name.length > 25
                ? `${product.name.substring(0, 25)}...`
                : product.name}
            </h3>
            <p>Brand: {product?.brand}</p>
            <p>Category: {product?.category}</p>
            <div>
              <Rating
                initialRating={product?.rating}
                readonly
                emptySymbol={<FaRegStar className="text-gray-400" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
              />
            </div>
          </div>
        </div>

        <div className=" flex justify-between items-center gap-44 md:gap-12">
          <div> 
            <div className="flex items-center gap-2 mb-2">
              <FaBangladeshiTakaSign />
              {product?.price}
            </div>
            <button
              onClick={(e) => handleRemove(e, product._id)}
              className="bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
            >
              <MdDeleteSweep size={20} />
            </button>
          </div>

        <div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => handleQuantity("decrement", product._id)}
              className="bg-[#b33000] text-white font-semibold py-1.5 px-2 rounded-lg hover:bg-[#ff4500] transition duration-300 shadow-md hover:shadow-lg"
              disabled={product.quantity <= 1}
            >
              <Minus size={25} />
            </Button>
            <span className="text-lg font-semibold">{product.quantity}</span>
            <Button
              onClick={() => handleQuantity("increment", product._id)}
              className="bg-[#b33000] text-white font-semibold py-1.5 px-3 rounded-lg hover:bg-[#ff4500] transition duration-300 shadow-md hover:shadow-lg"
              disabled={product.quantity >= 5}
            >
              <Plus size={18} />
            </Button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default CartDetails;
