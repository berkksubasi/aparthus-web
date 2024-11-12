import React from 'react';
import HeroSection from './components/sections/HeroSections';
import FeaturesSection from './components/sections/FeaturesSection';
import AboutSection from './components/sections/AboutSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';

const Home = () => {
  return (
    <div className="w-full scroll-smooth">
      {/* Sections */}
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default Home;
