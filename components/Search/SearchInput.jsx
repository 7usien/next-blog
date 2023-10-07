"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const SearchInput = () => {
 const [search, setSearch] = useState("");
 const [posts, setPosts] = useState([]);

 useEffect(() => {
  const fetchSearch = async () => {
   const response = await axios.get(
    `http://localhost:1337/api/posts?filters[title][$contains]=${search}&populate=thumbnail`
   );

   const data = await response.data.data;
   return setPosts(data);
   };
   
   const searchTimeout = setTimeout(() => { 
     
    if(search.length > 0) return  fetchSearch();
   }, 2000);
   return () => clearTimeout(searchTimeout);

 }, [search]);
  
  console.log(posts)

 return (
  <div className="search">
   <form>
    <input
     onChange={(e) => setSearch(e.target.value)}
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
