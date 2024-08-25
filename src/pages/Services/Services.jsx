import React, { useEffect } from 'react';
import { Briefcase, Code, BarChart2 } from 'react-feather';
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);

  const services = [
    {
      title: 'E-Commerce',
      description: 'Our e-commerce business telegram mini app is a platform designed to facilitate the buying and selling of goods and services over the internet.',
      icon: <Briefcase size={32} />,
      animation: 'fade-right', 
    },
    {
      title: 'Crypto Business',
      description: 'Our crypto business involves the creation, management, or facilitation of services and products related to cryptocurrencies and blockchain technology.',
      icon: <Code size={32} />,
      animation: 'fade-up', 
    },
    {
      title: 'Hulu Pay',
      description: 'Payment Solution associated with Hulu, a popular streaming service.',
      icon: <BarChart2 size={32} />,
      animation: 'fade-left', 
    },
  ];

  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="relative bg-white dark:bg-gray-800 overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 hidden dark:block"></div>
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-lg font-serif">
            Our Services
          </h1>
          <p className="mt-6 text-2xl leading-9 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-serif">
            Discover the wide range of services we offer to empower your business.
          </p>
        </div>
      </header>

      <section className="py-16 bg-gray-100 dark:bg-gray-900" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                data-aos={service.animation}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 dark:bg-teal-600 text-white mb-6 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 font-serif">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-serif">
                  {service.description}
                </p>
                <div className="font-serif absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-blue-500 dark:to-teal-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
