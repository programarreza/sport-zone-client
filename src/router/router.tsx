import MainLayout from "@/layout/MainLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Checkout/Checkout";
import Home from "@/pages/Home/Home";
import ManageProducts from "@/pages/ManageProducts/ManageProducts";
import PaymentSuccess from "@/pages/PaymentSuccess/PaymentSuccess";
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
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "single-product/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

export default router;
