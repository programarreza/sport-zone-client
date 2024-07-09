import Container from "../Container";
import Banner from "./Banner";

const Header = () => {
  return (
    <div className="bg-[#020228] min-h-screen w-full text-white">
      <Container>
        <Banner/>
      </Container>
    </div>
  );
};

export default Header;
