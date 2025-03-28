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
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="relative bg-[#222D3D] overflow-hidden shadow-lg py-40 text-center">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-[#25A7E5] dark:text-gray-100 drop-shadow-xl font-poppins">
            {t("discussion_forum")}
          </h1>
          <p className="mt-5 text-lg text-gray-200 dark:text-gray-300 max-w-3xl mx-auto font-poppins">
            Engage in insightful discussions on trending industry topics.
          </p>
        </div>
      </header>

      <section className="py-6 bg-[#222D3D]" id="discussions-section" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {discussionTopics.map((topic, index) => (
              <a
                key={index}
                href={topic.link}
                rel="noopener noreferrer"
                className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                data-aos={topic.animation}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#25A7E5] text-white shadow-lg">
                    {topic.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#25A7E5] dark:text-gray-100 font-poppins">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-poppins">
                  {topic.description}
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

export default Discussions;
