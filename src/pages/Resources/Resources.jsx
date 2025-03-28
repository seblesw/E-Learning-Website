import React, { useEffect } from 'react';
import { BookOpen, Globe, Database } from 'react-feather';
import { ChevronDown } from 'react-feather'; 
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Resources = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  
  const { t } = useTranslation(); 
  
  const resourceList = [
    {
      title: 'Tech Documentation',
      description: 'Access comprehensive technical documentation for our products and services.',
      icon: <BookOpen size={32} />, 
      animation: 'fade-right',
      link: 'https://docs.example.com'
    },
    {
      title: 'Global Insights',
      description: 'Stay updated with industry trends, reports, and insights from our experts.',
      icon: <Globe size={32} />, 
      animation: 'fade-up',
      link: 'https://insights.example.com'
    },
    {
      title: 'Data & APIs',
      description: 'Explore our data sets and API integrations to enhance your development.',
      icon: <Database size={32} />, 
      animation: 'fade-left',
      link: 'https://api.example.com'
    },
  ];

  const scrollToResources = () => {
    document.getElementById('resources-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="relative bg-[#222D3D] overflow-hidden shadow-lg py-40 text-center">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-[#25A7E5] dark:text-gray-100 drop-shadow-xl font-poppins">
            {t("our_resources")}
          </h1>
          <p className="mt-5 text-lg text-gray-200 dark:text-gray-300 max-w-3xl mx-auto font-poppins">
            Explore a wealth of knowledge, insights, and technical resources to elevate your experience.
          </p>
        </div>
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 bottom-6 animate-bounce cursor-pointer" 
          onClick={scrollToResources}
        >
          <ChevronDown size={40} className="text-[#25A7E5]" />
        </div>
      </header>

      <section className="py-6 bg-[#222D3D]" id="resources-section" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {resourceList.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                rel="noopener noreferrer"
                className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                data-aos={resource.animation}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#25A7E5] text-white shadow-lg">
                    {resource.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#25A7E5] dark:text-gray-100 font-poppins">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-poppins">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
