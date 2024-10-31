import logo from "@/assets/images/logo2.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t border-[#FF4500] p-4 pt-12 md:p-3 md:pt-24 lg:p-12 xl:p-24 bg-[#190700] text-white shadow-2xl ">
      <div className="flex justify-between flex-col space-y-12 md:space-y-0  md:flex-row flex-wrap">
        <div className="flex-1">
          <Link to={"/"} className="flex gap-2">
            <div className="w-[300px] ">
              <div className=" flex items-center gap-4">
                <img
                  src={logo}
                  alt=""
                  className=" bg-white size-12 rounded-full border"
                />
                <p className="text-xl lg:text-3xl font-bold">Remedy</p>
              </div>
            </div>
          </Link>
          <p className="mr-12 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            minus autem doloribus suscipit porro et maiores inventore eius
            pariatur dolor.
          </p>
          <div className="flex gap-6 mt-12">
            <Link to="" className="link link-hover">
              <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500] border-[#FF4500]  ">
                <FaFacebookF />
              </p>
            </Link>
            <Link to="" className="link link-hover">
              <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500] border-[#FF4500]  ">
                <FaTwitter />
              </p>
            </Link>
            <Link to="" className="link link-hover">
              <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#FF4500]/50 hover:bg-[#FF4500] border-[#FF4500]">
                <FaLinkedinIn />
              </p>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <h6 className="text-2xl font-bold text-[#FF4500]">Quick Links</h6>
          <div className="flex justify-between gap-24">
            <div className="flex flex-col gap-4">
              <Link to="/" className="link link-hover">
                Home
              </Link>
              <Link to="/products" className="link link-hover">
                Products
              </Link>
              <Link to="/contact-us" className="link link-hover">
                Contact Us
              </Link>
              <Link to="/about-us" className="link link-hover">
                About Us
              </Link>
            </div>

            <div className="flex flex-col gap-4"></div>
          </div>
        </div>

        <div className="flex-1">
          <h6 className="text-2xl font-bold text-[#FF4500]">Get Connected</h6>
          <div className="space-y-8">
            <h2 className=" flex items-center gap-2">
              <HiOutlineMail size={25} color="#FF4500" />
              <span>fayjulkarim2@gmail.com</span>
            </h2>
            <h2 className=" flex items-center gap-2">
              <FaPhoneAlt size={20} color="#FF4500" />
              <span>01721-880383</span>
            </h2>
            <h2 className=" flex  gap-2">
              <FiClock size={25} color="#FF4500" />
              <div>
                <p>Saturday to Wednesday: 9:00 AM – 6:00 PM </p>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
