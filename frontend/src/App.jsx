import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='z-30'>
    <Navbar/>
    </div>
       <Outlet/>
    </>
  )
}

export default App