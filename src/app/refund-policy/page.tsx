import React from 'react';

const RefundPolicy = () => (
  <div className="bg-gray-50 min-h-screen flex items-center justify-center">
    <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        İptal ve İade Politikası
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        Son Güncelleme Tarihi: 9 Aralık 2024
      </p>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          1. İptal Süreci
        </h2>
        <p className="text-gray-600">
          Aboneliğinizi taahhüt süresi bitiminde iptal edebilirsiniz. İptal talebi
          alındıktan sonra hizmet erişimi durdurulacaktır.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">2. İade Koşulları</h2>
        <p className="text-gray-600">
          Ödemeler yalnızca kullanılmayan hizmetler için iade edilebilir.
        </p>
      </section>
    </div>
  </div>
);

export default RefundPolicy;
