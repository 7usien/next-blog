import Grid from "@/components/Grid/Grid";
import PostCategory from "@/components/PostCategory/PostCategory";

const page = async ({ params }) => {
 const { name } = params;

 const getCatPosts = async () => {
  const response = await fetch(
   `http://localhost:1337/api/posts?filters[post_category][name][$eq]=${name}&populate=thumbnail`
  );
  return await response.json();
 };

 const { data } = await getCatPosts();

 return (
  <div className="w-[1400px] m-auto py-6">
   <h3 className="text-center text-3xl mb-4">Category : {name}</h3>
   <Grid>
    {data.map((post) => {
     return <PostCategory key={post.id} {...post} />;
    })}
   </Grid>
  </div>
 );
};

export default page;
