import React from 'react'
import { Link } from 'react-router-dom';
function Card({blogs , currentPage, selectedCategory, pageSize}) {


const FilteredBlogs = blogs
.filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
.slice((currentPage - 1)*pageSize , currentPage * pageSize)
;
// console.log(FilteredBlogs);
  return (
    <>

    <div className='grid items-stretch grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6'>
    {
      FilteredBlogs.map((blogs) => 
        <Link className='grid' to={`/blogs/${blogs.id}`}  key={blogs.id}>
        <div className='group h-full grid relative shadow-xl rounded-lg border-2 border-gray-400 hover:border-2 hover:border-primaryBlue-0 transition-all duration-100 ease-in cursor-pointer '>
    <div className=' '>
<img className='rounded-t-lg' src={blogs.image}/>
    </div>
    <div className=' p-5 mx-auto'>
<h3 className='text-base font-bold mx-auto text-primaryBlue-0'> {blogs.title} </h3>
    </div>

{/* Hover blur effet */}
<div className='h-full w-full rounded-lg bg-black bg-opacity-50 absolute flex justify-center items-center opacity-0 z-10 group-hover:opacity-100  '>
<button className='bg-[#00b0e6] text-white px-5 py-1 font-primary mt-10'> Watch </button>
</div>
    </div>

    </Link>)
    }
    
   
  </div>  
    </>
  )
}

export default Card