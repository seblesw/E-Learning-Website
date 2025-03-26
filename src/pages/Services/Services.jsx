import React, { useEffect } from 'react';
import { Briefcase, Code, BarChart2 } from 'react-feather';
import { Layers, ShoppingCart, Globe, ChevronDown } from 'react-feather'; 
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  
  const { t } = useTranslation(); 
  
  const services = [
    {
      title: 'Hulu Gebeya',
      description: 'Our e-commerce business Telegram mini-app is a dynamic platform tailored to streamline and enhance the buying and selling of goods and services online.',
      icon: <Briefcase size={32} />,
      animation: 'fade-right',
      link: 'https://t.me/EcommerceTMA_bot'
    },
    {
      title: 'Crypto Technology',
      description: 'Our crypto business focuses on developing, managing, and facilitating innovative services and products in the cryptocurrency and blockchain space.',
      icon: <Code size={32} />,
      animation: 'fade-up',
      link: 'https://t.me/EcommerceTMA_bot'
    },
    {
      title: 'Payment Solution',
      description: 'Hulu Pay is a versatile payment solution that integrates with platforms like Tell Birr, M-Pesa, and USSD.',
      icon: <BarChart2 size={32} />,
      animation: 'fade-left',
      link: 'https://t.me/EcommerceTMA_bot'
    },
  ];

  const scrollToServices = () => {
    document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
<header className="relative bg-[#222D3D] overflow-hidden shadow-lg py-40 text-center">
  <div className="relative max-w-6xl mx-auto px-6 lg:px-8" data-aos="fade-up">
    <h1 className="text-4xl font-extrabold text-[#25A7E5] dark:text-gray-100 drop-shadow-xl font-poppins">
      {t("our_services")}
    </h1>
    <p className="mt-5 text-lg text-gray-200 dark:text-gray-300 max-w-3xl mx-auto font-poppins">
      Elevate your business with cutting-edge, results-driven solutions tailored to your success.
    </p>
  </div>
  <div 
      className="absolute left-1/2 transform -translate-x-1/2 bottom-6 animate-bounce cursor-pointer" 
      onClick={scrollToServices}
    >
      <ChevronDown size={40} className="text-[#25A7E5]" />
    </div>
</header>

<section className="py-6 bg-[#222D3D]" id="services-section" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.link}
          rel="noopener noreferrer"
          className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          data-aos={service.animation}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#25A7E5] text-white shadow-lg">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-[#25A7E5] dark:text-gray-100 font-poppins">
              {service.title}
            </h3>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-poppins">
            {service.description}
          </p>
        </a>
      ))}
    </div>
  </div>
</section>

      <section className="py-16 bg-[#222D3D]" id="services-overview" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#25A7E5] mb-6 font-poppins">
            Why choose our Services?
          </h2>
          <p className="font-medium text-base text-white leading-8 max-w-3xl mx-auto font-poppins">
            We offers a comprehensive suite of solutions, including a cutting-edge e-commerce platform, versatile payment solutions, and innovative cryptocurrency services. Our offerings are designed to streamline online transactions, enhance payment flexibility, and empower businesses to thrive in the evolving digital economy.
          </p>
        </div>
      </section>
      <section id="values" className="py-16 bg-[#222D3D]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#25A7E5] dark:text-gray-100 drop-shadow-md font-poppins">
              How it Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: 'Consultation',
              description: 'We begin by understanding your business needs through in-depth consultations.',
              icon: 'fas fa-comments',
            }, {
              title: 'Implementation',
              description: 'Our team of experts then designs and implements solutions tailored to your unique requirements.',
              icon: 'fas fa-cogs',
            }, {
              title: 'Support',
              description: 'We provide ongoing support and optimization to ensure your business continues to thrive.',
              icon: 'fas fa-hands-helping',
            }].map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#25A7E5] text-white shadow-lg">
                    <i className={`${step.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#222D3D] dark:text-gray-100 font-poppins">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-[#222D3D] dark:text-gray-300 font-poppins">
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
