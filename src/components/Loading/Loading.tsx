import { ImSpinner6 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="mt-24 h-[80vh] bg-black/10 fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      <ImSpinner6 size={40} className="animate-spin m-auto " />
    </div>
  );
};

export default Loading;
