import Container from "@/components/Container";
import { useAppSelector } from "@/redux/hooks";

const Cart = () => {

  
  const products = useAppSelector((store) => store?.cart?.products);
  console.log(products)

  return (
    <div>
      <Container>
    
        <h2>Cart Component Coming Soon</h2>
      </Container>
    </div>
  );
};

export default Cart;
