import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { ShoppingCart } from 'react-feather';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { MdAccountBalanceWallet  } from 'react-icons/md';
import { FiShield } from 'react-icons/fi';

const images = [
  'assets/hero/hero2.webp',
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation(); 

  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: t('Hulu Gebeya'),
      description: t('hulugebeya_description'),
      icon: <ShoppingCart size={32} />,
      link: 'https://t.me/EcommerceTMA_bot'
    },
    {
      title: t('Crypto Technology'),
      description: t('Our crypto business description'),
      icon: <FiShield size={32} />,
      link: 'https://t.me/EcommerceTMA_bot'

    },
    {
      title: t('Payment Solution'),
      description: t('hulupayment description'),
      icon: <MdAccountBalanceWallet size={32} />,
      link: 'https://t.me/EcommerceTMA_bot'
    },
  ];

  return (
    <div className="font-sans antialiased bg-white text-gray-900">
      <header className="relative bg-white overflow-hidden shadow-lg h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-teal-100 to-white opacity-70"></div>
        <div 
          className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-36 lg:px-8 flex flex-col lg:flex-row justify-between items-center"
          data-aos="fade-up"
        >
          <div className="text-left max-w-xl mb-8 lg:mb-0" data-aos="fade-right">
            <h1 className="text-5xl font-bold text-gray-800 drop-shadow-md font-serif">
              {t('Welcome to Hulu Labs')}
            </h1>
            <p className="mt-4 text-xl leading-8 text-gray-800 font-serif">
              {t('Empowering your business with advanced, cutting-edge solutions that drive innovation, efficiency, and sustainable growth')}
            </p>
            <a
              href="#services"
              className="mt-8 inline-block bg-gradient-to-r from-blue-400 to-teal-400 border border-transparent rounded-full py-4 px-12 text-lg font-bold text-white hover:from-blue-500 hover:to-teal-500 transition-transform transform hover:scale-105 shadow-md font-serif"
              data-aos="fade-up"
            >
              {t('Discover Our Services')}
            </a>
          </div>
        </div>
      </header>

      <section id="services" className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 drop-shadow-md font-serif">
              {t('Our Services')}
            </h2>
            <p className="mt-4 text-xl leading-7 text-gray-600 max-w-2xl mx-auto font-serif">
              {t('We provide an extensive suite of innovative solutions designed to empower your business and drive success in today’s digital economy.')}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                rel="noopener noreferrer"
                className="relative flex flex-col bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                data-aos="zoom-in-up"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-500 text-white mb-6 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 font-serif">
                  {service.description}
                </p>
                 <span className='text-blue-800 font-serif font-bold'>{t('view_details')}</span>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-blue-100 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 drop-shadow-md font-serif">
              {t("what_makes_unique")}
            </h2>
            <p className="mt-4 text-xl leading-7 text-gray-600 max-w-2xl mx-auto font-serif">
            {t("what_makes_unique_description")}            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: t('Experience'),
                description: t('describe_exprience'),
              },
              {
                title: t('Quality'),
                description: t('Quality_Desription'),
              },
              {
                title: t('Support'),
                description: t('customer_support'),
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="relative flex flex-col bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                data-aos="zoom-in-up"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-600 font-serif">
                  {benefit.description}
                </p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-teal-100 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
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
