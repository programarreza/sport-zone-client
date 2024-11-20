import logo from "@/assets/images/logo2.png";
import Container from "../Container";
import NavbarMenu from "./NavbarMenu";
import NavbarLinks from "./NavLink";

const Navbar = () => {
  return (
    <div className="pt-4  bg-[#FF4500] text-white ">
      <Container>
        <div className="flex justify-between items-center ">
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

          <div className="hidden md:flex w-full justify-end">
            <NavbarLinks />
          </div>

          {/* mobile device navbarlink */}
          <div className="flex md:hidden w-full justify-end">
            <NavbarMenu />
          </div>
        </div>
        <hr className="mt-4 " />
      </Container>
    </div>
  );
};

export default Navbar;
