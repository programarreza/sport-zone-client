import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="pt-24 flex justify-center items-center min-h-[calc(100%-65px)]">
      <Container>
        <div>
          <div className="flex justify-center items-center flex-col">
            <div className="border-4 border-[#4BB543] p-4 flex justify-center items-center rounded-full">
              <MdOutlineDone color="#4BB543" size={40} />
            </div>

            <h2 className="text-3xl font-semibold mt-4">Order Successful</h2>
            <p className="text-lg mt-2">Thank you for your purchase!</p>
          </div>

          <div className=" flex justify-center items-center">
            <Link to="/">
              <Button className="btn mt-4  bg-[#61adff] hover:bg-[#006ce1] text-white  ">
                Back to home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentSuccess;
