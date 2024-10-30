import axios from "axios";

// image upload
export const imageUpload = async (image: string | Blob) => {
  const formData = new FormData();
  formData.append("image", image);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );
  return data;
};

export const categories = [
  "processor",
  "monitor",
  "mather board",
  "graphic card",
  "ram",
  "ssd",
  "casing",
  "power supply",
  "accessories",
  "router",
  "others",
];

export const brands = [
  "Adidas",
  "Nike",
  "Wilson",
  "Under Armour",
  "Quiksilver",
  "Yonex",
  "Bell",
  "Spalding",
  "Mikasa",
];

export const priceSort = ["High to low", "Low to high"];
