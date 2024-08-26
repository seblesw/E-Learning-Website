import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { Briefcase, Code, BarChart2 } from 'react-feather';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  // 'src/assets/hero/shoping.jpg',
  'assets/hero/women.png',
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Adjust the duration as needed
    });

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <header className="relative bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 hidden dark:block"></div>
        <div 
          className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-48 lg:px-8 flex flex-col lg:flex-row justify-between items-center"
          data-aos="fade-up" 
        >
          {/* Left Side - Text Content */}
          <div className="text-left max-w-xl mb-8 lg:mb-0" data-aos="fade-right">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
              Welcome to Our Company
            </h1>
            <p className="mt-4 text-xl leading-8 text-gray-700 dark:text-gray-300 font-serif">
              Empowering your business with cutting-edge solutions and services.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block bg-blue-500 dark:bg-teal-600 border border-transparent rounded-full py-3 px-10 text-lg font-semibold text-white hover:bg-blue-600 dark:hover:bg-teal-700 transition-transform transform hover:scale-105 shadow-md font-serif"
              data-aos="zoom-in"
            >
              Explore Our Services
            </a>
          </div>

          {/* Right Side - Image Gallery */}
          <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden rounded-xl shadow-lg">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className={`absolute inset-0 w-full h-full max-w-full h-auto object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="py-16 bg-gray-100 dark:bg-gray-900" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
              Our Services
            </h2>
            <p className="mt-4 text-2xl leading-7 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-serif">
              We offer a wide range of services to help your business thrive in the digital age.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'E-Commerce',
                description: 'Our e-commerce business telegram mini app is a platform designed to facilitate the buying and selling of goods and services over the internet',
                icon: <Briefcase size={32} />, 
              },
              {
                title: 'Crypto Business',
                description:
                  'Our crypto business involves the creation, management, or facilitation of services and products related to cryptocurrencies and blockchain technology.',
                icon: <Code size={32} />, 
              },
              {
                title: 'Hulu Pay',
                description: 'Payment Solution associated with Hulu, a popular streaming service.',
                icon: <BarChart2 size={32} />, 
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                data-aos="zoom-in-up" 
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
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-blue-500 dark:to-teal-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-16 bg-gray-100 dark:bg-gray-900" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-2xl leading-7 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-serif">
              Our dedication to quality and client satisfaction sets us apart.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Experience',
                description: 'Over 5 years of industry experience.',
              },
              {
                title: 'Quality',
                description: 'We deliver high-quality solutions tailored to your needs.',
              },
              {
                title: 'Support',
                description: '24/7 customer support to ensure your success.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                data-aos="zoom-in-up"
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 font-serif">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-serif">
                  {benefit.description}
                </p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-blue-500 dark:to-teal-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer data-aos="fade-up" />
    </div>
  );
};

export default Home;
