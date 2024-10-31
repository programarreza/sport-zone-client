import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className=" min-h-[calc(100vh-65px)] bg-[#190700] text-white">
      <Container>
        <div className="min-h-screen flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col">
            <div className="border-4 border-[#4BB543] p-4 flex justify-center items-center rounded-full">
              <MdOutlineDone color="#4BB543" size={40} />
            </div>

            <h2 className="text-3xl font-semibold mt-4">Order Successful</h2>
            <p className="text-lg mt-2">Thank you for your purchase!</p>
          </div>

          <div className=" flex justify-center items-center">
            <Link to="/">
              <Button className="bg-[#b33000] text-white font-semibold py-1.5 px-2 rounded-lg hover:bg-[#ff4500] transition duration-300 shadow-md hover:shadow-lg mt-4">
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
