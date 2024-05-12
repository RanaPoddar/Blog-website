import React from 'react'
import Slider from '../Components/Slider'
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import Content from '../Components/Content'
import Category from '../Components/Category'


function Home() {
  return (
    <div className='mt-20 z-0'>
        <Slider/>
        <Banner/>
        
        <Content/>
    </div>
  )
}

export default Home