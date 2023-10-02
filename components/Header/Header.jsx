import {
 AiFillDownSquare,
 AiFillHome,
 AiFillInfoCircle,
 AiFillPhone,
 AiOutlineBlock,
} from "react-icons/ai";

const Header = () => {
 return (
  <div className="bg-slate-900 text-white capitalize sticky shadow-md">
   <div className="w-full  flex items-center justify-between p-6">
    <h3 className="text-orange-400 text-2xl font-bold flex items-center justify-center gap-1">
     <AiOutlineBlock />
     techy Blog
    </h3>

    <nav>
     <ul className="flex items-center gap-8 text-xl">
      <li>
       <AiFillHome className="inline mr-1 align-middle" />
       home
      </li>
      <li>
       <AiFillDownSquare className="inline mr-1 align-middle" />
       categories
      </li>
      <li>
       <AiFillInfoCircle className="inline mr-1 align-middle" />
       about
      </li>
      <li>
       <AiFillPhone className="inline mr-1 align-middle" />
       contact
      </li>
     </ul>
    </nav>

    <div className="search">
     <input type="text" className="p-2" placeholder="search a blog .." />
     <button className="bg-slate-700 p-2">search</button>
    </div>
   </div>
  </div>
 );
};

export default Header;
