import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { ShoppingCart } from 'react-feather';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { MdAccountBalanceWallet  } from 'react-icons/md';
import { FiShield } from 'react-icons/fi';

const images = [
  'assets/hero/heroImage.png',
  
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
<header
  className="relative bg-white overflow-hidden shadow-lg h-screen"
  style={{
    background: `linear-gradient(to right, #25A7E5 0%, rgba(0, 0, 0, 0.7) 65%, rgba(0, 0, 0, 0.5) 100%), 
                 url(${images[currentImageIndex]}) center/cover no-repeat`,
  }}
>
  <div
    className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-36 lg:px-8 flex flex-col lg:flex-row justify-between items-start"
    data-aos="fade-up"
  >
    <div className="text-left max-w-xl mb-8 lg:mb-0" data-aos="fade-right">
      <h1 className="text-5xl font-bold text-white drop-shadow-md font-poppins">
        Welcome to Hulu Labs
      </h1>
      <p className="mt-4 text-xl leading-8 text-white font-poppins">
        Empowering your business with advanced, cutting-edge solutions that drive innovation, efficiency, and sustainable growth
      </p>
      <a
        href="#services"
        className="mt-8 inline-block bg-white border border-[#25A7E5] rounded-full py-4 px-12 text-lg font-bold text-[#25A7E5] hover:text-[#24A7E5] hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-md font-poppins"
        data-aos="fade-up"
      >
        Discover Our Services
      </a>
    </div>
    <div className="relative flex items-center justify-center p-4">
      <div className="rounded-lg px-6 py-3 text-center">
        <p className="text-white text-3xl font-light tracking-wide">Available</p>
        <div className="mt-1 px-6 py-2 text-3xl backdrop-blur-md border border-white text-white font-bold text-md rounded-md inline-block shadow-md">
          <button>Every Where</button>
        </div>
      </div>
    </div>
  </div>
</header>

<section id="services" className=" py-60 bg-white" data-aos="fade-up ">
 <div className="w-full">
  <div className="text-center  w-full">
  <h2 className="text-3xl font-bold text-cyan-500 drop-shadow-md font-poppins">
    {t('Our Services')}
  </h2>
  <p className="mt-4 text-xl leading-7 text-gray-600 max-w-2xl mx-auto font-poppins px-4">
    {t('We provide an extensive suite of innovative solutions designed to empower your business and drive success in today’s digital economy.')}
  </p>
</div>
<div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {services.map((service, index) => (
    <a
      key={index}
      href={service.link}
      rel="noopener noreferrer"
      className="relative flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 border border-cyan-500"
      data-aos="zoom-in-up"
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500 text-white mb-4 shadow-lg">
        {service.icon}
      </div>
      <h3 className="text-2xl font-semibold text-cyan-500 mb-2 font-poppins text-center">
        {service.title}
      </h3>
      <p className="text-lg text-gray-600 font-poppins text-center">
        {service.description}
      </p>
      <span className='text-cyan-500 font-poppins font-bold'>{t('view_details')}</span>

      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-blue-100 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
    </a>
  ))}
</div>
</div>
</section>
<section id="why-choose-us" className="py-6" data-aos="fade-up">
  <div className="w-full">
     <div className="text-center w-full">
  <h2 className="text-3xl font-bold text-cyan-500 drop-shadow-md font-poppins">
    {t('what_makes_unique')}
  </h2>
  <p className="mt-4 text-xl leading-7 text-gray-600 max-w-2xl mx-auto font-poppins px-4">
    {t('what_makes_unique_description')}
  </p>
</div>
    <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="relative flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 border border-cyan-500"
          data-aos="zoom-in-up"
        >
          <h3 className="text-2xl font-semibold text-cyan-500 mb-2 font-poppins text-center">
            {benefit.title}
          </h3>
          <p className="text-lg text-gray-600 font-poppins text-center">
            {benefit.description}
          </p>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-blue-100 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
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
