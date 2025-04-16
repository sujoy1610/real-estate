import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className="flex items-center justify-center flex-col container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id='About'>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 decoration-5 font-light text-orange-500">Our Brand</span> </h1>
            <p className="text-gray-500 font-semibold">Passionate About Properties, Dedicated to Your Vision</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg"/>
                <div className="flex flex-col items-center md:items-start mt-10 text-orange-400">
                    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        <div>
                            <p className="text-4xl font-medium text-gray-700">10+</p>
                            <p>years of Excellence</p>
                        </div>


                        <div>
                            <p className="text-4xl font-medium text-gray-700">12+</p>
                            <p>Projects Completed</p>
                        </div>

                        <div>
                            <p className="text-4xl font-medium text-gray-700">20+</p>
                            <p>Mn. sq. Ft. Deliverd</p>
                        </div>

                        <div>
                            <p className="text-4xl font-medium text-gray-700">25+</p>
                            <p>Ongoing Projects</p>
                        </div>  
                    </div>
                    <p className="my-10 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellendus quod dolor distinctio minima, libero fugiat assumenda eum sequi a optio aut voluptates provident tempora aperiam harum quisquam hic exercitationem ea culpa facere? Placeat tempora corrupti impedit quaerat, similique tempore voluptatum. Molestias aut sapiente nemo atque quae cum earum iste.</p>
                    <button className="bg-blue-600 text-white px-8 py-2 rounded  ">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About
