import { clearCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Trash2 } from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { tax, taxRate, grandTotal, totalPrice, selectedItems } =
    useAppSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="lg:w-80 w-full h-full border-l-4 pl-4 rounded">
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="text-2xl font-bold text-dark pb-4">Order Summary</th>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClearCart();
              }}
              className="border border-red-400 px-3 py-2 text-back  mt-2 rounded-md w-full text-xs flex justify-between items-center mb-4"
            >
              <span>Clear Cart</span>
              <Trash2 className="inline" width={15} height={15} />
            </button>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-dark mt-4">Selected Items:</td>
            <td className="text-dark mt-4 text-right font-semibold">
              {selectedItems}
            </td>
          </tr>
          <tr>
            <td className="text-dark">Total Price:</td>
            <td className="text-dark text-right font-semibold flex items-center justify-end">
              <FaBangladeshiTakaSign />
              {totalPrice?.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="text-dark">Tax ({taxRate * 100}%):</td>
            <td className="text-dark text-right font-semibold flex items-center justify-end">
              <FaBangladeshiTakaSign />
              {tax?.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="text-xl font-semibold text-dark pt-4">Total:</td>
            <td className="text-xl font-semibold text-dark mt-2 text-right flex items-center justify-end">
              <FaBangladeshiTakaSign />
              {grandTotal?.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-8 ">
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/checkout");
          }}
          className="bg-[#b33000]  font-semibold py-1.5 px-2 rounded-lg hover:bg-[#ff4500] transition duration-300 shadow-md hover:shadow-lg  mt-2 w-full  flex justify-center items-center text-white"
        >
          <span>Proceed Checkout</span>
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
