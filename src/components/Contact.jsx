import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', '293e31b4-c9fe-4da5-926e-7fc0fa861e97');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('');
      alert('Form submitted successfully');
      event.target.reset();
    } else {
      console.error('Error', data);
      alert(data.message);
      setResult('');
    }
  };

  return (
    <motion.section
      id="contacts"
      className="w-full px-6 py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300 lg:px-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Contact{' '}
          <span className="underline underline-offset-4 font-light">
            With Us
          </span>
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-12">
          Ready to make a move? Let's build your future together.
        </p>

        <motion.form
          onSubmit={onSubmit}
          className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Grid Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-left text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-left text-gray-700 dark:text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Inquiry about services"
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-left text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message here..."
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            {result ? result : 'Send Message'}
          </button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
