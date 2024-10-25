import { FaAddressCard, FaCalculator, FaCalendar, FaClipboard, FaCreditCard, FaEnvelope, FaMoneyBill, FaShieldAlt, FaTasks, FaToolbox, FaTruck } from "react-icons/fa";
import { FaMoneyBill1 } from "react-icons/fa6";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-16"
      style={{
        background: 'linear-gradient(to right, #fde68a, #facc15, #fcd34d)',
      }}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center">
        Aparthus’in Sunduğu Çözümler
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-white text-center mb-10 max-w-3xl mx-auto">
        Aparthus çözümleri ile site yönetimini kolaylaştırın. Modern, güvenli ve
        pratik çözümlerimizle yöneticiliğin tadını çıkarın.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12 w-full max-w-6xl relative">
        {/* Aidat Takibi */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaMoneyBill className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">Aidat Takibi</h3>
          <p className="text-gray-600">Otomatik aidat dağılımı yaparak, tahsilatlarınızı kolayca yönetin.</p>
        </div>

        {/* Muhasebe - Finans & Raporlama */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaCalculator className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">Muhasebe - Finans & Raporlama</h3>
          <p className="text-gray-600">Tüm finansal raporlarınıza ulaşın, muhasebe işlemlerini kolaylaştırın.</p>
        </div>

        {/* Online Banka Entegrasyonları */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaMoneyBill1 className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">Online Banka Entegrasyonları</h3>
          <p className="text-gray-600">Ödemeler otomatik olarak hesaba geçsin, hesap hareketlerinizi takip edin.</p>
        </div>

        {/* Online Rezervasyon */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaCalendar className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">Online Rezervasyon</h3>
          <p className="text-gray-600">Ortak tesisler için rezervasyon taleplerini yönetin.</p>
        </div>

        {/* Kart ile Online Tahsilat */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaCreditCard className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">Kart ile Online Tahsilat</h3>
          <p className="text-gray-600">Kart ile ödeme yapın, otomatik ödeme ve taksitlendirme seçenekleri ile.</p>
        </div>

        {/* E-posta & SMS Gönderimi */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">E-posta & SMS Gönderimi</h3>
          <p className="text-gray-600">Konut sakinlerine otomatik ve düzenli bilgilendirme gönderin.</p>
        </div>

        {/* İş Takibi */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaTasks className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">İş Takibi</h3>
          <p className="text-gray-600">Görevleri oluşturun, yönlendirin ve anlık takip edin.</p>
        </div>

        {/* Kişi & Daire Kayıtları - CRM */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaAddressCard className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">Kişi & Daire Kayıtları - CRM</h3>
          <p className="text-gray-600">Konut sakinlerinin ayrıntılı bilgilerini ve iletişim bilgilerini kaydedin.</p>
        </div>

        {/* Ücretsiz Web Sitesi */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaClipboard className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">Ücretsiz Web Sitesi</h3>
          <p className="text-gray-600">Site sakinleriniz için anket, duyuru ve galeri oluşturun.</p>
        </div>

        {/* Kargo Takibi */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaTruck className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">Kargo Takibi</h3>
          <p className="text-gray-600">Kargo süreçlerini takip edin ve sistemde kayıtlı tutun.</p>
        </div>

        {/* Bakım & Onarım Sistemi */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaToolbox className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">Bakım & Onarım Sistemi</h3>
          <p className="text-gray-600">Mevcut cihazların bakım periyotlarını ve arıza kayıtlarını takip edin.</p>
        </div>

        {/* Sayaç Muayene Hizmeti */}
        <div className="feature-box p-8 sm:p-10 bg-white shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <FaShieldAlt className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">Sayaç Muayene Hizmeti</h3>
          <p className="text-gray-600">Sayaçların periyodik muayenelerini takip edin.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
