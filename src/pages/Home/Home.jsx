import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { BookOpen, Users, Award, Globe, Code, Briefcase, Shield } from 'react-feather';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { FaChalkboardTeacher, FaUsers, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';
import { FiBook } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const images = ['assets/hero/learningHero.png'];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200 });
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const icons = {
    "Software Engineering": <Code size={32} />,
    "Data Science": <Globe size={32} />,
    "Artificial Intelligence": <BookOpen size={32} />,
    "Cybersecurity": <Shield size={32} />,
    "Product Design": <Users size={32} />
  };

  return (
<div className="font-sans antialiased bg-gray-50 text-gray-900">
<header
  className="relative min-h-screen flex items-center bg-cover bg-center shadow-lg"
  style={{
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('assets/website/hero.avif') center/cover no-repeat`
  }}
>
  <div className="absolute inset-0 bg-black/50"></div> 
  
  <div className="relative max-w-6xl mx-auto text-center text-white px-6 py-12" data-aos="fade-up">
    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-wide drop-shadow-xl">
      {t("Welcome to Learning Hub")}
    </h1>
    <p className="mt-4 text-lg sm:text-2xl font-light leading-relaxed">
      {t("Unlock your potential with expert-led courses in various fields.")}
    </p>
    <a 
      href="#courses" 
      className="mt-8 inline-block bg-gradient-to-r from-yellow-500 to-yellow-700 border border-transparent rounded-full py-4 px-8 text-lg font-semibold text-white transition-transform transform hover:scale-105 hover:shadow-xl"
      data-aos="fade-up"
    >
      {t("Browse Courses")}
    </a>
  </div>
</header>
<section id="courses" className="py-20 bg-white" data-aos="fade-up">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{t('Featured Programs')}</h2>
    <p className="text-gray-600 text-lg">
      {t('Explore our top-rated programs designed by industry experts.')}
    </p>
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        "Software Engineering",
        "Data Science",
        "Artificial Intelligence",
        "Cybersecurity",
        "Product Design"
      ].map((program, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl px-6 py-10 min-h-[360px] flex flex-col justify-between shadow-md border border-gray-100 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
        >
          <div>
            <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-lg">
              {icons[program] || <BookOpen size={20} />}
            </div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">{t(program)}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('Includes Essentials, Foundations, and Capstone projects for full immersion.')}
            </p>
          </div>
          <div className="mt-6">
           <Link
  to={`/curriculum/${program.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
  className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-700 rounded-full shadow-lg group-hover:scale-105 transition-transform"
>
  {t('Explore Curriculum')}
  <svg className="ml-2 w-4 h-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M10 0l3 3-5 5H0v4h8l5 5-3 3 10-10L10 0z" />
  </svg>
</Link>
</div>
 </div>
      ))}
    </div>
  </div>
</section>
  <section className="py-20 bg-gray-100" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">{t('Why Choose Us?')}</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md"><FaUsers size={40} className="text-green-500 mx-auto" /><h3 className="text-xl font-semibold mt-4">{t('Expert Instructors')}</h3><p className="text-gray-600 mt-2">{t('Learn from industry professionals with real-world experience.')}</p></div>
            <div className="bg-white p-8 rounded-lg shadow-md"><Award size={40} className="text-green-500 mx-auto" /><h3 className="text-xl font-semibold mt-4">{t('Certified Courses')}</h3><p className="text-gray-600 mt-2">{t('Gain industry-recognized certifications upon completion.')}</p></div>
            <div className="bg-white p-8 rounded-lg shadow-md"><Users size={40} className="text-green-500 mx-auto" /><h3 className="text-xl font-semibold mt-4">{t('Community Support')}</h3><p className="text-gray-600 mt-2">{t('Join a network of learners and get access to mentors.')}</p></div>
          </div>
        </div>
</section>

      <Footer data-aos="fade-up" />
    </div>
  );
};

export default Home;
