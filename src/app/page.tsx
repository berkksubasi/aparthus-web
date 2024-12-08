'use client'

import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import ContactSection from './components/sections/ContactSection'
import FeatureSection from './components/sections/FeatureSection'
import GetStartedSection from './components/sections/GetStartedSection'
import MainSection from './components/sections/MainSection'
import PricingSection from './components/sections/PricingSection'
import WhyAparthusSection from './components/sections/WhyAparthusSection'

export default function Home(): JSX.Element {
  return (

    <main className="flex-1">
      <MainSection />
      <FeatureSection />
      <WhyAparthusSection />
      <PricingSection />
      <GetStartedSection />
      <ContactSection />
    </main>
  )
}
