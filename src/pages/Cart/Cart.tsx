import Container from "@/components/Container";
import { useAppSelector } from "@/redux/hooks";
import CartDetails from "./CartDetails";
import { TProduct } from "@/types";
import OrderSummary from "@/components/Order/OrderSummary";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useAppSelector((store) => store?.cart?.products);

  return (
    <div className="bg-[#190700] text-white min-h-screen">
      <Container>
        {products?.length ? (
          <div className="flex gap-6 lg:gap-4 lg:flex-row flex-col-reverse  justify-between">
            <div>
              {products.length &&
                products.map((product: TProduct) => (
                  <CartDetails key={product._id} product={product} />
                ))}
            </div>
            <div>
              <OrderSummary />
            </div>
          </div>
        ) : (
          <div className="h-screen bg-[#190700] flex flex-col justify-center items-center gap-4 ">
            <h2 className="text-white">There are no items in this cart</h2>
            <Link to={"/products"}>
              <Button className="bg-[#b33000] text-white font-semibold py-1.5 px-2 rounded-lg hover:bg-[#ff4500] transition duration-300 shadow-md hover:shadow-lg">Continue shopping</Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
