import { Button } from "@/app/components/ui/Button";

export default function PreSalePage(): JSX.Element {
  const plans = [
    {
      name: "Temel Paket",
      discountedPrice: "₺999/ay",
      range: "1-20 Daire",
      features: ["Sakin Portalı", "Aidat Yönetimi", "Harcama Takibi", "Kolay İletişim"],
    },
    {
      name: "Profesyonel Paket",
      discountedPrice: "₺2,999/ay",
      range: "21-50 Daire",
      features: [
        "Sakin Portalı",
        "Tüm Temel Özellikler",
        "Raporlama Araçları",
        "Duyuru Yönetimi",
        "Yedekleme Hizmeti",
      ],
    },
    {
      name: "Kurumsal Paket",
      discountedPrice: "₺3,999/ay",
      range: "51-100 Daire",
      features: [
        "Sakin Portalı",
        "Tüm Profesyonel Özellikler",
        "Gelişmiş Harcama Takibi",
        "Özel Destek",
        "Gelişmiş Raporlama",
      ],
    },
    {
      name: "Enterprise",
      discountedPrice: "₺****/ay",
      range: "100+ Daire",
      features: [
        "Sakin Portalı",
        "Tüm Özellikler",
        "Özel Modüller",
        "Özel API Erişimi",
        "Sınırsız Kullanıcı",
        "24/7 Özel Destek",
      ],
    },
  ];

  const handlePreSaleAlert = (planName: string): void => {
    alert(`"${planName}" için ön satış çok yakında! Lütfen takipte kalın.`);
  };

  return (
    <div className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#FFD200]">
          Ön Satış Fırsatları
        </h1>
        <p className="mx-auto max-w-[600px] mt-4 text-gray-600 md:text-lg/relaxed lg:text-xl/relaxed">
          Erken kayıt yaptırarak indirimli fiyatlarımızdan yararlanın. Bu fırsatı kaçırmayın!
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
              <p className="text-sm text-gray-600">{plan.range}</p>
              <p className="text-3xl font-bold text-[#FFD200] my-4">{plan.discountedPrice}</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <span>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-6 px-4 py-2 bg-[#FFD200] text-gray-900 rounded-lg hover:bg-[#FFD200]/90"
                onClick={() => handlePreSaleAlert(plan.name)}
              >
                Satın Al
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
