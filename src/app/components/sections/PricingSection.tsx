interface Plan {
  name: string
  price: string
  range: string
  features: string[]
}

export default function PricingSection(): JSX.Element {
  const plans: Plan[] = [
    {
      name: 'Temel Paket',
      price: '₺999/ay',
      range: '1-20 Daire',
      features: ['Sakin Portalı', 'Aidat Yönetimi', 'Harcama Takibi', 'Kolay İletişim'],
    },
    {
      name: 'Profesyonel Paket',
      price: '₺2999/ay',
      range: '21-50 Daire',
      features: [
        'Sakin Portalı',
        'Tüm Temel Özellikler',
        'Raporlama Araçları',
        'Duyuru Yönetimi',
        'Yedekleme Hizmeti',
      ],
    },
    {
      name: 'Kurumsal Paket',
      price: '₺3999/ay',
      range: '51-100 Daire',
      features: [
        'Sakin Portalı',
        'Tüm Profesyonel Özellikler',
        'Gelişmiş Harcama Takibi',
        'Özel Destek',
        'Gelişmiş Raporlama',
      ],
    },
    {
      name: 'Enterprise',
      price: '₺****/ay',
      range: '100+ Daire',
      features: [
        'Sakin Portalı',
        'Tüm Özellikler',
        'Özel Modüller',
        'Özel API Erişimi',
        'Sınırsız Kullanıcı',
        '24/7 Özel Destek',
      ],
    },
  ]

  return (
    <section id="fiyatlandırma" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Esnek ve Uygun Fiyatlar
        </h2>
        <p className="max-w-[600px] mx-auto mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Daire sayısına göre en uygun paketi seçin ve hemen kullanmaya başlayın.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                index === 1 ? 'border-2 border-[#FFD200]' : ''
              }`}
            >
              {/* Plan Başlığı */}
              <h3
                className={`text-xl font-bold ${
                  index === 1 ? 'text-[#FFD200]' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </h3>
              {/* Plan Aralığı */}
              <p className="text-sm text-gray-600">{plan.range}</p>
              {/* Plan Fiyatı */}
              <p
                className={`text-3xl font-bold my-4 ${
                  index === 1 ? 'text-[#FFD200]' : 'text-gray-900'
                }`}
              >
                {plan.price}
              </p>
              {/* Plan Özellikleri */}
              <ul className="space-y-2 text-gray-600">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <span className="text-[#FFD200]">✓</span> {feature}
                  </li>
                ))}
              </ul>
              {/* Satın Al Butonu */}
              <button
                className={`mt-6 px-4 py-2 rounded-lg text-lg font-semibold ${
                  index === 1
                    ? 'bg-[#FFD200] text-gray-900 hover:text-white hover:bg-[#FFD200]/90'
                    : 'bg-gray-100 hover:bg-[#FFD200] text-gray-900 hover:text-white'
                }`}
              >
                Satın Al
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
