import React from 'react'

function Card(props) {
  return (
    <>
    <div className='group relative grid shadow-xl rounded-lg hover:border-2 hover:border-primaryBlue-0 transition-all duration-100 ease-in cursor-pointer '>
    <div className=' '>
<img className='rounded-t-lg' src={props.src}/>
    </div>
    <div className='group-hover:p-4 p-5 mx-auto'>
<h3 className='text-base font-semibold mx-auto '>{props.title}</h3>
    </div>

{/* Hover blur effet */}
<div className='h-full w-full rounded-lg bg-black bg-opacity-50 absolute flex justify-center items-center opacity-0 z-10 group-hover:opacity-100  '>
<button className='bg-[#00b0e6] text-white px-5 py-1 font-primary mt-10'> Watch </button>
</div>
    </div>
    
    </>
  )
}

export default Card