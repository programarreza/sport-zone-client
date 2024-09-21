import Container from "@/components/Container";
import about from "@/assets/images/about-us.jpg";
import OurTeam from "@/components/OurTeam/OurTeam";
import Map from "@/components/Map/Map";

const AboutUs = () => {
  return (
    <div className="min-h-screen  text-white">
      <div>
        {/* our mission and vision */}
        <div className="bg-[#020228] py-5">
          <Container>
            <div className="flex flex-col lg:flex-row justify-between  gap-4 xl:gap-12 ">
              <div className="w-full shadow-xl rounded-md">
                <img className="w-full h-full" src={about} alt="about image" />
              </div>

              <div className="w-full shadow-xl space-y-3 p-4 rounded-md">
                <h3 className="font-medium uppercase text-3xl">About Us</h3>
                <h2 className="text-3xl md:text-5xl  font-bold">
                  Your Partner in Every Sport
                </h2>
                <p>
                  At Sporting Goods, we’re dedicated to providing top-quality
                  sports equipment and apparel for athletes of all levels.
                  Whether you’re just starting out or a seasoned pro.
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
          </Container>
        </div>

        {/* our team */}
        <div className="bg-[#0B0B30]">
          <OurTeam />
        </div>

        {/* contact */}
        <div className="pt-5 bg-[#020228]">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
