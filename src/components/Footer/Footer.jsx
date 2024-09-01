import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300"data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-serif">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-serif">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 font-serif">Our Company</h3>
            <p className="text-gray-200">
              Leading provider of business solutions that empower companies to thrive in the digital world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
  <li><a href="/" className="hover:text-white font-serif">Home</a></li>
  <li><a href="/about" className="hover:text-white font-serif">About Us</a></li>
  <li><a href="/services" className="hover:text-white font-serif">Services</a></li>
  <li><a href="/contact" className="hover:text-white font-serif">Contact</a></li>
</ul>

          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 font-serif">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook /></a>
              <a href="#" className="hover:text-white"><Twitter /></a>
              <a href="#" className="hover:text-white"><Instagram /></a>
              <a href="#" className="hover:text-white"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
            <p className="text-gray-200">
              Visit our office at the heart of the business district, conveniently located for all your business needs.
            </p>
            <p className="mt-4 text-gray-200">
              <strong>Phone:</strong> (+2519) 0000000<br />
              <strong>Email:</strong> info@hululabs.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-serif">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} Hulu Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
