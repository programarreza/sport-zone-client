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
    <div>
      <Container>
        {products?.length ? (
          <div className="flex lg:flex-row flex-col-reverse  justify-between">
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
          <div className="h-screen  flex flex-col justify-center items-center gap-4 ">
            <h2>There are no items in this cart</h2>
            <Link to={"/products"}>
              <Button>Continue shopping</Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
