'use client';
import React, { useEffect, useState } from 'react';

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 text-gray-800 m-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/futures-apartment.jpg")',
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="max-w-6xl text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 sm:mb-8 md:mb-10 animate-fade-in-up">
          Kurumsal
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
          <span className="font-semibold text-white">Aparthus Solutions</span>, site yönetimini daha modern, güvenli ve pratik hale getirmek için tasarlandı. Gerçek zamanlı bildirimler, QR kod erişimi ve akıllı bakım planlamasıyla artık sitenizi yönetmek çok daha kolay.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-8">
          <a
            href="#contact"
            className="inline-block bg-white text-yellow-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transition-transform transform hover:scale-105 duration-300"
          >
            İletişime Geçin
          </a>
          <a
            href="#features"
            className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-white hover:text-yellow-600 transition-transform transform hover:scale-105 duration-300"
          >
            Çözümlerimizi Keşfedin
          </a>
        </div>
      </div>

      {/* Animated Decorative Circles for Modern Look */}
      <div
        className="absolute top-0 right-0 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-40 blur-2xl animate-bounce"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }} 
      ></div>
    </section>
  );
};

export default AboutSection;
