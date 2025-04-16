import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonails = () => {
  return (
    <div className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id='Testimonails'>
        <h1 className="text-center text-2xl sm:text-4xl font-bold mb-2">Customer <span className="underline underline-offset-4 font-light">Testimonails</span> </h1>
        <p className="text-center text-gray-500 mb-12 ">Real stories from those who found home with us</p>

        <div className="flex flex-wrap justify-center gap-7">
            {testimonialsData.map((testimonails,index)=>(
                <div key={index} className=" max-w-[340px] bg-gradient-to-br from-white to-gray-100 border border-white/20 shadow-2xl rounded-2xl px-6 py-10 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">

                    <img src={testimonails.image} alt="" className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-md"/>
                    <h2 className="text-2xl font-semibold text-gray-800">{testimonails.name}</h2>
                    <p className="text-gray-500 text-sm mb-4">{testimonails.title}</p>


                    <div className="flex justify-center gap-1 mb-5">
                        {Array.from({length: testimonails.rating},(item,index)=>(
                            <img key={index} src={assets.star_icon} className="w-5 h-5"/>
                        ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{testimonails.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonails
