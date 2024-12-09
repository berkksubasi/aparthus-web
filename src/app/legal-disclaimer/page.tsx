import React from 'react';

const LegalDisclaimer = () => (
  <div className="bg-gray-50 min-h-screen flex items-center justify-center">
    <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Yasal Uyarılar
      </h1>
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          1. Hizmet Kesintileri
        </h2>
        <p className="text-gray-600">
          Aparthus, teknik sorunlar nedeniyle oluşabilecek kesintilerden sorumlu
          değildir.
        </p>
      </section>
    </div>
  </div>
);

export default LegalDisclaimer;
