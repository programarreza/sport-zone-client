import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAddProductMutation } from "@/redux/features/product/productApi";
import { imageUpload } from "@/utils/utils";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateProduct = () => {
  const [addProduct, { isSuccess }] = useAddProductMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Please wait", { position: "top-center" });

    try {
      const image = data.image[0];
      const imageData = await imageUpload(image);

      const productData = {
        name: data.name,
        category: data.category,
        stockQuantity: parseInt(data.quantity, 10),
        brand: data.brand,
        description: data.description,
        price: parseFloat(data.price),
        image: imageData?.data?.display_url,
      };

      await addProduct(productData);
      if (isSuccess) {
        setIsDialogOpen(false); // Close the modal
        toast.success("Product Created Successfully ", {
          id: toastId,
          duration: 2000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="ml-12">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-[#02022D]">
            Create Product
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#020228] text-white">
          <DialogHeader>
            <DialogTitle>Create Product</DialogTitle>
            <DialogDescription>Make a product here.</DialogDescription>
          </DialogHeader>
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
                  className="input input-bordered border p-3 w-full rounded-lg bg-[#02022D] "
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
                  type="text"
                  {...register("brand", { required: true })}
                  placeholder="Brand Name"
                  className="input input-bordered border p-3 w-full rounded-lg bg-[#02022D]"
                />
                {errors.name && (
                  <span className="text-[#D1A054]">Brand Name is required</span>
                )}
              </div>

              {/* category */}
              <div className="form-control mt-3">
                <select
                  className="border py-3 rounded-md w-full bg-[#02022D] space-y-10"
                  {...register("category", { required: true })}
                >
                  <option disabled selected>
                    product category
                  </option>
                  <option value="hiking boots">hiking boots</option>
                  <option value="basketball">basketball</option>
                  <option value="tennis">tennis</option>
                  <option value="bags & backpacks">bags & backpacks</option>
                  <option value="football">football</option>
                </select>
              </div>

              {/* stock quantity */}
              <div className="form-control mt-3">
                <input
                  type="number"
                  {...register("quantity", { required: true })}
                  placeholder="Product Quantity"
                  className="input input-bordered border p-3 w-full rounded-lg bg-[#02022D]"
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
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="Price BDT"
                  className="input input-bordered border p-3 w-full rounded-lg bg-[#02022D]"
                />
                {errors.price && (
                  <span className="text-[#D1A054]">price is required</span>
                )}
              </div>

              {/* description */}
              <div className="form-control mt-3">
                <textarea
                  type="text"
                  {...register("description", { required: true })}
                  placeholder="Description"
                  className="input input-bordered border p-3 w-full rounded-lg bg-[#02022D]"
                />
                {errors.description && (
                  <span className="text-[#D1A054]">
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
                  <span className="text-[#D1A054]">
                    Product Image is required
                  </span>
                )}
              </div>

              <div className="form-control mt-2 flex justify-center items-center py-0">
                <button
                  type="submit"
                  className="py-2 px-4 rounded-md opacity-90 hover:opacity-100  bg-[#5969FF] text-white"
                >
                  Submit
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