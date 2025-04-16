import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover flex items-center w-full overflow-hidden md:bg-cover sm:bg-cover" style={{backgroundImage: "url('/header_img.jpg')"}} id='Header'>
        <Navbar/>
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white drop-shadow-lg">
          <h2 className="text-4xl sm:text-6xl md:text-[70px] inline-block max-w-3xl font-semibold">Discover a place
          you'll love to live</h2>
          <div className="space-x-6 mt-16">
            <a href="#Projects" className="border rounded border-white px-8 py-3">Projects</a>
            <a href="#contacts" className="bg-blue-500  rounded px-8 py-3">Contact us</a>
          </div>
        </div>
      
    </div>
  )
}

export default Header
