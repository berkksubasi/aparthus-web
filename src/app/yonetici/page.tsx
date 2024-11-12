'use client';

import React from 'react';
import Image from 'next/image';

const Yonetici = () => {
  return (
    <div className="bg-white min-h-screen pt-[80px]">
      {/* Başlık (Hero Alanı) */}
      <header className="bg-gradient-to-r from-yellow-300 to-yellow-400 py-24 text-center text-white shadow-xl rounded-b-3xl">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">Site / Apartman Yöneticileri için Aparthus</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Aparthus ile yaşam alanlarındaki tüm yönetim süreçlerini kolay, etkili ve hızlı bir şekilde yönetin.
        </p>
      </header>

      {/* İçerik Bölümü */}
      <main className="container mx-auto py-24 px-6">

        {/* Çağrı Aksiyonu */}
        <section className="text-center py-12">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">Aparthus ile Yönetimi Kolaylaştırın!</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Aparthus ile yönetime hemen başlayarak yaşam alanlarınızda fark yaratın.
          </p>
          <a
            href="/iletisim"
            className="bg-green-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Bize Ulaşın
          </a>
        </section>

        {/* Neden Aparthus? */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Neden Aparthus?</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Aparthus ile yaşam alanınızı dijital ortamda yönetin, yönetime dair tüm işlerinizi tek ekrandan, kolayca yapın.
            Yönetim süreçlerinizi daha hızlı ve verimli hale getirebilir, yaşam alanlarınızda fark yaratabilirsiniz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center bg-yellow-400 shadow-2xl rounded-2xl p-10 transform transition-all hover:scale-105 hover:shadow-3xl hover:rounded-3xl border-2 border-transparent hover:border-yellow-600">
              <Image
                src="/images/aparthus-yönetici-kolay-yönetim.png"
                alt="Kolay Yönetim"
                width={120}
                height={120}
                objectFit="cover"
                objectPosition="center"
                style={{
                  objectPosition: 'center',
                  display: 'block',
                  borderRadius: '50%',
                  border: '2px solid #fbbf24',
                }}
              />
              <h3 className="text-2xl font-semibold mt-6 text-gray-800">Kolay Yönetim</h3>
              <p className="mt-4 text-gray-600 text-center">
                Apartman ve site yönetiminde ihtiyacınız olan tüm araçları tek bir platformda sunarak iş yükünüzü azaltır.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-10 transform transition-all hover:scale-105 hover:shadow-3xl hover:rounded-3xl border-2 border-transparent hover:border-yellow-600">
              <Image
                src="/images/etkin-iletisim.png"
                alt="Etkin İletişim"
                width={120}
                height={120}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  borderRadius: '50%',
                  border: '2px solid #fbbf24',
                }}
              />
              <h3 className="text-2xl font-semibold mt-6 text-gray-800">Etkin İletişim</h3>
              <p className="mt-4 text-gray-600 text-center">
                Sakinler ile hızlı ve kolay iletişim kurmanızı sağlayan araçlar ile bilgi akışını sağlıklı tutun.
              </p>
            </div>
          </div>
        </section>

       {/* Avantajlar */}
<section >
  <h2 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">
    Aparthus ile Kazançlı Çıkın
  </h2>
  <p className="text-gray-700 mb-6 text-center">
    Aparthus, yalnızca yönetimi kolaylaştırmakla kalmaz, aynı zamanda finansal ve operasyonel faydalar sunar:
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
    <div className="flex flex-col items-center bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 transform transition-all hover:scale-105 hover:shadow-3xl hover:rounded-3xl border-2 border-transparent hover:border-yellow-600 w-full">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Raporlama ve Analiz</h3>
      <p className="mt-4 text-gray-700 text-center">
        Aparthus ile gelir ve giderlerinizi kolayca takip edin, finansal raporlarla bütçenizi yönetin.
      </p>
    </div>

    <div className="flex flex-col items-center bg-gradient-to-r from-green-100 to-green-200 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 transform transition-all hover:scale-105 hover:shadow-3xl hover:rounded-3xl border-2 border-transparent hover:border-yellow-600 w-full">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Otomatik Bildirimler</h3>
      <p className="mt-4 text-gray-700 text-center">
        Faturalar ve duyurular için sakinlere otomatik hatırlatmalar gönderin.
      </p>
    </div>

    <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-200 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 transform transition-all hover:scale-105 hover:shadow-3xl hover:rounded-3xl border-2 border-transparent hover:border-yellow-600 w-full">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Yasal Takip</h3>
      <p className="mt-4 text-gray-700 text-center">
        Aidat ödemelerini takip edin ve yasal süreçlerde kontrol sağlayın.
      </p>
    </div>
  </div>
</section>


      </main>
    </div>
  );
};

export default Yonetici;
