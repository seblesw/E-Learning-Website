import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { Briefcase, Code, BarChart2 } from 'react-feather'; // Import the required icons
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  'assets/hero/company.jpg',
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Adjust the duration as needed
    });
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <header className="relative bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 hidden dark:block"></div>
        <div 
          className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-48 lg:px-8 flex justify-between items-center"
          data-aos="fade-up" // AOS animation for the header section
        >
          {/* Left Side - Text Content */}
          <div className="text-left max-w-xl" data-aos="fade-right">
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
          <div className="w-1/2" data-aos="fade-left">
            <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
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
      <section id="mission" className="py-16 bg-gray-100 dark:bg-gray-900" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105" data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
                Our Mission
              </h2>
              <p className="mt-4 text-xl leading-7 text-gray-600 dark:text-gray-300 font-serif">
                Our mission is to contribute to the global digital transformation process by providing digital solutions that automate and transform many of the day-to-day activities of the Ethiopian people. We differentiate ourselves by localizing and adapting state-of-the-art solutions to meet the unique needs of the local population.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105" data-aos="fade-left">
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
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {[
              {
                // name: 'Dr. Mekides Assefa',
                title: 'Co-Founder & CEO',
                image: 'assets/founders/mekides.jpg',
                description:
                  'Dr. Mekides Assefa has been leading our company with a focus on innovation and strategic growth, bringing years of experience in software engineering and business development.',
              },
              {
                // name: 'Dr. Amir Teshome',
                title: 'Co-Founder & CTO',
                image: 'assets/founders/amir.jpg',
                description:
                  'With deep expertise in technology and a passion for innovation, Dr. Amir Teshome oversees the technical direction of our projects, ensuring the highest quality standards.',
              },
            ].map((founder, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-105"
                data-aos="zoom-in-up" // AOS animation for the founders section
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
