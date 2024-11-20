import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useAddProductMutation } from "@/redux/features/product/productApi";
import { categories } from "@/utils/utils";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ImSpinner6 } from "react-icons/im";
import { toast } from "sonner";

const CreateProduct = () => {
  const [addProduct, { isSuccess, data, isLoading }] = useAddProductMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      const imageFile = data.image[0];
      formData.append("image", imageFile);

      const productData = {
        name: data.name,
        category: data.category,
        stockQuantity: parseInt(data.quantity, 10),
        brand: data.brand,
        description: data.description,
        price: parseFloat(data.price),
      };

      formData.append("data", JSON.stringify(productData));

      await addProduct(formData);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        duration: 2000,
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    if (isSuccess && data?.success) {
      setIsDialogOpen(false); // Close the modal
      toast.success("Product Created Successfully", {
        duration: 2000,
        position: "top-center",
      });
    }
  }, [isSuccess, data]);

  return (
    <div className="ml-12">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-transparent ">
            Create Product
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#F2F4F8]  ">
          {/* form area */}
          <div className=" shadow-xl ">
            <form onSubmit={handleSubmit(onSubmit)} className="p-2 rounded-md">
              {/* product name */}
              <div className="form-control ">
                <label className="label"></label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Product Name"
                  className="input input-bordered border p-3 w-full rounded-lg bg-[#F2F4F8]  "
                />
                {errors.name && (
                  <span className="text-[#FF4500]">
                    Product Name is required
                  </span>
                )}
              </div>

              {/* product brand */}
              <div className="form-control mt-3">
                <label className="label"></label>
                <input
                  type="text"
                  {...register("brand", { required: true })}
                  placeholder="Brand Name"
                  className="input input-bordered border p-3 w-full rounded-lg bg-[#F2F4F8] "
                />
                {errors.name && (
                  <span className="text-[#FF4500]">Brand Name is required</span>
                )}
              </div>

              {/* category */}
              <div className="form-control mt-3">
                <select
                  className="border py-3 rounded-md w-full bg-[#F2F4F8]  space-y-10"
                  {...register("category", { required: true })}
                >
                  <option disabled selected>
                    product category
                  </option>
                  {categories?.map((category) => (
                    <option value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* stock quantity */}
              <div className="form-control mt-3">
                <input
                  type="number"
                  {...register("quantity", { required: true })}
                  placeholder="Product Quantity"
                  className="input input-bordered border p-3 w-full rounded-lg bg-[#F2F4F8] "
                />
                {errors.quantity && (
                  <span className="text-[#FF4500]">
                    stock quantity is required
                  </span>
                )}
              </div>

              {/* price */}
              <div className="form-control mt-3">
                <input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="Price BDT"
                  className="input input-bordered border p-3 w-full rounded-lg bg-[#F2F4F8] "
                />
                {errors.price && (
                  <span className="text-[#FF4500]">price is required</span>
                )}
              </div>

              {/* description */}
              <div className="form-control mt-3">
                <textarea
                  {...register("description", { required: true })}
                  placeholder="Description"
                  className="input input-bordered border p-3 w-full rounded-lg bg-[#F2F4F8] "
                />
                {errors.description && (
                  <span className="text-[#FF4500]">
                    description is required
                  </span>
                )}
              </div>

              {/* product image */}
              <div className="mt-0">
                <label htmlFor="image" className="block mb-2  ">
                  Product Image
                </label>
                <input
                  {...register("image", { required: true })}
                  className="border p-2 w-full rounded-md"
                  required
                  type="file"
                  id="image"
                  accept="image/*"
                />
                {errors.image && (
                  <span className="text-[#FF4500]">
                    Product Image is required
                  </span>
                )}
              </div>

              <div className="form-control mt-2 flex justify-center items-center py-0">
                <button
                  type="submit"
                  className="border border-[#FF4500] font-semibold  hover:bg-[#FF4500] hover:text-white  py-2 px-4 rounded-md opacity-90 hover:opacity-100"
                >
                  {isLoading ? (
                    <ImSpinner6 size={28} className="animate-spin m-auto" />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProduct;
