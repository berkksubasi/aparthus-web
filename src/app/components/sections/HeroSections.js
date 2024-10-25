'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden m-0 p-0"
    >
      {/* Background Image with parallax effect */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/building-management.jpg")',
          transform: `translateY(${scrollY * 0.3}px)`, 
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-40"></div>

      {/* Floating Decorative Circles */}
      <div
        className="absolute w-44 h-44 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-300 opacity-20 top-10 sm:top-20 left-5 sm:left-10"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div
        className="absolute w-60 h-60 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 opacity-20 bottom-10 sm:bottom-20 right-5 sm:right-10"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      ></div>

      {/* Content */}
      <div className="text-center px-4 sm:px-0 relative z-10" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
        {/* Heading */}
        <div className="flex items-center justify-center ">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={250}
          height={125}
          className="inline-block mb-12"
        />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
          <span className="text-yellow-400">Apartman ve Site Yönetim Çözümleri</span>
          <span className="block text-white">ile Geleceğe Adım Atın</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-normal mb-6 text-gray-200">
          Apartman ve Site Yönetiminin Geleceği
        </p>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-gray-300 max-w-2xl mx-auto">
          Site yönetimini modern, güvenli ve pratik hale getiren platformumuz, yönetim görevlerinizi kolaylaştırır, iletişimi güçlendirir ve günlük işlemleri daha verimli hale getirir.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#features"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-white transition-transform transform hover:scale-105"
          >
            Çözümleri Keşfet
          </a>
          <a
            href="#contact"
            className="inline-block bg-transparent border-2 border-yellow-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition-transform transform hover:scale-105"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
