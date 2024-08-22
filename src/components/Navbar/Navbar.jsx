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
    <nav className="bg-gradient-to-r from-blue-500 via-teal-600 to-gray-900 dark:bg-gray-900 dark:text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
              <span className="text-xl sm:text-2xl text-white font-serif font-bold">Hulu Labs</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-200 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="relative text-white text-lg hover:text-gray-200 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full font-serif font-bold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="relative text-gray-200 hover:text-white text-lg transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-200 hover:after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full font-serif font-bold"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="relative text-gray-200 hover:text-white text-lg transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-200 hover:after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full font-serif font-bold"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="relative text-gray-200 hover:text-white text-lg transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-200 hover:after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full font-serif font-bold"
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="relative text-gray-200 hover:text-white text-lg transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-200 hover:after:bg-white after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full font-serif font-bold"
            >
              Blog
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 space-y-2 from-blue-500 via-teal-600 to-gray-900 dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block text-white text-lg hover:text-gray-200 transition-all duration-300 font-serif font-bold"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="block text-gray-200 hover:text-white text-lg transition-all duration-300 font-serif font-bold"
            >
              About Us
            </Link>
            <Link
              to="/services"
              onClick={handleLinkClick}
              className="block text-gray-200 hover:text-white text-lg transition-all duration-300 font-serif font-bold"
            >
              Services
            </Link>
            <Link
              to="/projects"
              onClick={handleLinkClick}
              className="block text-gray-200 hover:text-white text-lg transition-all duration-300 font-serif font-bold"
            >
              Projects
            </Link>
            <Link
              to="/blog"
              onClick={handleLinkClick}
              className="block text-gray-200 hover:text-white text-lg transition-all duration-300 font-serif font-bold"
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
