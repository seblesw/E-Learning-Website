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
    <nav className="fixed top-0 w-full z-[9999] bg-gradient-to-r from-[#2E7D32] to-[#FBC02D] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="/assets/logo3.webp" alt="Logo" className="w-10 h-10 rounded-full bg-white p-1 shadow-md" />
            <span className="text-4xl sm:text-3xl font-extrabold text-white">{t('E-Learning')}</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-8 font-medium">
            <Link to="/Courses" className={getLinkClassName('/Courses')} onClick={handleLinkClick}>{t('Courses')}</Link>
            <Link to="/Resources" className={getLinkClassName('/Resources')} onClick={handleLinkClick}>{t('Resources')}</Link>
            <Link to="/Assignments" className={getLinkClassName('/Assignments')} onClick={handleLinkClick}>{t('Assignments')}</Link>
            <Link to="/Discussions" className={getLinkClassName('/Discussions')} onClick={handleLinkClick}>{t('Discussions')}</Link>
            <Link to="/Signup" className={getLinkClassName('/Signup')} onClick={handleLinkClick}>{t('Signup')}</Link>

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

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#25A7E5] shadow-md py-4 flex flex-col space-y-4 items-center">
            <Link to="/Courses" className="text-white text-lg" onClick={handleLinkClick}>{t('Courses')}</Link>
            <Link to="/Resources" className="text-white text-lg" onClick={handleLinkClick}>{t('Resources')}</Link>
            <Link to="/Assignments" className="text-white text-lg" onClick={handleLinkClick}>{t('Assignments')}</Link>
            <Link to="/Discussions" className="text-white text-lg" onClick={handleLinkClick}>{t('Discussions')}</Link>
            <Link to="/Signup" className={getLinkClassName('/Signup')} onClick={handleLinkClick}>{t('Signup')}</Link>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
