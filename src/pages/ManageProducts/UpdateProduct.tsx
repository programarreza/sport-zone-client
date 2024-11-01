/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import { categories } from "@/utils/utils";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "sonner";

const UpdateProduct = ({ id }: { id: string }) => {
  const { data } = useGetSingleProductQuery(id);
  const [updateProduct, { isSuccess }] = useUpdateProductMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const singleProduct = data?.data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      setIsDialogOpen(false);
      toast.success("Product Updated Successfully");
    }
  }, [isSuccess]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait", { position: "top-center" });

    try {
      const formData = new FormData();
      const existingImageUrl = singleProduct?.image;

      if (data.image[0]) {
        const imageFile = data.image[0];
        formData.append("image", imageFile || existingImageUrl);
      }

      const productData = {
        name: data.name,
        category: data.category,
        stockQuantity: parseInt(data.quantity, 10),
        brand: data.brand,
        description: data.description,
        price: parseFloat(data.price),
      };

      formData.append("data", JSON.stringify(productData));

      await updateProduct({ id, updateData: formData });

      toast.dismiss(toastId);
    } catch (error) {
      console.error(error);
      toast.dismiss(toastId);
      toast.error("Something went wrong", {
        duration: 2000,
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <div className="">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild className="">
            <FaRegEdit size={26} color="#5969FF" />
          </DialogTrigger>
          <DialogContent className="bg-[#190700] text-white border-[#FF4500]">
            <div className="shadow-xl">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-2 rounded-md"
              >
                {/* product name */}
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    defaultValue={singleProduct?.name}
                    {...register("name", { required: true })}
                    placeholder="Product Name"
                    className="input input-bordered border p-3 w-full rounded-lg bg-[#1F0E07] border-[#FF4500] "
                  />
                  {errors.name && (
                    <span className="text-[#D1A054]">
                      Product Name is required
                    </span>
                  )}
                </div>

                {/* product brand */}
                <div className="form-control mt-3">
                  <label className="label"></label>
                  <input
                    defaultValue={singleProduct?.brand}
                    type="text"
                    {...register("brand", { required: true })}
                    placeholder="Brand Name"
                    className="input input-bordered border p-3 w-full rounded-lg bg-[#1F0E07] border-[#FF4500] "
                  />
                  {errors.brand && (
                    <span className="text-[#D1A054]">
                      Brand Name is required
                    </span>
                  )}
                </div>

                {/* category */}
                <div className="form-control mt-3">
                  <select
                    defaultValue={singleProduct?.category}
                    className="border py-3 rounded-md w-full bg-[#1F0E07] border-[#FF4500] space-y-10"
                    {...register("category", { required: true })}
                  >
                    <option disabled selected>
                      product category
                    </option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* stock quantity */}
                <div className="form-control mt-3">
                  <input
                    defaultValue={singleProduct?.stockQuantity}
                    type="number"
                    {...register("quantity", { required: true })}
                    placeholder="Product Quantity"
                    className="input input-bordered border p-3 w-full rounded-lg bg-[#1F0E07] border-[#FF4500] "
                  />
                  {errors.quantity && (
                    <span className="text-[#D1A054]">
                      stock quantity is required
                    </span>
                  )}
                </div>

                {/* price */}
                <div className="form-control mt-3">
                  <input
                    defaultValue={singleProduct?.price}
                    type="number"
                    {...register("price", { required: true })}
                    placeholder="Price BDT"
                    className="input input-bordered border p-3 w-full rounded-lg bg-[#1F0E07] border-[#FF4500] "
                  />
                  {errors.price && (
                    <span className="text-[#D1A054]">price is required</span>
                  )}
                </div>

                {/* description */}
                <div className="form-control mt-3">
                  <textarea
                    defaultValue={singleProduct?.description}
                    {...register("description", { required: true })}
                    placeholder="Description"
                    className="input input-bordered border p-3 w-full rounded-lg bg-[#1F0E07] border-[#FF4500] "
                  />
                  {errors.description && (
                    <span className="text-[#D1A054]">
                      description is required
                    </span>
                  )}
                </div>

                {/* product image */}
                <div className="mt-0">
                  <label htmlFor="image" className="block mb-2">
                    Product Image (optional)
                  </label>

                  <input
                    {...register("image")}
                    className="border p-2 w-full rounded-md"
                    type="file"
                    id="image"
                    accept="image/*"
                  />
                  {errors.image && (
                    <span className="text-[#D1A054]">
                      Product Image is required
                    </span>
                  )}
                </div>

                <div className="form-control mt-2 flex justify-center items-center py-0">
                  <button
                    type="submit"
                    className="bg-[#b33000] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#ff4500] transition duration-300 shadow-md hover:shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default UpdateProduct;
