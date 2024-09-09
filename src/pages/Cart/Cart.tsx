import Container from "@/components/Container";
import { useAppSelector } from "@/redux/hooks";
import CartDetails from "./CartDetails";
import { TProduct } from "@/types";
import OrderSummary from "@/components/Order/OrderSummary";

const Cart = () => {
  const products = useAppSelector((store) => store?.cart?.products);

  return (
    <div>
      <Container>
        <div className="flex lg:flex-row flex-col-reverse  justify-between">
          <div>
            {products.length ? (
              products.map((product: TProduct) => (
                <CartDetails key={product._id} product={product} />
              ))
            ) : (
              <p className="text-2xl ">product not found!!</p>
            )}
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
