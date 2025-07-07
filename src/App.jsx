import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonails from './components/Testimonails';
import PropertyDetails from './pages/PropertyDetails';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div
      className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <About />
                <Projects />
                <Testimonails />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </motion.div>
  );
};

export default App;
