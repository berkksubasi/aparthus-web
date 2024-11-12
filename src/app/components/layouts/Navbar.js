'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`bg-yellow-400 text-white shadow-lg w-full fixed top-0 z-50 transition-transform duration-500 ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo/Brand */}
        <a href="/" className="flex row-auto items-center text-2xl font-bold text-green-500 hover:text-white">
          <Image src="/images/logo-dark-horizontal.png" alt="Logo" width={125} height={50} />
        </a>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Links (Desktop) */}
        <ul className="md:flex md:space-x-8 hidden md:block">
          {/* "Kimler İçin?" Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-md font-semibold text-gray-900 hover:text-white transition-all duration-300 flex items-center"
            >
              Kimler İçin?
              <FaChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-yellow-400 text-gray-900 w-56 mt-2 rounded-md shadow-lg">
                <li
                  className="px-4 py-2 hover:bg-yellow-300 hover:rounded-md cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <Link href="/yonetici">
                    <i className="font-bold">Site / Apartman Yöneticisi</i>
                  </Link>
                  <p className="text-sm">Yaşam alanı yönetimini kolaylaştırır.</p>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-300 hover:rounded-md cursor-pointer" onClick={toggleDropdown}>
                  <a href="#management-company" className="font-bold">Yönetim Firması</a>
                  <p className="text-sm">Birden fazla siteyi tek yerden yönetin.</p>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-300 hover:rounded-md cursor-pointer" onClick={toggleDropdown}>
                  <a href="#resident" className="font-bold">Konut Sakini</a>
                  <p className="text-sm">Avantajlardan yararlanmak için yönetime katılın.</p>
                </li>
              </ul>
            )}
          </li>
          
          <li><a href="#features" className="text-md font-semibold text-gray-900 hover:text-white transition-all duration-300">Çözümlerimiz</a></li>
          <li><a href="#about" className="text-md font-semibold text-gray-900 hover:text-white transition-all duration-300">Kurumsal</a></li>
          <li><a href="#team" className="text-md font-semibold text-gray-900 hover:text-white transition-all duration-300">Ekibimiz</a></li>
          <li><a href="#contact" className="text-md font-semibold text-gray-900 hover:text-white transition-all duration-300">İletişim</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-yellow-400 w-full">
          <ul className="space-y-4 py-4 px-6">
            {/* Kimler İçin Dropdown for Mobile */}
            <li>
              <button
                onClick={toggleDropdown}
                className="block text-md font-semibold text-gray-900 hover:text-white transition-all duration-300 flex items-center w-full"
              >
                Kimler İçin?
                <FaChevronDown className="ml-1" />
              </button>
              {isDropdownOpen && (
                <ul className="space-y-4 py-2 pl-4">
                  <li><a href="#site-manager" className="block text-md font-bold text-gray-900 hover:text-white transition-all duration-300" onClick={toggleMenu}>Site / Apartman Yöneticisi</a></li>
                  <li><a href="#management-company" className="block text-md font-bold text-gray-900 hover:text-white transition-all duration-300" onClick={toggleMenu}>Yönetim Firması</a></li>
                  <li><a href="#resident" className="block text-md font-bold text-gray-900 hover:text-white transition-all duration-300" onClick={toggleMenu}>Konut Sakini</a></li>
                </ul>
              )}
            </li>

            <li><a href="#features" className="block text-md font-semibold text-gray-900 hover:text-white transition-all duration-300" onClick={toggleMenu}>Çözümlerimiz</a></li>
            <li><a href="#about" className="block text-md font-semibold text-gray-900 hover:text-white transition-all duration-300" onClick={toggleMenu}>Kurumsal</a></li>
            <li><a href="#team" className="block text-md font-semibold text-gray-900 hover:text-white transition-all duration-300" onClick={toggleMenu}>Ekibimiz</a></li>
            <li><a href="#contact" className="block text-md font-semibold text-gray-900 hover:text-white transition-all duration-300" onClick={toggleMenu}>İletişim</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
