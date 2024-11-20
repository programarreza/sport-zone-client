import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Hearder/Navbar";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#F2F4F8]">
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
