import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const courses = [
  {
    title: 'Full-Stack Web Development',
    description: 'Learn to build modern web applications with React, Node.js, and databases.',
    image: 'assets/courses/web-development.jpg',
  },
  {
    title: 'Data Science & Machine Learning',
    description: 'Master data analytics, machine learning algorithms, and AI technologies.',
    image: 'assets/courses/data-science.jpg',
  },
  {
    title: 'Mobile App Development',
    description: 'Create cross-platform mobile applications using React Native and Flutter.',
    image: 'assets/courses/mobile-development.jpg',
  },
  {
    title: 'Cybersecurity & Ethical Hacking',
    description: 'Protect digital assets with cybersecurity best practices and penetration testing.',
    image: 'assets/courses/cybersecurity.jpg',
  },
];

const Courses = () => {
  const { t } = useTranslation(); 

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-100 text-gray-900 dark:text-gray-100">
      <header className="relative bg-[#222D3D] overflow-hidden shadow-lg">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-white dark:text-gray-100 drop-shadow-md font-montserrat">
            {t("Explore Our Courses")}
          </h1>
          <p className="mt-4 text-lg leading-8 text-white dark:text-gray-300 font-poppins">
            {t("Unlock your potential with industry-leading courses designed for all skill levels.")}
          </p>
        </div>
      </header>
      
      <section className="py-16 bg-gray-100 dark:bg-gray-900" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h2 className="text-2xl font-bold text-[#222D3D] dark:text-gray-100 font-montserrat">{course.title}</h2>
                <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 font-poppins">{course.description}</p>
                <button className="mt-4 bg-[#25A7E5] text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition-all">
                  {t("Enroll Now")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
