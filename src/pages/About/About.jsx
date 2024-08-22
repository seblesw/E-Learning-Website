import React from 'react';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 hidden dark:block"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Side - Text Content */}
          <div className="relative z-10 py-16 sm:py-24 md:py-28 lg:py-32 xl:py-40 flex items-center">
            <main className="mx-auto max-w-7xl px-3 sm:px-4 md:px-10 lg:px-12">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-xl tracking-tight font-bold text-gray-800 dark:text-gray-100 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline font-serif">About Our Company</span>
                  <span className="block text-yellow-400 xl:inline font-serif"> Your Success, Our Commitment</span>
                </h1>
                <p className="font-serif mt-5 text-base text-gray-700 dark:text-gray-300 sm:mt-6 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0">
                  We are dedicated to providing exceptional service and quality solutions. With a history of innovation and a team of experts, we are committed to your success.
                </p>
              </div>
            </main>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative lg:col-span-1">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover rounded-xl shadow-lg"
                src="assets/hero/company.jpg"
                alt="Company Office"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500 dark:to-teal-600 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Content */}
      <div className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-yellow-400 font-semibold tracking-wide uppercase font-serif">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl font-serif">
              Excellence in every aspect
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-700 dark:text-gray-300 lg:mx-auto font-serif">
              We strive to exceed expectations through our innovative solutions and unwavering commitment to quality.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 4h-1v-4h-1m4 4h-1v-4h-1M12 20h.01M9 20h.01M15 20h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-800 dark:text-gray-100 font-serif">Innovation</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-700 dark:text-gray-300 font-serif">
                  We constantly innovate to provide the most efficient and effective solutions to our clients.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h.01M9 20h.01M15 20h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-800 dark:text-gray-100 font-serif">Customer Focus</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-700 dark:text-gray-300 font-serif">
                  Our clients are at the heart of everything we do, and we strive to exceed their expectations every day.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h.01M9 20h.01M15 20h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-800 dark:text-gray-100 font-serif">Quality Assurance</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-700 dark:text-gray-300 font-serif">
                  We adhere to the highest standards to ensure that our services and solutions meet your needs.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h.01M9 20h.01M15 20h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-800 dark:text-gray-100 font-serif">Team Excellence</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-700 dark:text-gray-300 font-serif">
                  Our team of experts is dedicated to delivering the best possible outcomes for our clients.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
