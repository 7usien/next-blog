import React from "react";
import Image from "next/image";

const page = async ({ params }) => {
 const { slug } = params;

 const fetchPage = async () => {
  const response = await fetch(
   `${process.env.NEXT_APP_page_API}${slug}&[populate]=*`,
   {
    cache: "no-cache",
   }
  );
  return await response.json();
 };

 const page = await fetchPage();

 return (
  <div className="w-[1200px] m-auto p-6">
   {page.data.map((item) => (
    <div key={item.id} className="">
     <div className=" block relative">
      <span className="absolute top-1/2 right-1/2 text-white bg-yellow-700 p-3 shadow-lg rounded-sm z-50">
       {item.attributes.post_category.data.attributes.name}
      </span>
      <Image
       className="w-full max-h-[500px] object-cover overflow-hidden rounded-md shadow-lg"
       src={`http://localhost:1337${item.attributes.thumbnail.data.attributes.url}`}
       width={1600}
       height={400}
         />
         

         <div class="absolute inset-0 bg-gradient-to-t from-transparent to-black"></div>
     </div>

     <h3 className="text-4xl capitalize font-bold text-left py-4 ">
      {item.attributes.title}
     </h3>
     <p className="text-xl">{item.attributes.content}</p>
    </div>
   ))}
  </div>
 );
};

export default page;
