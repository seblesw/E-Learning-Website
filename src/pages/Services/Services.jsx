import React from 'react';
import { Briefcase, Code, BarChart2 } from 'react-feather';
import Footer from '../../components/Footer/Footer';

const Services = () => {
  const services = [
    {
      title: 'E Commerce',
      description: 'Expert guidance to help navigate complex business challenges and achieve your goals.',
      icon: <Briefcase size={32} />,
    },
    {
      title: 'Software Development',
      description: 'High-quality software solutions tailored to your business needs and goals.',
      icon: <Code size={32} />,
    },
    {
      title: 'Hulu Pay',
      description: 'Unlock the power of data with advanced analytics and insights to drive growth.',
      icon: <BarChart2 size={32} />,
    },
  ];

  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="relative bg-white dark:bg-gray-800 overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 hidden dark:block"></div>
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-lg">
            Our Services
          </h1>
          <p className="mt-6 text-xl leading-9 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the wide range of services we offer to empower your business.
          </p>
        </div>
      </header>

      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
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

export default Services;
