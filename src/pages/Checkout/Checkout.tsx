import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ImSpinner6 } from "react-icons/im";
import logo1 from "@/assets/images/logo1.png";
import logo2 from "@/assets/images/logo2.jpg";
import logo3 from "@/assets/images/logo3.png";
import logo4 from "@/assets/images/logo4.png";
import logo5 from "@/assets/images/logo5.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAddOrderMutation } from "@/redux/features/order/orderApi";
import { useEffect } from "react";
import { clearCart } from "@/redux/features/cartSlice";

const Checkout = () => {
  const [createOrder, { isSuccess, isLoading, data: orderData }] =
    useAddOrderMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { tax, taxRate, grandTotal, totalPrice, selectedItems, products } =
    useAppSelector((store) => store.cart);

  console.log(24, orderData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const defaultValues = {
    name: "md shafikul islam",
    email: "shafikul@gmail.com",
    number: "01967310130",
    address: "nalchity, jhalakathi",
  };

  // Handle form submission
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const orderData = {
      customerInfo: data,
      items: selectedItems,
      totalPrice,
      tax,
      grandTotal,
      products,
      paymentMethod: "Cash on delivery",
    };

    await createOrder(orderData);
  };

  // Handle success toast and navigation
  useEffect(() => {
    if (isSuccess) {
      toast.success("Order Created Successfully!", { duration: 2000 });
      navigate("/payment-success");
      dispatch(clearCart());
    }
  }, [dispatch, isSuccess, navigate]);

  return (
    <div className="flex justify-center items-center ">
      <Container>
        <div className="">
          {/* customer info */}
          <div>
            <div className="hero">
              <div className="hero-content">
                {/* form area */}
                <div className="flex-shrink-0 shadow-xl">
                  <div className=" rounded-md">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5 pb-5 grid grid-cols-3 gap-0"
                    >
                      <div className="p-4 space-y-4">
                        <h2 className="text-center text-xl font-bold py-5">
                          Customer Info
                        </h2>

                        <div className="form-control">
                          <label className="label"></label>
                          <Input
                            defaultValue={defaultValues?.name}
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Name"
                            className="input input-bordered"
                          />
                          {errors.name && (
                            <span className="text-[#006ce1]">
                              Name is required
                            </span>
                          )}
                        </div>

                        <div className="form-control">
                          <label className="label"></label>
                          <Input
                            defaultValue={defaultValues?.email}
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Email"
                            className="input input-bordered"
                          />
                          {errors.email && (
                            <span className="text-[#006ce1]">
                              Email is required
                            </span>
                          )}
                        </div>

                        <div className="form-control">
                          <label className="label"></label>
                          <Input
                            defaultValue={defaultValues?.number}
                            type="text"
                            {...register("number", { required: true })}
                            placeholder="Phone Number"
                            className="input input-bordered"
                          />
                          {errors.number && (
                            <span className="text-[#006ce1]">
                              Number is required
                            </span>
                          )}
                        </div>

                        <div className="form-control">
                          <label className="label"></label>
                          <Input
                            defaultValue={defaultValues?.address}
                            type="text"
                            {...register("address", { required: true })}
                            placeholder="Address"
                            className="input input-bordered"
                          />
                          {errors.address && (
                            <span className="text-[#006ce1]">
                              Address is required
                            </span>
                          )}
                        </div>
                      </div>

                      {/* payment method */}
                      <div className="border">
                        <h2 className="text-center text-xl font-bold mt-5">
                          Payment Method
                        </h2>

                        <div className="p-3">
                          <h3 className="py-3">Select a payment method</h3>

                          <RadioGroup defaultValue="Cash on delivery">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="Cash on delivery"
                                id="r2"
                              />
                              <Label htmlFor="r2">Cash on delivery</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                disabled
                                value="Online Payment"
                                id="r3"
                              />
                              <Label htmlFor="r3">Online Payment</Label>
                            </div>
                          </RadioGroup>
                          <p className="text-xl font-semibold pt-8 pb-3">
                            We Accept:{" "}
                          </p>
                          <div className="flex justify-between gap-2">
                            <div>
                              <h2 className="uppercase">cash on delivery</h2>
                            </div>

                            <img className="size-12" src={logo1} alt="logo1" />
                            <img className="size-12" src={logo2} alt="logo2" />
                            <img className="size-12" src={logo3} alt="logo3" />
                            <img className="size-12" src={logo4} alt="logo4" />
                            <img className="size-12" src={logo5} alt="logo5" />
                          </div>
                        </div>
                      </div>

                      {/* order summary */}
                      <div className="border ml-4">
                        <div className="lg:w-80 w-full h-full border-l-4 pl-4 rounded">
                          <table className="table-auto w-full text-left">
                            <thead>
                              <tr>
                                <th className="text-2xl font-bold text-dark py-4">
                                  Order Summary
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-dark mt-4">
                                  Selected Items:
                                </td>
                                <td className="text-dark mt-4 text-right font-semibold">
                                  {selectedItems}
                                </td>
                              </tr>
                              <tr>
                                <td className="text-dark">Total Price:</td>
                                <td className="text-dark text-right font-semibold flex items-center justify-end">
                                  <FaBangladeshiTakaSign />
                                  {totalPrice.toFixed(2)}
                                </td>
                              </tr>
                              <tr>
                                <td className="text-dark">
                                  Tax ({taxRate * 100}%):
                                </td>
                                <td className="text-dark text-right font-semibold flex items-center justify-end">
                                  <FaBangladeshiTakaSign />
                                  {tax.toFixed(2)}
                                </td>
                              </tr>
                              <tr>
                                <td className="text-xl font-semibold text-dark pt-4">
                                  Total:
                                </td>
                                <td className="text-xl font-semibold text-dark mt-2 text-right flex items-center justify-end">
                                  <FaBangladeshiTakaSign />
                                  {grandTotal.toFixed(2)}
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <div className="mt-14">
                            <button
                              type="submit"
                              className="bg-black px-3 py-2 text-white mt-2 rounded-md w-full flex justify-center items-center"
                            >
                              {isLoading ? (
                                <ImSpinner6
                                  size={28}
                                  className="animate-spin m-auto"
                                />
                              ) : (
                                <span>Place Order</span>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
