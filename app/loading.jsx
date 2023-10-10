import { FaSpinner } from "react-icons/fa";

const loading = () => {
 return (
  <div className="text-center m-auto text-8xl flex items-center content-center">
   <FaSpinner className="animate-spin" />
  </div>
 );
};

export default loading;
