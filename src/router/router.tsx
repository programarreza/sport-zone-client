import MainLayout from "@/layout/MainLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Cart from "@/pages/Cart/Cart";
import ContactUs from "@/pages/ContactUs/ContactUs";
import Home from "@/pages/Home/Home";
import ManageProducts from "@/pages/ManageProducts/ManageProducts";
import Products from "@/pages/Products/Products";
import SingleProduct from "@/pages/SingleProduct/SingleProduct";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "single-product/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

export default router;
