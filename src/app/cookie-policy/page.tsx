import React from 'react';

const CookiePolicy = () => (
  <div className="bg-gray-50 min-h-screen flex items-center justify-center">
    <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Çerez Politikası
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        Son Güncelleme Tarihi: 9 Aralık 2024
      </p>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Çerez Nedir?</h2>
        <p className="text-gray-600">
          Çerezler, kullanıcıların cihazlarına kaydedilen küçük metin dosyalarıdır.
          Uygulamamız, kullanıcı deneyimini geliştirmek için çerezleri kullanır.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          2. Hangi Çerezler Kullanılır?
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Oturum Çerezleri</li>
          <li>Analitik Çerezler</li>
          <li>Reklam Çerezleri</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          3. Çerezleri Nasıl Yönetebilirsiniz?
        </h2>
        <p className="text-gray-600">
          Tarayıcı ayarlarından çerezlerinizi yönetebilir veya silebilirsiniz. Ancak,
          çerezleri devre dışı bırakmak, bazı özelliklerin düzgün çalışmamasına neden olabilir.
        </p>
      </section>
    </div>
  </div>
);

export default CookiePolicy;
