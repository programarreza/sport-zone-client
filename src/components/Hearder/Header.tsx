import Container from "../Container";
import Banner from "./Banner";

const Header = () => {
  return (
    <div className=" min-h-[560px] w-full ">
      <Container>
        <Banner />
      </Container>
    </div>
  );
};

export default Header;
