import React from 'react';

const DataProcessingPolicy = () => (
  <div className="bg-gray-50 min-h-screen flex items-center justify-center">
    <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Veri İşleme Politikası
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        Son Güncelleme Tarihi: 9 Aralık 2024
      </p>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Toplanan Veriler</h2>
        <p className="text-gray-600">
          Toplanan veriler arasında ad, e-posta adresi, kullanım verileri ve
          cihaz bilgileri bulunmaktadır. Bu bilgiler, hizmet kalitesini artırmak
          ve kullanıcı deneyimini geliştirmek amacıyla toplanmaktadır.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          2. Verilerin İşlenmesi
        </h2>
        <p className="text-gray-600">
          Veriler, sadece belirtilen amaçlar doğrultusunda işlenir ve üçüncü
          taraflarla yalnızca kullanıcı onayı doğrultusunda paylaşılır. Verilerin
          işlenmesi, GDPR ve KVKK gibi yasal düzenlemelere uygun olarak
          gerçekleştirilir.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          3. Veri Güvenliği
        </h2>
        <p className="text-gray-600">
          Veriler, aktarım sırasında TLS gibi şifreleme protokolleriyle
          korunmaktadır. Ancak, hiçbir sistem mutlak güvenlik garanti edemez.
        </p>
      </section>
    </div>
  </div>
);

export default DataProcessingPolicy;
