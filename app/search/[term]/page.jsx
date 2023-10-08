'use client';
import Grid from "@/components/Grid/Grid";
import SearchResults from "@/components/SearchResults/SearchResults";
import axios from "axios";
import { useState, useEffect } from "react";


const page = ({params}) => {

  const { term } = params;
  


  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(term);

  useEffect(() => {
    const fetchSearch = async () => {
      setPosts([]);
    const response = await axios.get(
     `http://localhost:1337/api/posts?filters[title][$contains]=${search}&populate=thumbnail`
    );
 
    const data = await response.data.data;
    return setPosts(data);
   };
 
   const searchTimeout = setTimeout(() => {
    if (search.length > 0) return fetchSearch();
   }, 2000);
   return () => clearTimeout(searchTimeout);
  }, [search])


  return (
    <div  className="m-auto w-[1400px] p-6">
      <h3 className="text-2xl capitalize">search about  : {term}</h3>
    
      <Grid>

        <SearchResults posts={posts} />

      </Grid>
    
    
    </div>
  )
}

export default page