import { ImSpinner6 } from "react-icons/im";

const LoadingSection = () => {
  return (
    <div className="min-h-[70vh] bg-black/10  inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      <ImSpinner6 size={40} className="animate-spin m-auto " />
    </div>
  );
};

export default LoadingSection;
