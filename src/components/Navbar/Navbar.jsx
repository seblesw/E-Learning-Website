import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'react-feather';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const getLinkClassName = (path) => {
    return location.pathname === path
      ? "relative text-teal-600 text-lg transition-all duration-300 font-serif font-bold"
      : "relative text-gray-800 hover:text-teal-600 text-lg transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 hover:after:bg-teal-600 after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full font-serif font-bold";
  };

  return (
    <nav className="bg-gradient-to-r from-blue-200 via-teal-300 to-white dark:bg-gray-800 dark:text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img src="/assets/hulu_logo.png" alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
              <span className="text-xl sm:text-2xl text-gray-800 font-serif font-bold">Hulu Labs</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClassName('/')}>
              Home
            </Link>
            <Link to="/about" className={getLinkClassName('/about')}>
              About Us
            </Link>
            <Link to="/services" className={getLinkClassName('/services')}>
              Services
            </Link>
            <Link to="/projects" className={getLinkClassName('/projects')}>
              Projects
            </Link>
            <Link to="/blog" className={getLinkClassName('/blog')}>
              Blog
            </Link>
            <Link to="/contact" className={getLinkClassName('/contact')}>
              Contact
            </Link>
            <Link to="/waitlist" className={getLinkClassName('/waitlist')}>
              Waitlist
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 bg-gradient-to-r from-blue-400 via-teal-300 to-white dark:bg-gray-800 p-4 rounded-lg shadow-md space-y-2">
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={handleLinkClick} className={getLinkClassName('/')}>
                Home
              </Link>
              <Link to="/about" onClick={handleLinkClick} className={getLinkClassName('/about')}>
                About Us
              </Link>
              <Link to="/services" onClick={handleLinkClick} className={getLinkClassName('/services')}>
                Services
              </Link>
              <Link to="/projects" onClick={handleLinkClick} className={getLinkClassName('/projects')}>
                Projects
              </Link>
              <Link to="/blog" onClick={handleLinkClick} className={getLinkClassName('/blog')}>
                Blog
              </Link>
              <Link to="/contact" onClick={handleLinkClick} className={getLinkClassName('/contact')}>
                Contact
              </Link>
              <Link to="/waitlist" onClick={handleLinkClick} className={getLinkClassName('/waitlist')}>
                Waitlist
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
