import { ImSpinner6 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="min-h-screen bg-black/10 fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      <ImSpinner6 size={40} className="animate-spin m-auto text-white" />
    </div>
  );
};

export default Loading;
