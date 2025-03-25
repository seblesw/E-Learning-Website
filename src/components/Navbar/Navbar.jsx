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
      ? "text-white text-lg font-medium"
      : "text-white hover:text-gray-300 text-lg font-medium";
  };

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLangOptions(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[9999] bg-[#25A7E5] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
            <span className="text-4xl sm:text-3xl font-extrabold text-white">{t('logo')}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <Link to="/" className={getLinkClassName('/')} onClick={handleLinkClick}>{t('home')}</Link>
            <Link to="/about" className={getLinkClassName('/about')} onClick={handleLinkClick}>{t('about')}</Link>
            <Link to="/services" className={getLinkClassName('/services')} onClick={handleLinkClick}>{t('services')}</Link>
            <Link to="/blog" className={getLinkClassName('/blog')} onClick={handleLinkClick}>{t('blog')}</Link>
            <Link to="/contact" className={getLinkClassName('/contact')} onClick={handleLinkClick}>{t('contact')}</Link>
            <Link to="/Merchant Form" className={getLinkClassName('/Merchant Form')} onClick={handleLinkClick}>{t('Merchant Form')}</Link>

            {/* Language Selector */}
            <div className="relative flex items-center space-x-2 cursor-pointer" onClick={() => setShowLangOptions(!showLangOptions)}>
              <FaGlobe size={20} className="text-white hover:text-gray-300" />
              <span className="hidden sm:block text-white font-medium">
                {i18n.language.toUpperCase()}
              </span>
              {showLangOptions && (
                <div className="absolute top-8 mt-2 right-0 bg-white shadow-lg rounded-md py-1 z-50">
                  <button onClick={() => toggleLanguage('en')} className="block w-full px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white text-left">English</button>
                  <button onClick={() => toggleLanguage('am')} className="block w-full px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white text-left">አማርኛ</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#25A7E5] shadow-md py-4 flex flex-col space-y-4 items-center">
            <Link to="/" className="text-white text-lg" onClick={handleLinkClick}>{t('home')}</Link>
            <Link to="/about" className="text-white text-lg" onClick={handleLinkClick}>{t('about')}</Link>
            <Link to="/services" className="text-white text-lg" onClick={handleLinkClick}>{t('services')}</Link>
            <Link to="/blog" className="text-white text-lg" onClick={handleLinkClick}>{t('blog')}</Link>
            <Link to="/contact" className="text-white text-lg" onClick={handleLinkClick}>{t('contact')}</Link>
            <Link to="/Merchant Form" className="text-white text-lg" onClick={handleLinkClick}>{t('Merchant Form')}</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
