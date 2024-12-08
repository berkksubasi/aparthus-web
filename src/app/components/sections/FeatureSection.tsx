import { Receipt, MessageSquare, BarChart3, Building2, Shield, Users } from 'lucide-react'

interface Feature {
  icon: React.ElementType
  title: string
  description: string
}

export default function FeatureSection(): JSX.Element {
  const features: Feature[] = [
    {
      icon: Receipt,
      title: 'Dijital Aidat Yönetimi',
      description: 'Aidat toplama ve takibini kolaylaştırın, ödemeleri dijital ortamda alın.',
    },
    {
      icon: MessageSquare,
      title: 'Kolay İletişim',
      description: 'Duyuru ve bildirimleri anında iletin, geri bildirim alın.',
    },
    {
      icon: BarChart3,
      title: 'Harcama Takibi',
      description: 'Gelir ve giderleri şeffaf bir şekilde yönetin, raporlayın.',
    },
    {
      icon: Building2,
      title: 'Bina Yönetimi',
      description: 'Bakım, onarım ve diğer hizmetleri tek platformdan yönetin.',
    },
    {
      icon: Shield,
      title: 'Güvenli Altyapı',
      description: 'Verileriniz güvenle saklanır, yetkisiz erişime karşı korunur.',
    },
    {
      icon: Users,
      title: 'Sakin Portalı',
      description: 'Sakinler ödemelerini görüntüleyebilir, taleplerini iletebilir.',
    },
  ]

  return (
    <section id="özellikler" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Başlık ve Açıklama */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Tüm İhtiyaçlarınız İçin Tek Platform
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-lg lg:text-xl">
            Aparthus ile site ve apartman yönetimini dijitalleştirin, zamandan tasarruf edin ve süreçlerinizi kolaylaştırın.
          </p>
        </div>

        {/* Özellik Kartları */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {/* Simge */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#FFD200]/20">
                <feature.icon className="h-8 w-8 text-[#FFD200]" />
              </div>

              {/* Başlık */}
              <h3 className="mb-3 text-xl font-semibold text-gray-800">{feature.title}</h3>

              {/* Açıklama */}
              <p className="text-center text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
