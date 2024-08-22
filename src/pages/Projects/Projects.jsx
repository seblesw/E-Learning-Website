import React from 'react';
import Footer from '../../components/Footer/Footer';

const Projects = () => {
  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <header className="relative bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 hidden dark:block"></div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
            Our Projects
          </h1>
          <p className="mt-4 text-xl leading-8 text-gray-700 dark:text-gray-300 font-serif max-w-2xl mx-auto">
            A showcase of the successful projects we’ve completed.
          </p>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Project One',
                description: 'Description of Project One.',
              },
              {
                title: 'Project Two',
                description: 'Description of Project Two.',
              },
              {
                title: 'Project Three',
                description: 'Description of Project Three.',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 dark:bg-teal-600 text-white mb-6 shadow-lg">
                  {/* You can replace this with an actual icon or image related to the project */}
                  <span className="text-2xl font-bold">P{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-blue-500 dark:to-teal-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Projects;
