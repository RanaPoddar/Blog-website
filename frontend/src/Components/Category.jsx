import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Category(props) {
  return (
    <div className='px-4 lg:px-32'>
    <div className='relative h-10 rounded-sm w-full mb-[10px]'>
    <div className='h-full'>
    <span className='inline-flex items-center lg:px-5 lg:h-full lg:bg-primaryBlue-0 lg:text-white rounded-sm '><h2 className='text-base font-bold font-arial '> {props.category} </h2> &nbsp; &nbsp; <MdKeyboardDoubleArrowRight /></span>
    </div>
    <div className='absolute top-0 right-0 mt-[5px]'>
    <a href={`${props.link}`} className='text-base text-primaryBlue-0 flex items-center'>View more <MdKeyboardDoubleArrowRight /></a>
    </div>
    </div>
    </div>
  )
}

export default Category