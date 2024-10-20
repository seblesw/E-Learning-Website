import React, { useEffect } from 'react';
import { Briefcase, Code, BarChart2 } from 'react-feather';
import { Layers, ShoppingCart, Globe, ChevronDown } from 'react-feather'; // Import ChevronDown for dropdown
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
      title: 'Hulu Gebeya',
      description: 'Our e-commerce business Telegram mini-app is a dynamic platform tailored to streamline and enhance the buying and selling of goods and services online. It offers seamless integration, user-friendly navigation, and secure transactions, ensuring a smooth and efficient experience for both buyers and sellers.',
      icon: <Briefcase size={32} />,
      animation: 'fade-right',
    },
    {
      title: 'Crypto Technology',
      description: 'Our crypto business focuses on developing, managing, and facilitating innovative services and products in the cryptocurrency and blockchain space, offering secure and efficient solutions tailored to the evolving digital asset landscape.',
      icon: <Code size={32} />,
      animation: 'fade-up',
    },
    {
      title: 'Payment Solution',
      description: 'Hulu Pay is a versatile payment solution that integrates with popular platforms like Tell Birr, M-Pesa, and USSD. Designed to offer secure, seamless transactions, it empowers users with convenient payment options, enhancing the overall customer experience.',
      icon: <BarChart2 size={32} />,
      animation: 'fade-left',
    },
  ];

  // Scroll to services section
  const scrollToServices = () => {
    document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <header className="relative bg-white dark:bg-gray-800 overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-teal-100 to-white dark:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 hidden dark:block"></div>
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-lg font-serif">
            Our Services
          </h1>
          <p className="mt-6 text-xl leading-9 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-serif">
            Discover how we help you unlock the true potential of your business with innovative, results-driven solutions.
          </p>

          {/* Icons under header */}
          <div className="flex justify-center mt-8 space-x-10">
            <div className="flex flex-col items-center">
              <ShoppingCart size={48} className="text-teal-500 dark:text-teal-400 mb-2" />
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-100 font-serif">Hulu Gebeya</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe size={48} className="text-teal-500 dark:text-teal-400 mb-2" />
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-100 font-serif">Crypto Technology</span>
            </div>
            <div className="flex flex-col items-center">
              <Layers size={48} className="text-teal-500 dark:text-teal-400 mb-2" />
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-100 font-serif"> Payment Solution</span>
            </div>
          </div>

          {/* Dropdown icon */}
          <div className="flex justify-center mt-10">
            <button
              onClick={scrollToServices}
              className="text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-transform transform hover:scale-110"
              aria-label="Scroll to services"
            >
              <ChevronDown size={48} />
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900" id="services-section" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                data-aos={service.animation}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-500 dark:bg-teal-600 text-white mb-6 shadow-lg">
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

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900" id="services-overview" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 font-serif">
            Why Choose Our Services?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-8 max-w-3xl mx-auto font-serif">
            We offers a comprehensive suite of solutions, including a cutting-edge e-commerce platform, versatile payment solutions, and innovative cryptocurrency services. Our offerings are designed to streamline online transactions, enhance payment flexibility, and empower businesses to thrive in the evolving digital economy.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white dark:bg-gray-800" id="workflow-section" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 font-serif">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Consultation',
                description: 'We begin by understanding your business needs through in-depth consultations.',
                icon: 'fas fa-comments',
              },
              {
                title: 'Implementation',
                description: 'Our team of experts then designs and implements solutions tailored to your unique requirements.',
                icon: 'fas fa-cogs',
              },
              {
                title: 'Support',
                description: 'We provide ongoing support and optimization to ensure your business continues to thrive.',
                icon: 'fas fa-hands-helping',
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-16 w-16 mb-6 rounded-full bg-teal-500 dark:bg-teal-600 text-white flex items-center justify-center shadow-lg">
                  <i className={`${step.icon} text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 font-serif">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-center font-serif">
                  {step.description}
                </p>
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
