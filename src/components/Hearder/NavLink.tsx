import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const NavbarLinks = () => {
  return (
    <div className="flex gap-8 ">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#f57c48] hover:text-[#f57c48]"
            : "hover:text-[#f57c48]"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#f57c48] hover:text-[#f57c48]"
            : "hover:text-[#f57c48]"
        }
      >
        All Products
      </NavLink>
      <NavLink
        to="/manage-products"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#f57c48] "
            : "hover:text-[#f57c48]"
        }
      >
        Manage Products
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#f57c48] "
            : "hover:text-[#f57c48]"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#f57c48] "
            : "hover:text-[#f57c48]"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#f57c48] "
            : "hover:text-[#f57c48]"
        }
      >
        <IoCartOutline size={30} />
      </NavLink>
    </div>
  );
};

export default NavbarLinks;
