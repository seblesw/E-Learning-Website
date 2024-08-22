import React from 'react';

const Home = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-400 via-teal-400 to-green-400">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-white">Welcome to Your Company</h1>
          <p className="mt-4 text-xl leading-8 text-blue-100">We provide top-notch services to help your business succeed.</p>
          <a
            href="#services"
            className="mt-8 inline-block bg-white border border-transparent rounded-full py-3 px-10 text-base font-medium text-blue-600 hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-lg"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center">Our Services</h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 text-center">We offer a wide range of services to meet your needs.</p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  {/* Icon */}
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a2 2 0 012-2h1.5a2 2 0 011.992 1.771L8.5 4v1.172a4 4 0 002.414 3.705l2.083 1.043a4 4 0 002.087 0l2.083-1.043A4 4 0 0021.5 5.172V4h.5a2 2 0 012 2v12a2 2 0 01-2 2H17.5a2 2 0 01-2-2v-1.172a4 4 0 00-2.414-3.705l-2.083-1.043a4 4 0 00-2.087 0l-2.083 1.043A4 4 0 005.5 17.828V19a2 2 0 01-2 2H2.5a2 2 0 01-2-2V6a2 2 0 012-2h.5z"></path></svg>
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-800">Service One</h3>
              <p className="mt-4 text-base text-gray-600">Description of Service One.</p>
            </div>
            {/* Add more service cards as needed */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;