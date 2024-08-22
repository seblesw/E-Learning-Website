import React from 'react';
import { Briefcase, Code, BarChart2 } from 'react-feather'; // Import the icons
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <header className="relative bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 hidden dark:block"></div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-48 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
            Welcome to Our Company
          </h1>
          <p className="mt-4 text-xl leading-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-serif">
            Empowering your business with cutting-edge solutions and services.
          </p>
          <a
            href="#services"
            className=" font-serif mt-8 inline-block bg-blue-500 dark:bg-teal-600 border border-transparent rounded-full py-3 px-10 text-lg font-semibold text-white hover:bg-blue-600 dark:hover:bg-teal-700 transition-transform transform hover:scale-105 shadow-md"
          >
            Explore Our Services
          </a>
        </div>
      </header>

      <section id="services" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
              Our Services
            </h2>
            <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-300 max-w-xl mx-auto font-serif">
              We offer a wide range of services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'E Commerce',
                description:
                  'Expert guidance to help navigate complex business challenges and achieve your goals.',
                icon: <Briefcase size={32} />,
              },
              {
                title: 'Software Development',
                description:
                  'High-quality software solutions tailored to your business needs and goals.',
                icon: <Code size={32} />,
              },
              {
                title: 'Hulu Pay',
                description:
                  'Unlock the power of data with advanced analytics and insights to drive growth.',
                icon: <BarChart2 size={32} />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 dark:bg-teal-600 text-white mb-6 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-blue-500 dark:to-teal-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
