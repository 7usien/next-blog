import Image from "next/image";

const page = async ({ params }) => {
 const { slug } = params;

 const fetchPage = async () => {
  const response = await fetch(
   `${process.env.NEXT_APP_pagesQuery_API}${slug}&[populate]=*`,
   {
    cache: "no-cache",
   }
  );
  return await response.json();
 };

 const { data } = await fetchPage();

 return (
  <>
   {data.map((page) => {
    return (
      <div key={page.id} className="w-[1400px] m-auto p-4">

 
{page.attributes.thumbnail.data.attributes.url ?   <Image className="w-full rounded-md shadow-lg max-h-[500px] object-cover "
       src={`http://localhost:1337${page.attributes.thumbnail.data.attributes.url}`}
       width={1600}
       height={500}
      /> : null}
    

      <h3 className="text-4xl capitalize py-4">{page.attributes.name}</h3>

      <p className="text-xl capitalize leading-6">{page.attributes.content}</p>
     </div>
    );
   })}
  </>
 );
};

export default page;
