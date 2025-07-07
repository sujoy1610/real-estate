import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 pt-16 pb-10 px-6 lg:px-24 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-gray-900 dark:text-white text-2xl font-bold flex items-center gap-2 mb-4">
            <span className="text-blue-500 text-3xl">⚡</span> Estate
          </h2>
          <p className="text-sm leading-relaxed">
            Discover premium properties, trusted by clients across the region.
          </p>
          <div className="flex gap-4 mt-6 text-gray-700 dark:text-white text-lg">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#Header" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a></li>
            <li><a href="#About" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#contacts" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Support</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Subscribe</h3>
          <form className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 w-full sm:w-auto transition"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <p className="text-center text-sm mt-12 text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Estate. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
