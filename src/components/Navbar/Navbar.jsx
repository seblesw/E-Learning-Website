import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-700 via-gray-800 to-black dark:bg-gray-900 dark:text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex justify-between items-center">

          {/* Logo on the left */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
              <span className="text-2xl sm:text-3xl font-bold text-white">Hulu Labs</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-400 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="relative text-white text-lg font-medium hover:text-gray-400 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">Home</Link>
            <Link to="/about" className="relative text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-300 hover:after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">About Us</Link>
            <Link to="/services" className="relative text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-300 hover:after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">Services</Link>
            <Link to="/projects" className="relative text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-300 hover:after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">Projects</Link>
            <Link to="/blog" className="relative text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-300 hover:after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">Blog</Link>
            <Link to="/contact" className="relative text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-300 hover:after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">Contact Us</Link>
            <Link to="/careers" className="relative text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-300 hover:after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">Careers</Link>
            <button className="px-4 py-2 bg-gray-700 text-white font-medium rounded-full hover:bg-gray-600 transition-all duration-300 shadow-md">Get in Touch</button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 space-y-2 bg-gray-800 p-4 rounded-lg shadow-md">
            <Link to="/" onClick={handleLinkClick} className="block text-white text-lg font-medium hover:text-gray-400 transition-all duration-300">Home</Link>
            <Link to="/about" onClick={handleLinkClick} className="block text-gray-300 hover:text-white text-lg font-medium transition-all duration-300">About Us</Link>
            <Link to="/services" onClick={handleLinkClick} className="block text-gray-300 hover:text-white text-lg font-medium transition-all duration-300">Services</Link>
            <Link to="/projects" onClick={handleLinkClick} className="block text-gray-300 hover:text-white text-lg font-medium transition-all duration-300">Projects</Link>
            <Link to="/blog" onClick={handleLinkClick} className="block text-gray-300 hover:text-white text-lg font-medium transition-all duration-300">Blog</Link>
            <Link to="/contact" onClick={handleLinkClick} className="block text-gray-300 hover:text-white text-lg font-medium transition-all duration-300">Contact Us</Link>
            <Link to="/careers" onClick={handleLinkClick} className="block text-gray-300 hover:text-white text-lg font-medium transition-all duration-300">Careers</Link>
            <button onClick={handleLinkClick} className="w-full px-4 py-2 bg-gray-700 text-white font-medium rounded-full hover:bg-gray-600 transition-all duration-300 shadow-md">Get in Touch</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;