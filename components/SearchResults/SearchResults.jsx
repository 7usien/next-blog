import Image from "next/image";

const SearchResults = ({ posts }) => {
 return (
  <>
   {posts.map((post) => (
    <div key={post.id} className="bg-white shadow-md relative">
     <Image className="w-full h-[350px] object-cover"
      src={`http://localhost:1337${post.attributes.thumbnail.data.attributes.url}`}
      width={1400}
      height={450}
      alt=""
     />
     <h2 className="w-full  absolute bottom-0 left-0 bg-slate-800 text-white p-3 text-xl">{post.attributes.title}</h2>
    </div>
   ))}
  </>
 );
};

export default SearchResults;
