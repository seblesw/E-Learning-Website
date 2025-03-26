import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-white dark:text-gray-100 py-10">
      <header className="relative bg-[#222D3D] overflow-hidden shadow-lg">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-white dark:text-gray-100 drop-shadow-md font-poppins">
            Company Blog
          </h1>
          <p className="mt-4 text-xl leading-8 text-white dark:text-gray-300 font-poppins max-w-2xl mx-auto">
            Stay updated with the latest news and articles from our team.
          </p>
        </div>
      </header>
      <section className="py-16 bg-[#222D3D]"data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Blog Post One',
                description: 'Summary of Blog Post One.',
                animation: 'fade-right', 
              },
              {
                title: 'Blog Post Two',
                description: 'Summary of Blog Post Two.',
                animation: 'fade-up', 
              },
              {
                title: 'Blog Post Three',
                description: 'Summary of Blog Post Three.',
                animation: 'fade-left', 
              },
            ].map((post, index) => (
              <div
                key={index}
                className="relative flex flex-col bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                data-aos={post.animation}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-500 dark:bg-teal-600 text-white mb-6 shadow-lg">
                  <span className="text-2xl font-bold">B{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 font-poppins">
                  {post.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-poppins">
                  {post.description}
                </p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-teal-500 dark:to-teal-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
