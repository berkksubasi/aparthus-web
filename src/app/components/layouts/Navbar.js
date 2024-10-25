'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <ul className={`md:flex md:space-x-8 hidden md:block`}>
          <li>
            <a
              href="#hero"
              className="text-md font-semibold text-gray-900 hover:text-white transition-all duration-300"
            >
              Anasayfa
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-md font-semibold text-gray-900 hover:text-white transition-all duration-300"
            >
              Çözümlerimiz
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-md font-semibold text-gray-900 hover:text-white transition-all duration-300"
            >
              Kurumsal
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="text-md font-semibold text-gray-900 hover:text-white transition-all duration-300"
            >
              Ekibimiz
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-md font-semibold text-gray-900 hover:text-white transition-all duration-300"
            >
              İletişim
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-yellow-400 w-full">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <a
                href="#hero"
                className="block text-md font-semibold text-gray-900 hover:text-white transition-all duration-300"
                onClick={toggleMenu}
              >
                Anasayfa
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="block text-md font-semibold text-gray-900 hover:text-white transition-all duration-300"
                onClick={toggleMenu}
              >
                Çözümlerimiz
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-md font-semibold text-gray-900 hover:text-white transition-all duration-300"
                onClick={toggleMenu}
              >
                Kurumsal
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="block text-md font-semibold text-gray-900 hover:text-white transition-all duration-300"
                onClick={toggleMenu}
              >
                Ekibimiz
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-md font-semibold text-gray-900 hover:text-white transition-all duration-300"
                onClick={toggleMenu}
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
