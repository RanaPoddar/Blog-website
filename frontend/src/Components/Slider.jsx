import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "../App.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SliderData = [
    {
      img: "https://i0.wp.com/en.porndiff.com/tubes/stepmom-s-secret-threesome_poster_01.jpg?resize=1810%2C2560&ssl=1",
      title: "[BrazzersExxtra] Penny Barber (Dirty Divorcée Gets All Oiled Up 1)",
      description: "Penny Barber is a pissed off ex-wife who needs a little relief from battling her husband and his lawyers all day. A message will do the trick! Vince Karter’s strong hands are almost the"
    },
    {
      img: "https://i0.wp.com/en.porndiff.com/tubes/summer-manor_poster_01.jpg?resize=1810%2C2560&ssl=1",
      title: "[BrazzersExxtra] Penny Barber (Dirty Divorcée Gets All Oiled Up 2)",
      description: "Penny Barber is a pissed off ex-wife who needs a little relief from battling her husband and his lawyers all day. A message will do the trick! Vince Karter’s strong hands are almost the"
    },
    {
      img: "https://i0.wp.com/content.brazzfan.com/content/2022/11/11130834/Lucky-dudes-bang-a-teen-with-Natural-boobs-4.jpg?resize=1810%2C2560&ssl=1",
      title: "[BrazzersExxtra] Penny Barber (Dirty Divorcée Gets All Oiled Up 3)",
      description: "Penny Barber is a pissed off ex-wife who needs a little relief from battling her husband and his lawyers all day. A message will do the trick! Vince Karter’s strong hands are almost the"
    },
    {
      img: "https://i0.wp.com/en.porndiff.com/tubes/brawling-cuties-throw-bangers-and-get-banged_poster_01.jpg?resize=1810%2C2560&ssl=1",
      title: "[BrazzersExxtra] Penny Barber (Dirty Divorcée Gets All Oiled Up 4)",
      description: "Penny Barber is a pissed off ex-wife who needs a little relief from battling her husband and his lawyers all day. A message will do the trick! Vince Karter’s strong hands are almost the"
    }
  ]

function Slider() {
  return (


    <div className='flex justify-center w-full h-[55vw] lg:h-[45vh] px-4 lg:px-32 '>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
   
    {
      
      SliderData.map((d) => (
        <SwiperSlide>
        <Link key={d.title} to="https://www.google.com">
        <div className={`group relative w-full h-full text-white bg-cover bg-no-repeat bg-center cursor-pointer`} style={{'backgroundImage': `url(${d.img})`}}>
   <div className='fixed right-0 sm:w-[30%] md:w-[40%] lg:w-[30%] h-full bg-black bg-opacity-85 z-0 transition-all duration-400 ease-linear opacity-0 sm:group-hover:opacity-80 '>
    <div className='p-4 z-10'> 
    <h3 className='text-[#00b0e6] text-sm lg:text-[20px] font-bold'>{d.title}</h3>
    <p className='text-white text-xs md:text-sm mt-2 '>{d.description}</p>
    
    <div className='z-10'>
        <button className='bg-[#00b0e6] px-5 py-1 font-primary mt-10'> Watch </button>
    </div>
    </div>
   
   
   </div>
</div>
</Link>
 </SwiperSlide>
      ))
     
    }






{/* <span className='flex absolute bottom-4'>
<button className=' bg-white h-2 w-2 rounded-[100%] border-none outline-none my-0 mx-1 hover:cursor-pointer '></button>
<button className=' bg-white h-2 w-2 rounded-[100%] border-none outline-none my-0 mx-1 hover:cursor-pointer '></button>
<button className=' bg-white h-2 w-2 rounded-[100%] border-none outline-none my-0 mx-1 hover:cursor-pointer '></button>
</span> */}

   
    </Swiper>
    </div>
  )
}

export default Slider