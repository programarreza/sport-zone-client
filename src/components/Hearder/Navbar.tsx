import Container from "../Container";
import NavbarLinks from "./NavLink";

const Navbar = () => {
  return (
    <div className="pt-4 bg-[#020228] text-white ">
      <Container>
        <div className="flex justify-between items-center">
          <div className=" w-full">logo area</div>

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
