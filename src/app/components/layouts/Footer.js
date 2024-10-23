import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Brand and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Yunis Solutions</h2>
          <p className="text-gray-400">
            Modern, güvenli, pratik apartman ve site yönetimi çözümleriyle hayatınızı kolaylaştırıyoruz.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Hızlı Bağlantılar</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-yellow-400 transition-colors">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-yellow-400 transition-colors">
                Özellikler
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-yellow-400 transition-colors">
                Ekibimiz
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">
                İletişim
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">İletişim Bilgileri</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>+90 123 456 789</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <span>info@yunissolutions.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>Mersin, Türkiye</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 border-t border-gray-700 pt-6 flex justify-center space-x-6">
        <a
          href="#"
          className="text-white hover:text-yellow-400 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#"
          className="text-white hover:text-yellow-400 transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          className="text-white hover:text-yellow-400 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Yunis Solutions. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
