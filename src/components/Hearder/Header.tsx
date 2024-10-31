import Container from "../Container";
import Banner from "./Banner";

const Header = () => {
  return (
    <div className=" min-h-screen w-full text-white">
      <Container>
        <Banner/>
      </Container>
    </div>
  );
};

export default Header;
