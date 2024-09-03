import Container from "@/components/Container";
import about from "@/assets/images/about-us.jpg";
import OurTeam from "@/components/OurTeam/OurTeam";
import Map from "@/components/Map/Map";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Container>
        <div>
          {/* our mission and vision */}
          {/* <div className="py-20">
            <h2 className="text-center text-5xl font-bold">About US</h2>
          </div> */}
          <div className="flex flex-col lg:flex-row justify-between  gap-4 xl:gap-12 ">
            {/* image  */}
            <div className="w-full shadow-xl rounded-md">
              <img className="w-full h-full" src={about} alt="about image" />
            </div>

            {/* content */}
            {/* <div className="w-full shadow-xl space-y-6 p-4 rounded-md">
              <h3 className="font-medium uppercase text-3xl">About Us</h3>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                Your Partner in Every Sport
              </h2>
              <p>
                At Sporting Goods, we’re dedicated to providing top-quality
                sports equipment and apparel for athletes of all levels. Whether
                you’re just starting out or a seasoned pro, we’ve got everything
                you need to succeed in your sport.
              </p>
              <div className="space-y-2">
                <hr />
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p>
                  Our mission is to empower athletes and sports enthusiasts by
                  offering high-quality products that enhance performance and
                  promote a healthy, active lifestyle.
                </p>
              </div>
            </div> */}
            <div className="w-full shadow-xl space-y-3 p-4 rounded-md">
              <h3 className="font-medium uppercase text-3xl">About Us</h3>
              <h2 className="text-3xl md:text-5xl  font-bold">
                Your Partner in Every Sport
              </h2>
              <p>
                At Sporting Goods, we’re dedicated to providing top-quality
                sports equipment and apparel for athletes of all levels. Whether
                you’re just starting out or a seasoned pro.
              </p>
              <div className="space-y-2">
                <hr />
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p>
                  Our mission is to empower athletes and sports enthusiasts by
                  offering high-quality products that enhance performance and
                  promote a healthy lifestyle.
                </p>
              </div>
              <div className="space-y-2">
                <hr />
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p>
                  <strong>Email:</strong> support@sportinggoods.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p>
                  <strong>Address:</strong> 1234 Sport Lane, Fitness City, CA
                  12345
                </p>
              </div>
            </div>
          </div>

          {/* our team */}
          <div>
            <OurTeam />
          </div>

          {/* contact */}
          <div className="pt-12">
            <Map />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
