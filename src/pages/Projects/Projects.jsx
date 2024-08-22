import React from 'react';
import Footer from '../../components/Footer/Footer';

const Projects = () => {
  return (
    <div>
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Our Projects</h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">We have successfully completed a variety of projects. Here’s a glimpse of what we’ve achieved.</p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col bg-white p-8 rounded-lg shadow">
            <h3 className="mt-6 text-lg font-semibold text-gray-900">Project One</h3>
            <p className="mt-4 text-base text-gray-500">Description of Project One.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>

  );
}

export default Projects;
