import { Content } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link';



const PostCategory = ({id, attributes}) => {

  const { title, date, thumbnail, slug, content } = attributes;
  
  return (
    <div className=' bg-white shadow-md relative '>
      <span className='absolute top-2 left-2 bg-orange-400 p-2 text-white'>{date}</span>
   
      <Image className='w-full max-h-[300px] object-cover' src={`http://localhost:1337${thumbnail.data.attributes.url}`} width={400} height={300} />
      <h2 className='w-full  absolute bottom-0 left-0 bg-slate-800 text-white p-3 text-xl'> <Link href={`/posts/${slug}`}>{title}</Link></h2>

     </div>
  )
}

export default PostCategory