import ContactUs from "@/components/ContactUs/ContactUs";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Header from "@/components/Hearder/Header";

const Home = () => {
  return (
    <div className="font-raleway">
      <Header />
      <FeaturedProducts/>
      <ContactUs/>
    </div>
  );
};

export default Home;
