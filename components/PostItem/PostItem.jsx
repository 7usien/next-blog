import Image from "next/image";
import Link from "next/link";

const PostItem = ({ id, attributes, loading }) => {
 const { title, date, thumbnail, slug } = attributes;
 const cat = attributes.post_category.data.attributes.name;
 return (
  <div className=" bg-white shadow-md relative min-h-[340px] ">
   <span className="absolute top-2 left-2 bg-orange-400 p-2 text-white">
    {date}
   </span>
   <span className="absolute top-3 right-4 text-white">{cat}</span>
   {loading ? (
    <FaSpinner className="animate-spin m-auto" />
   ) : (
    <Image
     className="w-full"
     src={`http://localhost:1337${thumbnail.data.attributes.url}`}
     width={200}
     height={200}
     alt={`photo for ${title}`}
    />
   )}
   <h2 className="w-full capitalize  absolute bottom-0 left-0 bg-slate-800 text-white p-3 text-xl">
    {" "}
    <Link href={`/posts/${slug}`}>{title}</Link>
   </h2>
  </div>
 );
};

export default PostItem;
