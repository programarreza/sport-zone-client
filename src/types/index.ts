export type TProduct = {
  _id: string;
  brand: string;
  category: string;
  createdAt: string;
  description: string;
  image: string;
  isDeleted: boolean;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  stockQuantity: number;
  updatedAt: string;
  __v: number;
};

export type TCategory = {
  _id: string;
  categoryName: string;
  image: string;
};
