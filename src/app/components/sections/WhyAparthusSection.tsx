import { Check } from 'lucide-react'
import { Button } from '../ui/Button'

export default function WhyAparthusSection(): JSX.Element {
  const benefits = [
    '%99.9 Kesintisiz Hizmet',
    '7/24 Teknik Destek',
    'Kolay Entegrasyon',
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-2 items-center">
          {/* Avantajlar Bölümü */}
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-[#FFD200]/10 px-3 py-1 text-sm text-[#FFD200]">
              Neden Aparthus?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Yönetim Süreçlerinizi Modernleştirin
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Aparthus, modern site ve apartman yönetimi için ihtiyacınız olan tüm araçları tek bir platformda sunuyor.
              Aidat toplama, harcama takibi ve iç iletişim süreçlerinizi dijitalleştirerek yönetim işlerinizi kolaylaştırıyoruz.
            </p>
            <ul className="grid gap-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD200] shadow-md">
                    <Check className="h-5 w-5 text-gray-900" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Görsel ve CTA */}
          <div className="relative bg-white p-8 rounded-lg shadow-lg">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#FFD200]/20 via-white to-[#FFD200]/20 rounded-lg blur-md"></div>
            <p className="text-gray-600 leading-relaxed md:text-lg lg:text-xl mb-6">
              Aparthus, süreçlerinizi optimize etmek ve zamandan tasarruf etmenize yardımcı olmak için en iyi teknolojiyi sunar.
              Sistemimiz, şeffaf ve güvenilir yönetim çözümleri sağlar.
            </p>
            <Button className="bg-[#FFD200] text-gray-900 hover:bg-[#FFD200]/90 px-6 py-3 text-lg rounded-md">
              Daha Fazla Bilgi Al
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
