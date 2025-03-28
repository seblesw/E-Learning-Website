import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2E7D32] to-[#a18c55] text-gray-300" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-poppins">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="text-gray-100">
              Empowering learners worldwide with high-quality online courses and resources to enhance skills and careers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/courses" className="hover:text-white">Courses</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook /></a>
              <a href="#" className="hover:text-white"><Twitter /></a>
              <a href="#" className="hover:text-white"><Instagram /></a>
              <a href="#" className="hover:text-white"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-gray-100">
              Have questions? Get in touch with us for support and inquiries.
            </p>
            <p className="mt-4 text-gray-100">
              <strong>Email:</strong> support@elearninghub.com<br />
              <strong>Phone:</strong> (+123) 456-7890
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-100">
            &copy; {new Date().getFullYear()} E-Learning Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
