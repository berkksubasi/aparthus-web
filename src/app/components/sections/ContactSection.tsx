import { Mail, MapPin } from 'lucide-react'

export default function ContactSection(): JSX.Element {
  return (
    <section id="iletişim" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Dekoratif Arka Plan */}
      <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Başlık ve Açıklama */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Bizimle İletişime Geçin
          </h2>
          <p className="max-w-[600px] mx-auto mt-4 text-gray-600 md:text-lg lg:text-xl">
            Aparthus hakkında daha fazla bilgi almak veya destek için bizimle iletişime geçin.
          </p>
        </div>

        {/* İletişim Formu ve Bilgileri */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* İletişim Formu */}
          <form className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800">Bize Yazın</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FFD200] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
              <input
                type="email"
                placeholder="E-posta"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FFD200] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
              <textarea
                rows={4}
                placeholder="Mesajınızı buraya yazın..."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FFD200] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-[#FFD200] text-gray-900 hover:text-white font-semibold rounded-lg hover:bg-[#FFD200]/90 transition-colors"
            >
              Gönder
            </button>
          </form>

          {/* İletişim Bilgileri */}
          <div className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800">İletişim Bilgileri</h3>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#FFD200]/10 rounded-full">
                <MapPin className="h-6 w-6 text-[#FFD200]" />
              </div>
              <div>
                <h4 className="text-lg font-medium">Adres</h4>
                <p className="text-gray-600">Mersin, Türkiye</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#FFD200]/10 rounded-full">
                <Mail className="h-6 w-6 text-[#FFD200]" />
              </div>
              <div>
                <h4 className="text-lg font-medium">E-posta</h4>
                <p className="text-gray-600">destek@aparthus.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
