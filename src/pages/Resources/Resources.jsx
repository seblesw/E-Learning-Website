import React, { useEffect } from 'react';
import { BookOpen, Globe, Database, Video, Users } from 'react-feather';
import { ChevronDown } from 'react-feather'; 
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Resources = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
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
    {
      title: 'Video Tutorials',
      description: 'Watch expert-led video tutorials to gain hands-on experience with new technologies.',
      icon: <Video size={32} />, 
      animation: 'fade-right',
      link: 'https://videos.example.com'
    },
    {
      title: 'Community & Forums',
      description: 'Join discussions with professionals and learners in our active community.',
      icon: <Users size={32} />, 
      animation: 'fade-up',
      link: 'https://forum.example.com'
    },
  ];

  const scrollToResources = () => {
    document.getElementById('resources-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased bg-gray-100 text-gray-900 relative">
      <div className="relative max-w-7xl mx-auto py-20 px-6 sm:px-12 lg:py-24 lg:px-16 text-center" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold text-green-800 drop-shadow-lg font-serif">
          {t("Our Resources")}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700 font-serif max-w-3xl mx-auto">
          Explore a wealth of knowledge, insights, and technical resources to elevate your experience and stay ahead in the industry.
        </p>
      </div>
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce cursor-pointer" 
        onClick={scrollToResources}
      >
        <ChevronDown size={50} className="text-green-600" />
      </div>
      <section className="py-20" id="resources-section" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {resourceList.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                data-aos={resource.animation}
              >
                <div className="flex items-center space-x-5 mb-5">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-600 text-white shadow-lg">
                    {resource.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-serif">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 font-serif">
                  {resource.description}
                </p>
                <div className="absolute inset-0 rounded-xl bg-yellow-100 opacity-50 hover:opacity-70 transition-opacity duration-300 shadow-md"></div>
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
