import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { Briefcase, Code, BarChart2 } from 'react-feather'; // Uncomment and use the correct imports

const images = [
  // 'src/assets/hero/shoping.jpg',
  'assets/hero/women.png',
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
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
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-48 lg:px-8 flex justify-between items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-left max-w-xl">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
              Welcome to Our Company
            </h1>
            <p className="mt-4 text-xl leading-8 text-gray-700 dark:text-gray-300 font-serif">
              Empowering your business with cutting-edge solutions and services.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block bg-blue-500 dark:bg-teal-600 border border-transparent rounded-full py-3 px-10 text-lg font-semibold text-white hover:bg-blue-600 dark:hover:bg-teal-700 transition-transform transform hover:scale-105 shadow-md font-serif"
            >
              Explore Our Services
            </a>
          </div>
          {/* Right Side - Image Gallery */}
          <div className="w-1/2">
            <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>
      <section id="services" className="py-16 bg-gray-100 dark:bg-gray-900">
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

      <Footer />
    </div>
  );
};

export default Home;
