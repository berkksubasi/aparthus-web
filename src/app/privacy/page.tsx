import React from 'react';

const GizlilikPolitikasiSayfasi = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg p-8 my-28">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Gizlilik Politikası</h1>
        <p className="text-gray-500 text-sm mb-8 text-center">Yürürlük Tarihi: 9 Aralık 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Giriş</h2>
          <p className="text-gray-600">
            Aparthus olarak gizliliğinize önem veriyoruz. Bu Gizlilik Politikası, 
            uygulamamızı kullandığınızda bilgilerinizin nasıl toplandığını, işlendiğini 
            ve korunduğunu açıklar.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Topladığımız Bilgiler</h2>
          <p className="text-gray-600 mb-4">Aşağıdaki türde bilgileri toplayabiliriz:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>Kişisel Bilgiler:</strong> Ad, soyad, e-posta adresi, telefon numarası ve ödeme bilgileri.
            </li>
            <li>
              <strong>Kullanım Verileri:</strong> Uygulama hareketleriniz, oturum süreleri ve hata raporları.
            </li>
            <li>
              <strong>Konum Verileri:</strong> Konum hizmetlerini etkinleştirirseniz GPS verileri.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Bilgilerinizi Nasıl Kullanıyoruz?</h2>
          <p className="text-gray-600 mb-4">Topladığımız bilgileri şu amaçlarla kullanabiliriz:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Hizmetlerimizi sağlamak ve geliştirmek.</li>
            <li>Kullanıcı hesaplarınızı ve tercihlerinizi yönetmek.</li>
            <li>Bildirimler ve güncellemeler göndermek.</li>
            <li>Yasal yükümlülüklere uymak.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Bilgi Paylaşımı</h2>
          <p className="text-gray-600 mb-4">
            Kişisel bilgilerinizi satmıyoruz. Ancak aşağıdaki durumlarda paylaşabiliriz:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Hizmet sağlayıcılarla (örneğin: ödeme işlemcileri, bulut hizmetleri).</li>
            <li>Yasal talepler veya yasal süreçlerde.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Veri Güvenliği</h2>
          <p className="text-gray-600">
            Kişisel bilgilerinizin güvenliğini sağlamak için endüstri standartlarında önlemler uyguluyoruz.
            Ancak hiçbir sistem tamamen güvenli değildir ve bu nedenle mutlak güvenliği garanti edemeyiz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Haklarınız</h2>
          <p className="text-gray-600 mb-4">Bilgilerinizle ilgili aşağıdaki haklara sahipsiniz:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Kişisel bilgilerinize erişme, güncelleme veya silme hakkı.</li>
            <li>Tanıtım e-postalarını almayı reddetme hakkı.</li>
            <li>Veri taşınabilirliği talep etme hakkı.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. İletişim</h2>
          <p className="text-gray-600">
            Gizlilik Politikası hakkında herhangi bir sorunuz veya talebiniz varsa,
            aşağıdaki bilgilerden bize ulaşabilirsiniz:
          </p>
          <p className="text-gray-600 mt-4">
            <strong>E-posta:</strong> destek@aparthus.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Politika Değişiklikleri</h2>
          <p className="text-gray-600">
            Bu Gizlilik Politikası zaman zaman güncellenebilir. Güncellemeler bu sayfada
            yayınlanacaktır. Lütfen periyodik olarak kontrol edin.
          </p>
        </section>
      </div>
    </div>
  );
};

export default GizlilikPolitikasiSayfasi;
