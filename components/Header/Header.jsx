import Link from "next/link";
import {
 AiFillDownSquare,
 AiFillHome,
 AiFillInfoCircle,
 AiFillPhone,
 AiOutlineBlock,
} from "react-icons/ai";

const Header = async () => {
 const fetchCats = async () => {
  const response = await fetch(`${process.env.NEXT_APP_CATS_API}`, {
   cache: "no-cache",
  });
  return await response.json();
 };

 const fetchPages = async () => {
  const response = await fetch(`${process.env.NEXT_APP_PAGES_API}`, {
   cache: "no-cache",
  });
  return await response.json();
 };

 const cats = await fetchCats();
 const pages = await fetchPages();

 return (
  <div className="bg-slate-900 text-white capitalize sticky top-0 left-0 drop-shadow-lg z-50">
   <div className="w-full  flex items-center justify-between p-6">
    <Link href="/">
     <h3 className="text-orange-400 text-2xl font-bold flex items-center justify-center gap-1">
      <AiOutlineBlock />
      techy Blog
     </h3>
    </Link>

    <nav>
     <ul className="flex items-center gap-8 text-xl">
      <li>
       <Link href="/">
        <AiFillHome className="inline mr-1 align-middle" />
        home
       </Link>
      </li>
      <li className="relative group hover:cursor-pointer">
       <AiFillDownSquare className="inline mr-1 align-middle" />
       categories
       <div className="absolute opacity-0 bg-slate-900 mt-2 w-60  shadow-lg top-[50px] left-0 b group-hover:opacity-100 ">
        <ul>
         {cats.data.map((cat) => {
          return (
           <li className="px-4 py-2 border hover:bg-slate-950  " key={cat.id}>
            <Link href="" className="text-white hover:text-yellow-700">
             {cat.attributes.name}
            </Link>
           </li>
          );
         })}
        </ul>
       </div>
      </li>

      {pages.data.map((page) => (
       <li key={page.id}>
          <AiFillInfoCircle className="inline mr-1 align-middle" />
          <Link href={`/pages/${page.attributes.slug}`}>
            {page.attributes.name}
            </Link>
       </li>
      ))}
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
