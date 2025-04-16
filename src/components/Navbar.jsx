import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(()=>{
    if (showMobileMenu) {
      document.body.style.overflow= 'hidden'
    }
    else{
      document.body.style.overflow= 'auto'
    }
    return ()=>{
      document.body.style.overflow= 'auto'
    }
  },[showMobileMenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-6 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#Testimonails" className="cursor-pointer hover:text-gray-400">Testimonails</a>
        </ul>
        {/* adding onclick function so when its clicked open the the menu items */}
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} alt="" className="md:hidden w-7 cursor-pointer" />
      </div>
      {/* ------------- mobile-menu---------- */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 shadow-lg transition-all duration-300 ease-in-out z-50 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  `}>
        {/* ternariy operator */}
        <div className="flex justify-end p-6 cursor-pointer">
          {/* this is for cross icon */}
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} alt="" className="w-6" />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-6 px-6 text-lg font-semibold">
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-6 py-3 inline-block rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-sm w-full text-center">Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-6 py-3 inline-block rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-sm w-full text-center">About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-6 py-3 inline-block rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-sm w-full text-center">Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonails" className="px-6 py-3 inline-block rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-sm w-full text-center">Tesstimonials</a>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
