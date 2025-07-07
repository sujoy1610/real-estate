import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const location = useLocation();

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  // Dark mode setup
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Determine if we are on homepage
  const isHome = location.pathname === '/' || location.hash === '#Header';

  return (
    <header className={`${isHome ? 'absolute' : 'relative'} top-0 left-0 w-full z-50`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <a href="#Header" className="flex items-center gap-2 text-black dark:text-white text-xl font-bold">
          <img src={assets.logo} alt="Logo" className="w-10 h-10" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
          {['Home', 'About', 'Projects', 'Testimonials'].map((item, index) => (
            <a
              key={index}
              href={`/#${item}`}
              className="text-gray-800 dark:text-white hover:text-orange-500 transition"
            >
              {item}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 text-sm rounded bg-white text-gray-800 hover:bg-gray-200 transition"
          >
            {darkMode ? '☀ Light' : '🌙 Dark'}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setShowMobileMenu(true)} className="md:hidden">
          <img src={assets.menu_icon} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 transition-all duration-300 ${
          showMobileMenu ? 'block' : 'hidden'
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setShowMobileMenu(false)}>
            <img src={assets.cross_icon} alt="Close" className="w-6" />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6 text-white text-lg font-semibold">
          {['Home', 'About', 'Projects', 'Testimonials'].map((item, index) => (
            <a
              key={index}
              href={`/#${item}`}
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-orange-400"
            >
              {item}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setShowMobileMenu(false);
            }}
            className="mt-6 px-4 py-2 rounded bg-white text-gray-800 hover:bg-gray-200 text-sm"
          >
            {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
