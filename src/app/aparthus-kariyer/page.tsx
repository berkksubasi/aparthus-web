'use client';

import React from 'react';
import Link from 'next/link';

export default function CareerPage() {
  const positions = [
    {
      id: 'saha-satis-danismani',
      title: 'Saha Satış Danışmanı',
      location: 'Türkiye Geneli',
      type: 'Serbest Zamanlı',
      description:
        'Aparthus’un yenilikçi apartman ve site yönetim çözümlerini tanıtmak, müşteri portföyünü genişletmek ve potansiyel müşterilerle güçlü ilişkiler kurmak için saha satış ekibimize katılacak danışmanlar arıyoruz. Esnek çalışma saatleri ile kendi zamanınızı yönetebileceğiniz bir pozisyon!',
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-[#FFD200] py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Kariyer</h1>
          <p className="text-lg text-gray-800 mt-4">
            Aparthus ekibine katılarak yenilikçi projelerde yer almak ister misiniz? Aşağıdaki pozisyonlara göz atın!
          </p>
        </div>
      </header>

      {/* Job Openings */}
      <main className="container mx-auto px-4 py-16 space-y-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Açık Pozisyonlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((position) => (
            <div key={position.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{position.location} • {position.type}</p>
              <p className="text-gray-700 mt-4">{position.description}</p>
              <Link
                href={`/aparthus-kariyer/${position.id}`}
                className="mt-4 inline-block bg-[#FFD200] text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-[#FFD200]/90 transition"
              >
                Detayları Gör
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* Call-to-Action */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Aparthus'ta Kariyer Yolculuğuna Başlayın
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Ekibimize katılmak ve bizimle birlikte büyümek için şimdi başvurun.
          </p>
          <Link
            href="/aparthus-iletisim"
            className="inline-block bg-[#FFD200] text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD200]/90 transition"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
}
