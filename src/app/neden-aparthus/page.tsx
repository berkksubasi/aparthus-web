'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhyAparthus() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-[#FFD200] py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Neden Aparthus?</h1>
          <p className="text-lg text-gray-700 mt-4">
            Apartman ve site yönetiminizi modern teknolojilerle optimize edin.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Feature Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/feature/feature-1.png"
            alt="Şeffaf Yönetim"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Şeffaf Yönetim
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Aparthus, apartman ve site yönetiminde şeffaflığı ön planda tutar.
              Gelir-gider tabloları ve aidat ödemeleri gibi kritik süreçler,
              sistemimiz üzerinden herkesin erişimine açık ve kolayca takip
              edilebilir hale gelir.
            </p>
          </div>
        </section>

        {/* Feature Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Zaman ve Maliyet Tasarrufu
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Aparthus, manuel işlemleri azaltarak zamandan tasarruf sağlar.
              Otomatik bildirimler, aidat hatırlatmaları ve online ödeme
              sistemleri sayesinde süreçlerinizi hızlandırabilirsiniz.
            </p>
          </div>
          <Image
            src="/feature/feature-2.png"
            alt="Zaman ve Maliyet Tasarrufu"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </section>

        {/* Feature Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/feature/feature-3.png"
            alt="Kolay Kullanım"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Kolay ve Hızlı Kullanım
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Kullanıcı dostu arayüzümüz sayesinde hem apartman yöneticileri hem
              de sakinler, sistemimizi kolaylıkla kullanabilir. İhtiyacınız olan
              her şey sadece birkaç tıklama uzağınızda.
            </p>
          </div>
        </section>
      </main>

      {/* Call-to-Action */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">
            Aparthus ile daha verimli bir yönetim deneyimine hazır mısınız?
          </h2>
          <p className="text-gray-400 mt-4">
            Aparthus'u deneyimleyerek apartman yönetimini kolaylaştırın.
          </p>
          <Link
            href="/aparthus-iletisim"
            className="inline-block mt-6 bg-[#FFD200] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD200]/90"
          >
            Bize Ulaşın
          </Link>
        </div>
      </footer>
    </div>
  );
}
