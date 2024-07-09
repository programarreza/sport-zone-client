import Container from "../Container";
import NavbarLinks from "./NavLink";
import logo from "@/assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="pt-4 pb-2 bg-[#020228] text-white ">
      <Container>
        <div className="flex justify-between items-center">
          <div className=" w-full">
            <div className=" flex items-center gap-4">
              <img
                src={logo}
                alt=""
                className="rounded-full bg-white w-12 border"
              />
              <p className="text-3xl font-bold">sport zone</p>
            </div>
          </div>

          <div className=" w-full ">
            <NavbarLinks />
          </div>
        </div>
        <hr className="mt-4" />
      </Container>
    </div>
  );
};

export default Navbar;
