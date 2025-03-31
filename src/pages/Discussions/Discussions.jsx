import React, { useEffect } from 'react';
import { MessageCircle, Users, Send } from 'react-feather';
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Discussions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  
  const { t } = useTranslation(); 
  
  const discussionTopics = [
    {
      title: 'E-commerce Growth',
      description: 'Discuss the latest trends and strategies in online business and digital marketplaces.',
      icon: <MessageCircle size={32} />, 
      animation: 'fade-right',
      link: 'https://t.me/ecommerce_discussion'
    },
    {
      title: 'Cryptocurrency Insights',
      description: 'Share and learn about new blockchain technologies and crypto investment strategies.',
      icon: <Users size={32} />, 
      animation: 'fade-up',
      link: 'https://t.me/crypto_discussion'
    },
    {
      title: 'Fintech & Payments',
      description: 'Join discussions on payment innovations, fintech solutions, and banking technologies.',
      icon: <Send size={32} />, 
      animation: 'fade-left',
      link: 'https://t.me/fintech_discussion'
    },
  ];

  return (
    <div className="font-sans antialiased bg-white text-green-900 relative">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-green-900 drop-shadow-md font-serif">
          {t("Discussion Forum")}
        </h1>
        <p className="mt-4 text-xl leading-8 text-green-900 font-serif max-w-2xl mx-auto">
          Engage in insightful discussions on trending industry topics.
        </p>
      </div>
      <section className="py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {discussionTopics.map((topic, index) => (
              <a
                key={index}
                href={topic.link}
                rel="noopener noreferrer"
                className="relative flex flex-col bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                data-aos={topic.animation}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white shadow-lg">
                    {topic.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black font-serif">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-lg text-black font-serif">
                  {topic.description}
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

export default Discussions;
