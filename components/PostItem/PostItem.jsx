import Image from 'next/image'


const PostItem = ({id, attributes}) => {
  
  const { title, content, date, thumbnail } = attributes;
  return (
    <div>
      <Image src={`http://localhost:1337${thumbnail.data.attributes.url}`} width={200} height={200} />
      
      {title}</div>
  )
}

export default PostItem