import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Assignments = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);

  return (
    <div className="font-sans antialiased bg-white text-green-900 relative">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-green-900 drop-shadow-md font-serif">
          Our Assignments
        </h1>
        <p className="mt-4 text-xl leading-8 text-green-900 font-serif max-w-2xl mx-auto">
          A collection of assignments to enhance your learning experience.
        </p>
      </div>
      <section className="py-16" data-aos="fade-up ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Assignment One',
                description: 'Details about Assignment One.',
                animation: 'fade-right', 
              },
              {
                title: 'Assignment Two',
                description: 'Details about Assignment Two.',
                animation: 'fade-up', 
              },
              {
                title: 'Assignment Three',
                description: 'Details about Assignment Three.',
                animation: 'fade-left', 
              },
            ].map((assignment, index) => (
              <div
                key={index}
                className="relative flex flex-col bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                data-aos={assignment.animation}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white mb-6 shadow-lg">
                  <span className="text-2xl font-bold">A{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4 font-serif">
                  {assignment.title}
                </h3>
                <p className="text-lg text-black font-serif">
                  {assignment.description}
                </p>
                <div className="absolute inset-0 rounded-xl bg-yellow-100 opacity-50 hover:opacity-70 transition-opacity duration-300 shadow-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Assignments;
