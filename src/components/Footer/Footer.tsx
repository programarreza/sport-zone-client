import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <div className=" p-4 pt-12 md:p-3 md:pt-24 lg:p-12 xl:p-24 bg-[#020228] text-white shadow-2xl border-t-4 border-[#0B0B30] ">
      <div className="flex justify-between ">
        <div className="flex-1">
          <Link to={"/"} className="flex gap-2">
            <img className="size-12 " src={logo} />
            <p className="text-3xl font-semibold">sport zone</p>
          </Link>
          <p className="mr-12 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            minus autem doloribus suscipit porro et maiores inventore eius
            pariatur dolor.
          </p>
          <div className="flex gap-6 mt-12">
            <Link to="" className="link link-hover">
              <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]  ">
                <FaFacebookF />
              </p>
            </Link>
            <Link to="" className="link link-hover">
              <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]  ">
                <FaTwitter />
              </p>
            </Link>
            <Link to="" className="link link-hover">
              <p className="border p-2 block rounded-full hover:shadow-xl hover:shadow-[#f57c48]/50 hover:bg-[#f57c48] border-[#f57c48]">
                <FaLinkedinIn />
              </p>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <h6 className="text-2xl font-bold text-[#f57c48]">Quick Links</h6>
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
              <Link to="/manage-products" className="link link-hover">
                Manage products
              </Link>
            </div>

            <div className="flex flex-col gap-4"></div>
          </div>
        </div>

        <div className="flex-1">
          <h6 className="text-2xl font-bold text-[#f57c48]">Get Connected</h6>
          <div className="space-y-8">
            <Link to={""} className=" flex items-center gap-2">
              <HiOutlineMail size={25} color="#f57c48" />
              <span>programarreza@gmail.com</span>
            </Link>
            <Link to={""} className=" flex items-center gap-2">
              <FaPhoneAlt size={20} color="#f57c48" />
              <span>+8801754846487</span>
            </Link>
            <Link to={""} className=" flex  gap-2">
              <FiClock size={25} color="#f57c48" />
              <div>
                <p>Saturday to Wednesday: 9:00 AM – 6:00 PM </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
