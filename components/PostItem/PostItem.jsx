import Image from 'next/image'
import Link from 'next/link';


const PostItem = ({id, attributes}) => {
  
  const { title, date, thumbnail } = attributes;
  const cat = attributes.post_category.data.attributes.name;
  return (
    <div className=' bg-white shadow-md relative'>
      <span className='absolute top-2 left-2 bg-orange-400 p-2 text-white'>{date}</span>
      <span className='absolute top-3 right-4 text-white'>
      {cat}
      </span>
      <Image className='w-full' src={`http://localhost:1337${thumbnail.data.attributes.url}`} width={200} height={200} />
      <h2> <Link href={""}>{title}</Link></h2>
     </div>
  )
}

export default PostItem