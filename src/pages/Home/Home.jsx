import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { BookOpen, Users, Award, Globe, Code, Briefcase, Shield } from 'react-feather';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { FaChalkboardTeacher, FaUsers, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';
import { FiBook } from 'react-icons/fi';

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

  const courses = [
    { title: t('Introduction to Programming'), description: t('Learn coding fundamentals with hands-on exercises.'), icon: <BookOpen size={32} />, link: '#' },
    { title: t('Data Science Essentials'), description: t('Explore data analysis and visualization.'), icon: <FiBook size={32} />, link: '#' },
    { title: t('Web Development Bootcamp'), description: t('Master front-end and back-end web technologies.'), icon: <FaChalkboardTeacher size={32} />, link: '#' },
    { title: t('Cybersecurity Fundamentals'), description: t('Understand online security and ethical hacking.'), icon: <Shield size={32} />, link: '#' },
    { title: t('AI & Machine Learning'), description: t('Learn AI concepts and build smart applications.'), icon: <Globe size={32} />, link: '#' },
    { title: t('Project Management Professional'), description: t('Develop skills to manage complex projects.'), icon: <FaProjectDiagram size={32} />, link: '#' },
  ];

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
          <h2 className="text-3xl font-extrabold text-gray-800">{t('Featured Courses')}</h2>
          <p className="text-gray-600 mt-2 text-lg">{t('Explore our top-rated courses designed by industry experts.')}</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold text-green-700">{course.title}</h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
                <a href={course.link} className="mt-4 inline-block text-green-600 font-bold hover:underline">{t('View Details')}</a>
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
