import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  'assets/hero/company.jpg',
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <header className="relative bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 hidden dark:block"></div>
        <div 
          className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-48 lg:px-8 flex flex-col lg:flex-row justify-between items-center"
          data-aos="fade-up"
        >
          {/* Left Side - Text Content */}
          <div className="text-left max-w-xl mb-8 lg:mb-0" data-aos="fade-right">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
              About Our Company
            </h1>
            <p className="mt-4 text-xl leading-8 text-gray-700 dark:text-gray-300 font-serif">
              Hulu Software Labs PLC was founded 5 years ago by Dr. Mekides Assefa and Dr. Amir Teshome. The company provides its services to the Ethiopian market and is fully licensed and tax registered under the Ethiopian administration.
            </p>
            <a
              href="#mission"
              className="mt-8 inline-block bg-blue-500 dark:bg-teal-600 border border-transparent rounded-full py-3 px-10 text-lg font-semibold text-white hover:bg-blue-600 dark:hover:bg-teal-700 transition-transform transform hover:scale-105 shadow-md font-serif"
              data-aos="zoom-in"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right Side - Image Gallery */}
          <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden rounded-xl shadow-lg">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Vision and Mission Section */}
      <section id="mission" className="py-16 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105" data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
                Our Mission
              </h2>
              <p className="mt-4 text-xl leading-7 text-gray-600 dark:text-gray-300 font-serif">
                Our mission is to contribute to the global digital transformation process by providing digital solutions that automate and transform many of the day-to-day activities of the Ethiopian people. We differentiate ourselves by localizing and adapting state-of-the-art solutions to meet the unique needs of the local population.
              </p>
            </div>

            {/* Vision */}
            <div className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105" data-aos="fade-left">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
                Our Vision
              </h2>
              <p className="mt-4 text-xl leading-7 text-gray-600 dark:text-gray-300 font-serif">
                Our vision is to be among the leading digital services providers in Ethiopia and across the Horn of Africa, bridging the gap for the international market to access local and marginalized East African societies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-16 bg-gray-200 dark:bg-gray-800" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
              Our Core Values
            </h2>
            <p className="mt-4 text-xl leading-7 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-serif">
              The principles that guide us in our mission and vision.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We uphold the highest standards of integrity in all our actions.',
                icon: 'fas fa-shield-alt',
              },
              {
                title: 'Innovation',
                description: 'We pursue new creative ideas that have the potential to change the world.',
                icon: 'fas fa-lightbulb',
              },
              {
                title: 'Customer Focus',
                description: 'We are committed to providing the highest level of service to our customers.',
                icon: 'fas fa-user-friends',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 dark:bg-teal-600 text-white mb-6 shadow-lg">
                  <i className={`${value.icon} text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 font-serif">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-serif">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-16 bg-white dark:bg-gray-900" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
              Meet Our Founders
            </h2>
            <p className="mt-4 text-xl leading-7 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-serif">
              The visionaries driving innovation and excellence at Hulu Labs PLC.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                name: 'Dr. Mekides Assefa',
                title: 'Co-Founder & CEO',
                image: 'assets/founders/mekides.jpg',
                description:
                  'Dr. Mekides Assefa has been leading our company with a focus on innovation and strategic growth, bringing years of experience in software engineering and business development.',
                socialLinks: {
                  linkedin: '#',
                  twitter: '#',
                },
              },
              {
                name: 'Dr. Amir Teshome',
                title: 'Co-Founder & CTO',
                image: 'assets/founders/amir.jpg',
                description:
                  'With deep expertise in technology and a passion for innovation, Dr. Amir Teshome oversees the technical direction of our projects, ensuring the highest quality standards.',
                socialLinks: {
                  linkedin: '#',
                  twitter: '#',
                },
              },
              {
                name: 'Dr. Yilkal Andualem',
                title: 'Co-Founder',
                image: 'assets/founders/yilkal.jpg',
                description:
                  'With deep expertise in technology and a passion for innovation, Dr. Yilkal Andualem brings a unique vision to the company, focusing on growth and strategic partnerships.',
                socialLinks: {
                  linkedin: '#',
                  twitter: '#',
                },
              },
              {
                name: 'Dr. Chalachew Temesgen',
                title: 'Co-Founder',
                image: 'assets/founders/chalachew.jpg',
                description:
                  'Dr. Chalachew Temesgen ensures the highest quality in our projects, with a deep commitment to innovation and excellence in technology.',
                socialLinks: {
                  linkedin: '#',
                  twitter: '#',
                },
              },
            ].map((founder, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-105"
                data-aos="zoom-in-up"
              >
                <div className="w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2 font-serif">
                  {founder.name}
                </h3>
                <h4 className="text-xl text-blue-500 dark:text-teal-500 mb-4 font-serif">
                  {founder.title}
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-center font-serif">
                  {founder.description}
                </p>
                <div className="absolute bottom-4 flex space-x-4">
                  {founder.socialLinks.linkedin && (
                    <a href={founder.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 text-2xl transition-colors duration-200"></i>
                    </a>
                  )}
                  {founder.socialLinks.twitter && (
                    <a href={founder.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 text-2xl transition-colors duration-200"></i>
                    </a>
                  )}
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-blue-500 dark:to-teal-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
