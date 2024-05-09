import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import "../App.css"
import { FaSearch } from "react-icons/fa";

function Navbar() {

    const [isMenuOpen , setIsMenuOpen] = useState(false);
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
}

const [isSearchOpen , setIsSearchOpen] = useState(false);
const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
}

const navItems = [
    {path: "/celebrities" , link : "celebrities"},
    {path: "/uncut" , link : "uncut videos"},
    {path: "/stories" , link : "stories"},
    {path: "/web-series" , link : "web series"},
    {path: "/ullu" , link : "ullu"},
    {path: "/best" , link : "all time best"},
    {path: "/18-movies" , link : "18+ movies"},
    {path: "/latest" , link : "latest news"},
]

// Modal details
const openModal = () => {
    setIsMenuOpen(true);
}
const closeModal = () => {
    setIsMenuOpen(false);
}

  return (
   <>
<header className='bg-white fixed top-0 left-0 right-0 shadow-md md:shadow-lg z-30 '>
    <nav className='px-4 py-4  max-w-7xl mx-auto flex justify-between items-center'>

{/* Search icon for small devices */}
<div>
<button onClick={toggleSearch} className='cursor-pointer md:hidden '><FaSearch className='w-5 h-5'/></button>
    
</div>

        <a href='#' className='text-xl font-bold text-black'>Watch<span>O</span><span className='text-primaryBlue-0  uppercase'>movies</span></a>
   
   {/* Navitems for lg devices */}
   <ul className='hidden md:flex gap-4 text-[16px] uppercase font-primary'>
    {navItems.map(({path , link}) => 
    <li className='text-black hover:text-primaryBlue-0 ' key={path}>
        <NavLink 
        className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
        to={path}>{link}</NavLink>
    </li>
    )}
   </ul>
   {/* Search section */}
   <div className='hidden md:block mt-1 '>
       <fieldset className='relative text-primaryBlue-0  h-10 w-72  '>
       <input className='bg-dark2 border border-gray-300 py-[6px] pl-3 pr-10 w-full text-sm focus:outline-none' type='search' placeholder='Search ...' />
       <button type='submit' className='absolute right-0 top-0 mt-3 mr-4'>
       <FaSearch />
       </button>
       </fieldset>
</div>


{/* mobile menu btn , display mobile screen */}
<div className='text-black md:hidden'>
    <button onClick={toggleMenu} className='cursor-pointer '>{isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>}</button>
</div>
    </nav>
{/* Menu items only for small devices */}
<div>
<ul className={`md:hidden gap-12 block space-y-4 text-lg px-4 py-6 bg-white w-full ${isMenuOpen ? "fixed left-0 right-0 transition-all duration-300 ease-out" : "hidden"}`}>
    {navItems.map(({path , link}) => 
    <li className='text-black capitalize ' key={path}>
        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
    </li>
    )}
   </ul>  
</div>


{/* Search Section for small devices */}
<div className={`bg-white md:hidden block px-4 pt-1 pb-3 mt-1  w-full transition-all duration-300 ease-in-out ${isSearchOpen ? "fixed" : "hidden"}`}>
       <fieldset className='relative text-primaryBlue-0  h-10 w-full  '>
       <input className='bg-dark2 border border-gray-300 py-[6px] pl-3 pr-10 w-full text-sm focus:outline-none' type='search' placeholder='Search ...' />
       <button type='submit' className='absolute right-0 top-0 mt-3 mr-4'>
       <FaSearch />
       </button>
       </fieldset>
</div>

</header>
   </>
  )
}

export default Navbar