/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import { imageUpload } from "@/utils/utils";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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

  const onSubmit = async (formData: any) => {
    const toastId = toast.loading("Please wait", { position: "top-center" });

    try {
      let imageUrl = singleProduct?.image;

      if (formData.image[0]) {
        const image = formData.image[0];
        const imageData = await imageUpload(image);
        imageUrl = imageData?.data?.display_url;
      }

      const productData = {
        name: formData.name,
        category: formData.category,
        stockQuantity: parseInt(formData.quantity, 10),
        brand: formData.brand,
        description: formData.description,
        price: parseFloat(formData.price),
        image: imageUrl,
      };

      await updateProduct({ id, updateData: productData });

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
      <div className="ml-12">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild className="w-fit">
            <FaRegEdit size={26} color="#5969FF" />
          </DialogTrigger>
          <DialogContent className="bg-[#020228] text-white">
            <DialogHeader>
              <DialogTitle>Update Product</DialogTitle>
              <DialogDescription>
                Update the product details here.
              </DialogDescription>
            </DialogHeader>
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
                    className="input input-bordered border p-3 w-full rounded-lg bg-[#02022D]"
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
                    className="input input-bordered border p-3 w-full rounded-lg bg-[#02022D]"
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
                    defaultValue={singleProduct?.stockQuantity}
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
                    defaultValue={singleProduct?.price}
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
                    defaultValue={singleProduct?.description}
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
    </div>
  );
};

export default UpdateProduct;
