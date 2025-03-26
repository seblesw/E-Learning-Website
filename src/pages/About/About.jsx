import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const images = [
  'assets/hero/company.jpg', 
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t, i18n } = useTranslation(); 

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
    <div className="font-sans antialiased bg-gray-100 text-gray-900 dark:text-gray-100">
      <header className="relative bg-[#222D3D] overflow-hidden shadow-lg">
        <div 
          className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-48 lg:px-8 flex flex-col lg:flex-row justify-between items-center"
          data-aos="fade-up"
        >
          <div className="text-left max-w-xl mb-8 lg:mb-0" data-aos="fade-right">
            <h1 className="text-3xl font-bold text-white dark:text-gray-100 drop-shadow-md font-montserrat">
            {t("about_hulu_software_labs")}
            </h1>
            <p className="mt-4 text-lg leading-8 text-white dark:text-gray-300 font-poppins">
            Founded five years ago by visionary leaders Dr. Mekides Assefa and Dr. Amir Teshome, Hulu Software Labs PLC is a fully licensed and tax-compliant entity serving the Ethiopian market. We specialize in delivering innovative software solutions tailored to meet the unique needs of businesses in Ethiopia, with a steadfast commitment to excellence and regulatory compliance.            </p>
            {/* <a
              href="#mission"
              className="mt-8 inline-block bg-gradient-to-r from-blue-400 to-teal-400 border border-transparent rounded-full py-3 px-10 text-lg font-semibold text-white hover:bg-blue-600 dark:hover:bg-teal-700 transition-transform transform hover:scale-105 shadow-md font-poppins"
              data-aos="zoom-in"
            >
              {t("eplore_more_about_us")}
            </a> */}
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
      <section id="mission" className="py-16 bg-[#222D3D]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[{
              title: 'Our Mission',
              description: 'Our mission is to contribute to the global digital transformation process by providing digital solutions that automate and transform many of the day-to-day activities of the Ethiopian people. We differentiate ourselves by localizing and adapting state-of-the-art solutions to meet the unique needs of the local population.',
              icon: 'fas fa-bullseye'
            }, {
              title: 'Our Vision',
              description: 'Our vision is to be among the leading digital services providers in Ethiopia and across the Horn of Africa, bridging the gap for the international market to access local and marginalized East African societies.',
              icon: 'fas fa-eye'
            }].map((item, index) => (
              <div key={index} className="relative flex flex-col bg-[#E9F2F6] dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#25A7E5] text-white shadow-lg">
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  <h2 className="text-3xl font-extrabold text-[#25A7E5] dark:text-gray-100 font-montserrat">
                    {item.title}
                  </h2>
                </div>
                <p className="mt-4 text-lg leading-7 text-[#222D3D] dark:text-gray-300 font-poppins">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section id="values" className="py-16 bg-[#222D3D]" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-[#25A7E5] dark:text-gray-100 drop-shadow-md font-poppins">
        Our Core Values
      </h2>
      <p className="mt-4 text-xl leading-7 text-white dark:text-gray-300 max-w-2xl mx-auto font-poppins">
        The foundational principles that drive our mission to deliver excellence and shape our vision for sustainable growth, innovation, and client success.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[{
        title: 'Integrity',
        description: 'We adhere to the highest ethical standards, ensuring transparency, honesty, and accountability in every action we take.',
        icon: 'fas fa-shield-alt',
      }, {
        title: 'Innovation',
        description: 'We relentlessly seek out and implement groundbreaking ideas, driving transformative solutions that have the power to reshape industries and impact the world.',
        icon: 'fas fa-lightbulb',
      }, {
        title: 'Customer Focus',
        description: 'We are dedicated to delivering unparalleled service excellence, consistently exceeding customer expectations through tailored solutions and a commitment to long-term partnerships.',
        icon: 'fas fa-user-friends',
      }].map((value, index) => (
        <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#25A7E5] text-white shadow-lg">
              <i className={`${value.icon} text-xl`}></i>
            </div>
            <h3 className="text-2xl font-semibold text-[#222D3D] dark:text-gray-100 font-poppins">
              {value.title}
            </h3>
          </div>
          <p className="text-lg text-[#222D3D] dark:text-gray-300 font-poppins">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section id="founders" className="py-16 bg-[#222D3D]" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-[#25A7E5] dark:text-gray-100 drop-shadow-md font-poppins">
        Meet Our Founders
      </h2>
      <p className="mt-5 text-xl leading-8 text-white dark:text-gray-800 max-w-3xl mx-auto font-poppins">
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
          name: 'Ydnekachew Sime',
          title: 'Co-Founder',
          image: 'assets/founders/alemayehu.jpg',
          description:
            'Ydnekachew Sime oversees operational excellence, ensuring that all business functions work harmoniously to deliver exceptional results for our clients.',
        },
      ].map((founder, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center bg-[#1A2533] border border-[#25A7E5] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-white text-center"
          data-aos="zoom-in-up"
        >
          <div className="w-24 h-24 -mt-16 mb-4 overflow-hidden rounded-full border-4 border-[#25A7E5] shadow-md bg-white flex justify-center items-center">
            <img
              src={founder.image}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold text-[#25A7E5] mb-1">
            {founder.name}
          </h3>
          <h4 className="text-md text-gray-300 mb-3">
            {founder.title}
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed px-4">
            {founder.description}
          </p>
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
