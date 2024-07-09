import { NavLink } from "react-router-dom";

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
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#f57c48] "
            : "hover:text-[#f57c48]"
        }
      >
        Cart
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
    </div>
  );
};

export default NavbarLinks;
