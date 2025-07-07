import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <motion.section
      id="About"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full px-6 py-20 md:px-20 lg:px-32 bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          About{' '}
          <span className="underline underline-offset-4 decoration-4 text-orange-500 font-light">
            Our Brand
          </span>
        </h2>
        <p className="text-gray-500 dark:text-gray-300 font-medium mb-12">
          Passionate About Properties, Dedicated to Your Vision
        </p>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <motion.img
            src={assets.brand_img}
            alt="Brand"
            className="w-full max-w-md rounded-xl shadow-xl object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Stats + Description */}
          <motion.div
            className="text-left md:text-start text-orange-500"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-6 text-center md:text-left">
              <div>
                <p className="text-4xl font-semibold text-gray-800 dark:text-white">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-gray-800 dark:text-white">12+</p>
                <p className="text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-gray-800 dark:text-white">20+</p>
                <p className="text-sm">Mn. sq. ft. Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-gray-800 dark:text-white">25+</p>
                <p className="text-sm">Ongoing Projects</p>
              </div>
            </div>

            <p className="mt-10 max-w-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We are a team of passionate professionals delivering top-tier real estate projects
              designed to inspire, transform, and elevate lifestyles.
            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
