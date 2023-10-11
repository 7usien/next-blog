import { FaSpinner } from "react-icons/fa";

const loading = () => {
 return (
  <div className="text-center m-auto text-8xl flex items-center content-center w-full min-h-screen  ">
   <FaSpinner className="animate-spin m-auto" />
  </div>
 );
};

export default loading;
