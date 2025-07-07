import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../assets/assets';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = projectsData[id];

  if (!property)
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
          <p className="text-xl">Property Not Found</p>
        </div>
        <Footer />
      </div>
    );

  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-blue-600 dark:text-blue-400"
          >
            ← Back
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={property.image}
              alt={property.title}
              className="w-full md:w-1/2 rounded-xl shadow-xl"
            />
            <div>
              <h2 className="text-3xl font-bold mb-2">{property.title}</h2>
              <p className="text-gray-500 dark:text-gray-300">{property.location}</p>
              <p className="text-lg mt-4 font-semibold text-blue-600 dark:text-blue-400">
                {property.price}
              </p>
              <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus nulla at
                tincidunt cursus. Mauris id nulla sit amet leo fermentum egestas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
