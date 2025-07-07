import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../assets/assets';

const Projects = () => {
  const [filterType, setFilterType] = useState('All');

  const filteredProjects =
    filterType === 'All'
      ? projectsData
      : projectsData.filter((project) => project.type === filterType);

  const uniqueTypes = ['All', ...new Set(projectsData.map((item) => item.type))];

  return (
    <section
      id="Projects"
      className="w-full px-6 py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 lg:px-32"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Featured{' '}
          <span className="underline underline-offset-4 font-light">
            Properties
          </span>
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-12">
          Explore our latest real estate listings.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {uniqueTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-full border transition ${
                filterType === type
                  ? 'bg-blue-600 text-white'
                  : 'border-gray-300 text-gray-600 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <Link to={`/property/${index}`} key={index} className="block">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                    {project.location}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {project.type}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold">
                    {project.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
