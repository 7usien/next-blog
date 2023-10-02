import PostItem from "@/components/PostItem/PostItem";

export default async function Home() {
 const fetchData = async () => {
  const response = await fetch(`${process.env.NEXT_APP_POSTS_API}`);
  const data = await response.json();

  if (!response.ok) {
   throw new Error(data.message || "Something went wrong!");
  }

  return data;
 };

 const { data } = await fetchData();
 console.log(data);

 return (
  <main className="w-[1400px] m-auto p-4">
   {data.map((post) => (
    <PostItem key={post.id} {...post} />
   ))}
  </main>
 );
}
