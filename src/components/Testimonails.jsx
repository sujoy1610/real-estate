import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section
      id="Testimonials"
      className="w-full px-6 py-20 bg-white text-gray-800 dark:bg-gray-950 dark:text-white transition-all duration-300 lg:px-32"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Customer{' '}
          <span className="underline underline-offset-4 font-light text-orange-500">
            Testimonials
          </span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12">
          Real stories from those who found a home with us.
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
            hidden: {},
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl px-6 py-10 max-w-xs text-center transition-transform duration-300 hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {testimonial.title}
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <img
                    key={i}
                    src={assets.star_icon}
                    alt="Star"
                    className="w-5 h-5"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
