import Image from 'next/image'
import PostItem from '../PostItem/PostItem'

const SearchResults = ({ posts }) => {
  console.log(posts)
  return (
    <>
    
      {posts.map((post) => <div key={post.id}>
      
        <Image src={`http://localhost:1337${post.attributes.thumbnail.data.attributes.url}`} width={1400} height={450} alt='' />
        <h2>{post.attributes.title}</h2>

        
    </div>)}
    
    </>
  )
}

export default SearchResults