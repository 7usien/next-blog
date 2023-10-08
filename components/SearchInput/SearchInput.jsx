"use client";

import { useRouter } from 'next/navigation'
import {  useState } from "react";

const SearchInput = () => {
  const router = useRouter()


 const [searchTerm, setSearchTerm] = useState("");

 ;

  
  const searchHandler = (e) => {
    e.preventDefault()
    router.push(`search/${searchTerm}`);
    
  }

 return (
  <div className="search">
   <form onSubmit={(e)=>{searchHandler(e)}}>
    <input
     onChange={(e) => setSearchTerm(e.target.value)}
     type="text"
     className="p-2 text-black"
     placeholder="search a blog .."
    />
    <button className="bg-slate-700 p-2">search</button>
   </form>
  </div>
 );
};

export default SearchInput;
