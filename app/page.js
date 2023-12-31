"use client";

import { useEffect, useState } from "react";

import Grid from "@/components/Grid/Grid";
import PostItem from "@/components/PostItem/PostItem";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";



 

export default function Home() {
 const [myposts, setMyPosts] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(true);


  
 useEffect(() => {
  const fetchPosts = async () => {
   try {
    const response = await axios.get(
     `http://localhost:1337/api/posts?populate=thumbnail,post_category&pagination[page]=${currentPage}&pagination[pageSize]=6`
    );
    const { data } = await response.data;

     setPageCount(response.data.meta.pagination.pageCount);
     setLoading(false);
    setMyPosts(data);
   } catch (error) {
    console.log(error);
   }
  };

  fetchPosts();
 }, [currentPage]);

 const paginationHandler = (i) => {
   setCurrentPage(i + 1);
    
 };

 return (
   <main className="w-[1400px] m-auto p-4">
     

{loading ?  <div className="text-center m-auto text-8xl flex items-center content-center w-full min-h-screen  ">
   <FaSpinner className="animate-spin m-auto" />
  </div> : 

   <Grid count={4}>
    {myposts.map((post) => (
     <PostItem key={post.id} loading={loading} {...post} />
    ))}
   </Grid>
  }
   <div className="flex justify-center items-center gap-3 my-4">
    {Array.from({ length: pageCount }, (_, i) => (
     <button
      className={`bg-slate-800 text-white p-2 px-3 rounded-sm drop-shadow-lg ${currentPage-1 === i ? "bg-yellow-600" : ""} `}
      key={i}
      onClick={() => paginationHandler(i)}>
      {i + 1}
     </button>
    ))}
   </div>
  </main>
 );
}
