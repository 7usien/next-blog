"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
 const router = useRouter();

 const [searchTerm, setSearchTerm] = useState("");

 const searchHandler = (e) => {
  const searchTimer = setTimeout(() => {
   if (e.target.value) {
    setSearchTerm(e.target.value);
   }
  }, 2000);

 };

  const searchSubmit = (e) => {

  e.preventDefault();
    if (searchTerm) {
    
      setTimeout(() => {
        router.push(`search/${searchTerm}`);

      }, 2000);

    }
 };

 return (
  <div className="search">
   <form
    onSubmit={(e) => {
     searchSubmit(e);
    }}>
    <input
     onChange={(e) => searchHandler(e)}
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
