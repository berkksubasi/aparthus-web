'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Gerekli elemanları kaydedin
ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueStructurePage = () => {
  // Chart Data
  const data = {
    labels: ['Şirket Kazancı', 'Şehir Liderleri', 'Saha Satış Personelleri', 'Vergiler ve Giderler'],
    datasets: [
      {
        data: [50, 20, 20, 10], // Dengeli ve ikna edici bir yapı için güncellenmiş yüzdeler
        backgroundColor: ['#4CAF50', '#FFC107', '#03A9F4', '#9E9E9E'],
        hoverBackgroundColor: ['#45A049', '#FFB300', '#0288D1', '#757575'],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-600">Bizimle Geleceğinizi Şekillendirin!</h1>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Neden Bizimle Çalışmalısınız?</h2>
          <p className="text-gray-700 mb-6">
            Şirketimiz, saha satış personellerine sadece yüksek kazanç fırsatları sunmakla kalmaz, aynı zamanda kariyer gelişiminizi destekler ve işinizi kolaylaştırır.
          </p>

          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <Pie data={data} />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Sunduğumuz Avantajlar</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Yüksek prim oranları ve cazip ödüller</li>
              <li>Performans bazlı bonuslar</li>
              <li>Esnek çalışma saatleri ve bağımsızlık</li>
              <li>Eğitim programları ve liderlik fırsatları</li>
              <li>Modern bir iş ortamında çalışma deneyimi</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Kariyer Yolculuğunuz</h3>
            <p className="text-gray-700">
              Şirketimizde, saha satış personeli olarak başlayarak kariyer basamaklarını tırmanabilirsiniz. Başarılı performans gösteren ekip üyeleri, liderlik pozisyonlarına terfi edebilir ve daha yüksek kazanç elde edebilir.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Kazanımlarınız</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Aylık gelir artışı</li>
              <li>Satış başına cazip primler</li>
              <li>Hedeflerinize ulaşmanız için tam destek</li>
              <li>Ekip içi motivasyon ve dayanışma</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg shadow-md mt-8">
            <h3 className="text-lg font-semibold text-green-700">"Şimdi ekibimize katılın ve kazançlarınızı artırın!"</h3>
            <p className="text-gray-700 mt-2">
              Sizin gibi yetenekli bireyler, başarı hikayemizin bir parçası olabilir. Başvurunuzu hemen gönderin ve bizimle çalışmanın avantajlarını keşfedin.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-lg font-semibold text-blue-700">Başvuru Formu</h3>
            <form
              action="/api/submitForm"
              method="post"
              className="mt-4 space-y-4"
            >
              <label className="block">
                <span className="text-gray-700">Ad Soyad</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">E-posta</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">İl - İlçe</span>
                <input
                  type="text"
                  name="location"
                  required
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Telefon Numarası</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">Satış Deneyimi</span>
                <select
                  name="experience"
                  required
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                >
                  <option value="Deneyimsiz">Deneyimsiz</option>
                  <option value="1 Yıl">1 Yıl</option>
                  <option value="2 Yıl">2 Yıl</option>
                  <option value="3+ Yıl">3+ Yıl</option>
                  <option value="5+ Yıl">5+ Yıl</option>
                </select>
              </label>

              <label className="block">
                <span className="text-gray-700">Varsa Yönlendiren Kişinin Adı Soyadı</span>
                <input
                  type="text"
                  name="referral"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                />
              </label>

              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded-md shadow-md hover:bg-green-700"
              >
                Başvuruyu Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RevenueStructurePage;
