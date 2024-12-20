import Categories from "@/components/Categories/Categories";
import ContactUs from "@/components/ContactUs/ContactUs";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Header from "@/components/Hearder/Header";

const Home = () => {
  return (
    <div className="font-raleway bg-[#F2F4F8]">
      <Header />
      <FeaturedProducts/>
      <Categories/>
      <ContactUs/>
    </div>
  );
};

export default Home;
