import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <section
      id="Header"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/header_img.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Navbar */}
      <Navbar />

      {/* Animated Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-[64px] font-semibold leading-tight max-w-3xl mx-auto"
        >
          Discover a place you'll love to live
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
          <a
            href="#contacts"
            className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
