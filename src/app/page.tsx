'use client'

import { NextSeo } from 'next-seo'
import ContactSection from './components/sections/ContactSection'
import FeatureSection from './components/sections/FeatureSection'
import GetStartedSection from './components/sections/GetStartedSection'
import MainSection from './components/sections/MainSection'
import PricingSection from './components/sections/PricingSection'
import WhyAparthusSection from './components/sections/WhyAparthusSection'

<NextSeo
  title="Aparthus - Modern Apartman Yönetimi"
  description="Aparthus ile apartman ve site yönetiminizi kolaylaştırın. Şeffaf, güvenilir ve modern çözümler sunuyoruz."
  canonical="https://aparthus.com/"
/>

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
