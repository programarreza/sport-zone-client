import { useAppSelector } from "@/redux/hooks";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavbarLinks = () => {
  const { selectedItems } = useAppSelector((store) => store.cart);

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
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#f57c48] "
            : "hover:text-[#f57c48]"
        }
      >
        <div className="relative">
          <IoCartOutline size={30} />
          <span className="rounded-full absolute top-[-6px] left-[18px] bg-white text-black text-center size-4 font-bold flex items-center justify-center">
            {selectedItems}
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default NavbarLinks;
