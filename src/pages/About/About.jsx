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
      <header className="relative bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-teal-100 to-whitedark:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900 hidden dark:block"></div>
        <div 
          className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-48 lg:px-8 flex flex-col lg:flex-row justify-between items-center"
          data-aos="fade-up"
        >
          <div className="text-left max-w-xl mb-8 lg:mb-0" data-aos="fade-right">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
            About Hulu Software Labs PLC
            </h1>
            <p className="mt-4 text-xl leading-8 text-gray-700 dark:text-gray-300 font-serif">
            Founded five years ago by visionary leaders Dr. Mekides Assefa and Dr. Amir Teshome, Hulu Software Labs PLC is a fully licensed and tax-compliant entity serving the Ethiopian market. We specialize in delivering innovative software solutions tailored to meet the unique needs of businesses in Ethiopia, with a steadfast commitment to excellence and regulatory compliance.            </p>
            <a
              href="#mission"
              className="mt-8 inline-block bg-gradient-to-r from-blue-400 to-teal-400 border border-transparent rounded-full py-3 px-10 text-lg font-semibold text-white hover:bg-blue-600 dark:hover:bg-teal-700 transition-transform transform hover:scale-105 shadow-md font-serif"
              data-aos="zoom-in"
            >
              Learn More About Us
            </a>
          </div>

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
      <section id="mission" className="py-16 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105" data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
                Our Mission
              </h2>
              <p className="mt-4 text-xl leading-7 text-gray-600 dark:text-gray-300 font-serif">
                Our mission is to contribute to the global digital transformation process by providing digital solutions that automate and transform many of the day-to-day activities of the Ethiopian people. We differentiate ourselves by localizing and adapting state-of-the-art solutions to meet the unique needs of the local population.
              </p>
            </div>

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

      <section id="values" className="py-16 bg-gray-200 dark:bg-gray-800" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-md font-serif">
              Our Core Values
            </h2>
            <p className="mt-4 text-xl leading-7 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-serif">
            The foundational principles that drive our mission to deliver excellence and shape our vision for sustainable growth, innovation, and client success.            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We adhere to the highest ethical standards, ensuring transparency, honesty, and accountability in every action we take',
                icon: 'fas fa-shield-alt',
              },
              {
                title: 'Innovation',
                description: 'We relentlessly seek out and implement groundbreaking ideas, driving transformative solutions that have the power to reshape industries and impact the world.',
                icon: 'fas fa-lightbulb',
              },
              {
                title: 'Customer Focus',
                description: 'We are dedicated to delivering unparalleled service excellence, consistently exceeding customer expectations through tailored solutions and a commitment to long-term partnerships.',
                icon: 'fas fa-user-friends',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-500 dark:bg-teal-600 text-white mb-6 shadow-lg">
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
      <section id="founders" className="py-16 bg-white dark:bg-gray-900" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 drop-shadow-md font-sans">
        Meet Our Founders
      </h2>
      <p className="mt-5 text-xl leading-8 text-gray-500 dark:text-gray-300 max-w-3xl mx-auto font-light">
        Visionaries shaping the future of Hulu Labs PLC with innovation, leadership, and a commitment to excellence.
      </p>
    </div>
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {[
        {
          name: 'Dr. Mekides Assefa',
          title: 'Co-Founder & CEO',
          image: 'assets/founders/mekides.jpg',
          description:
            'With a strong background in software engineering and business development, Dr. Mekides Assefa drives our innovation strategies and long-term vision.',
        },
        {
          name: 'Dr. Amir Teshome',
          title: 'Co-Founder & CTO',
          image: 'assets/founders/amir.jpg',
          description:
            'Dr. Amir Teshome leads our technological initiatives, ensuring we stay ahead of the curve by adopting cutting-edge technologies and maintaining the highest technical standards.',
        },
       
        {
          name: 'Dr. Chalachew Temesgen',
          title: 'Co-Founder',
          image: 'assets/founders/chalachew.jpg',
          description:
            'With a deep commitment to excellence, Dr. Chalachew Temesgen ensures our projects maintain the highest standards of quality and innovation.',
        },
        {
          name: 'Dr. Yilkal Andualem',
          title: 'Co-Founder',
          image: 'assets/founders/yilkal.jpg',
          description:
            'Focused on strategic growth and partnerships, Dr. Yilkal Andualem brings a unique perspective to driving our business expansion and industry influence.',
        },
        {
          name: 'Ydnekachew',
          title: 'Co-Founder & COO',
          image: 'assets/founders/alemayehu.jpg',
          description:
            'Dr. Ydnekachew oversees operational excellence, ensuring that all business functions work harmoniously to deliver exceptional results for our clients.',
        },
      ].map((founder, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          data-aos="zoom-in-up"
        >
          <div className="w-36 h-36 mb-4 overflow-hidden rounded-full border-4 border-gray-300 dark:border-gray-600 shadow-lg">
            <img
              src={founder.image}
              // alt={`${founder.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-sans">
            {founder.name}
          </h3>
          <h4 className="text-lg text-teal-600 dark:text-teal-400 mb-3 font-medium">
            {founder.title}
          </h4>
          <p className="text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed font-light">
            {founder.description}
          </p>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-teal-600 dark:to-teal-700 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
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
