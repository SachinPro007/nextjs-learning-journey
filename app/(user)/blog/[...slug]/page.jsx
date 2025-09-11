import React from 'react'

async function BlogPost({params}) {

  const {slug} = await params
  console.log(slug);
  
  return (
    <div className='bg-gray-300'>
      {slug.map((post, i) => (
        <span key={i}>{i !== 0 ? ` - ${post} ` : post}</span>
      ))}
    </div>
  )
}

export default BlogPost