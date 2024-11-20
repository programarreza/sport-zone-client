import team1 from "@/assets/images/team4.png";
import team2 from "@/assets/images/team5.jpg";
import team3 from "@/assets/images/team6.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <div>
      <div
        className="px-4 md:px-6 lg:px-12 xl:px-24 pb-24 text-white"
        id="projects"
      >
        <h2 className="text-black mb-12 pb-5 text-3xl md:text-4xl text-center pt-12 md:pt-24  border-b-2 border-[#f57c48]  w-fit mx-auto font-semibold">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* team-1 */}
          <div>
            <div className="group rounded-lg relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow">
              <div className=" border">
                <img
                  className="h-[400px]  w-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
                  src={team1}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[95%]  group-hover:translate-y-0 translate-all duration-500 ">
                <div className=" ">
                  <h2 className="text-3xl font-semibold">Fayjul Islam</h2>
                  <h3 className="uppercase">COO (Chief Operating Officer) </h3>
                </div>

                <div className="flex gap-6 mt-4">
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500]   ">
                      <FaFacebookF color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500]   ">
                      <FaTwitter color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500] ">
                      <FaLinkedinIn color="#fff" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* team-2 */}
          <div>
            <div className="group rounded-lg relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow">
              <div className=" border">
                <img
                  className="h-[400px]  w-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
                  src={team2}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[95%]  group-hover:translate-y-0 translate-all duration-500 ">
                <div className=" ">
                  <h2 className="text-3xl font-semibold">Rakib Hossen</h2>
                  <h3 className="uppercase">Product Manager</h3>
                </div>

                <div className="flex gap-6 mt-4">
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500]   ">
                      <FaFacebookF color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500]   ">
                      <FaTwitter color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500] ">
                      <FaLinkedinIn color="#fff" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* team-3 */}
          <div>
            <div className="group rounded-lg relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow">
              <div className=" border">
                <img
                  className="h-[400px]  w-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
                  src={team3}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[95%]  group-hover:translate-y-0 translate-all duration-500 ">
                <div className=" ">
                  <h2 className="text-3xl font-semibold">md reza</h2>
                  <h3 className="uppercase">Customer Support Manager</h3>
                </div>

                <div className="flex gap-6 mt-4">
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500]   ">
                      <FaFacebookF color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500]   ">
                      <FaTwitter color="#fff" />
                    </p>
                  </Link>
                  <Link to="" className="link link-hover">
                    <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500] ">
                      <FaLinkedinIn color="#fff" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
