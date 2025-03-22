import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangOptions, setShowLangOptions] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
    setShowLangOptions(false);
  };

  const getLinkClassName = (path) => {
    return location.pathname === path
      ? "relative text-white text-lg transition-all duration-300 font-serif font-bold"
      : "relative text-white hover:text-gray-300 text-lg transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 hover:after:bg-gray-300 after:left-1/2 after:top-full after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full font-serif font-bold";
  };

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLangOptions(false);
  };

  return (
    <nav className="bg-cyan-500 text-white dark:bg-gray-800 dark:text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img src="/assets/hulu_logo.png" alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
              <span className="text-xl sm:text-2xl text-white font-serif font-bold">
                {t('logo')}
              </span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClassName('/')}>{t('home')}</Link>
            <Link to="/about" className={getLinkClassName('/about')}>{t('about')}</Link>
            <Link to="/services" className={getLinkClassName('/services')}>{t('services')}</Link>
            <Link to="/blog" className={getLinkClassName('/blog')}>{t('blog')}</Link>
            <Link to="/contact" className={getLinkClassName('/contact')}>{t('contact')}</Link>
            <Link to="/Merchant Form" className={getLinkClassName('/Merchant Form')}>{t('Merchant Form')}</Link>

            <div 
              className="relative flex items-center space-x-2 cursor-pointer" 
              onClick={() => setShowLangOptions(!showLangOptions)}
            >
              <FaGlobe size={20} className="text-white hover:text-gray-300" />
              <span className="hidden sm:block text-white font-bold">
                {i18n.language.toUpperCase()}
              </span>
              {showLangOptions && (
                <div className="absolute top-8 mt-2 right-0 bg-white dark:bg-gray-700 shadow-lg rounded-md py-1 z-50">
                  <button 
                    onClick={() => toggleLanguage('en')} 
                    className="block w-full px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-teal-600 hover:text-white text-left"
                  >
                    English
                  </button>
                  <button 
                    onClick={() => toggleLanguage('am')} 
                    className="block w-full px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-teal-600 hover:text-white text-left"
                  >
                    አማርኛ
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
