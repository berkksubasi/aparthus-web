import React from 'react';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HeroSection from './components/sections/HeroSections';
import FeaturesSection from './components/sections/FeaturesSection';
import AboutSection from './components/sections/AboutSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';

const Home = () => {
  return (
    <div className="w-full scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
