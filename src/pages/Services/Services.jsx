import React from 'react';

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">Explore the wide range of services we offer, each tailored to meet the unique needs of our clients.</p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Service Card */}
          <div className="flex flex-col bg-gray-100 p-8 rounded-lg shadow">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                {/* Icon */}
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a2 2 0 012-2h1.5a2 2 0 011.992 1.771L8.5 4v1.172a4 4 0 002.414 3.705l2.083 1.043a4 4 0 002.087 0l2.083-1.043A4 4 0 0021.5 5.172V4h.5a2 2 0 012 2v12a2 2 0 01-2 2H17.5a2 2 0 01-2-2v-1.172a4 4 0 00-2.414-3.705l-2.083-1.043a4 4 0 00-2.087 0l-2.083 1.043A4 4 0 005.5 17.828V19a2 2 0 01-2 2H2.5a2 2 0 01-2-2V6a2 2 0 012-2h.5z"></path></svg>
              </span>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">Service One</h3>
            <p className="mt-4 text-base text-gray-500">Description of Service One.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
