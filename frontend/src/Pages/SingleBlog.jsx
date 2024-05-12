import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Banner from '../Components/Banner';

const SingleBlog = () => {
const data = useLoaderData();
const {image,thambnail , title, starring, category, published_date, content, country, tags, duration } = data[0];

  return (
    <>
    <div className='mt-20'>
    <div className=' py-3 px-4'>
  <Banner/>
   </div>
<div className='px-4 py-3 lg:px-32'>
  <div className='px-4 py-4 h-[42vh] lg:h-[80vh] '>
<img className='w-full h-full' src={thambnail}/>
   </div>

{/* Content here */}
   <div className='content bg-gray-200 p-5 flex'>
<div className='mr-5'>
  <img src={image} className='h-[210px] w-[140px] hidden md:block'/>
</div>
<div className='w-full md:w-1/2'>
  <h2 className='text-xl font-bold mb-3'>{title}</h2>
  <p className='text-xs text-gray-500 mb-3'>{content}</p>
  {/* Genre Category duration etc container */}
  <div className='md:flex md:flex-row flex-col'>
  {/* left side div */}
  <div className='left-side-div w-1/2 mr-2'>
<h5 className='text-sm font-bold mb-1'>Category : <a className='text-primaryBlue-0 font-medium' href='#'>{category}</a> </h5>
<h5 className='text-sm font-bold mb-1'>Actors : <a className='text-primaryBlue-0 font-medium' href='#'>{starring}</a> </h5>
<h5 className='text-sm font-bold mb-1'>Country : <a className='text-primaryBlue-0 font-medium' href='#'>{country}</a> </h5>

</div>

 {/* right side div */}
<div className='right-side-div w-1/2'>
<h5 className='text-sm font-bold mb-1'>Duration : <a className='text-primaryBlue-0 font-medium'>{duration}</a> </h5>
<h5 className='text-sm font-bold mb-1'>Tags : <a className='text-primaryBlue-0 font-medium' href='#'>{tags}</a> </h5>
<h5 className='text-sm font-bold mb-1'> Date : <a className='text-primaryBlue-0 font-medium' href='#'>{published_date}</a> </h5>


</div>
  </div>


</div>
   </div>
</div>
</div>
    </>
   
  )
}

export default SingleBlog