import React from 'react';

const TermsOfService = () => (
  <div className="bg-gray-50 min-h-screen flex items-center justify-center">
    <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Kullanım Koşulları</h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        Son Güncelleme Tarihi: 9 Aralık 2024
      </p>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Hizmetin Tanımı</h2>
        <p className="text-gray-600">
          Aparthus, apartman ve site yönetimi için dijital bir çözümdür. Aidat
          yönetimi, bildirim gönderimi ve finansal raporlama gibi özellikler
          sunar.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          2. Kullanıcı Yükümlülükleri
        </h2>
        <p className="text-gray-600">
          Uygulamayı yalnızca yasal amaçlarla kullanmayı kabul edersiniz. Diğer
          kullanıcıların deneyimini olumsuz etkileyecek şekilde davranışlardan
          kaçınmanız gereklidir.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          3. Sorumluluk Reddi
        </h2>
        <p className="text-gray-600">
          Aparthus, hizmet kesintileri veya teknik sorunlardan dolayı sorumlu
          tutulamaz. Kullanıcı verilerinin güvenliği için gerekli önlemler
          alınmıştır ancak mutlak güvenlik garanti edilmez.
        </p>
      </section>
    </div>
  </div>
);

export default TermsOfService;
