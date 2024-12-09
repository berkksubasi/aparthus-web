import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full py-12 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo ve Hakkımızda */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/icon-logo.png"
                alt="Aparthus logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-white">Aparthus</span>
            </div>
            <p className="text-sm leading-relaxed">
              Modern apartman ve site yönetimi için akıllı çözümler sunan dijital platform.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="https://facebook.com">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-[#FFD200] transition-colors" />
              </Link>
              <Link href="https://twitter.com">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-[#FFD200] transition-colors" />
              </Link>
              <Link href="https://instagram.com">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-[#FFD200] transition-colors" />
              </Link>
            </div>
          </div>

          {/* Ürün */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Ürün</h3>
            <ul className="space-y-2">
              <li><Link href="/#" className="hover:text-[#FFD200] transition-colors">Çözümler</Link></li>
              <li><Link href="/#fiyatlandırma" className="hover:text-[#FFD200] transition-colors">Fiyatlandırma</Link></li>
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Şirket</h3>
            <ul className="space-y-2">
              <li><Link href="/kurumsal" className="hover:text-[#FFD200] transition-colors">Kurumsal</Link></li>
              <li><Link href="/blog" className="hover:text-[#FFD200] transition-colors">Blog</Link></li>
              <li><Link href="/aparthus-kariyer" className="hover:text-[#FFD200] transition-colors">Kariyer</Link></li>
              <li><Link href="/privacy" className="hover:text-[#FFD200] transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-[#FFD200] transition-colors">Kullanım Koşulları</Link></li>
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Hukuki</h3>
            <ul className="space-y-2">
              <li><Link href="/cookie-policy" className="hover:text-[#FFD200] transition-colors">Çerez Politikası</Link></li>
              <li><Link href="/dpa" className="hover:text-[#FFD200] transition-colors">Veri İşleme Politikası</Link></li>
              <li><Link href="/refund-policy" className="hover:text-[#FFD200] transition-colors">İptal ve İade Politikası</Link></li>
              <li><Link href="/legal-disclaimer" className="hover:text-[#FFD200] transition-colors">Yasal Uyarılar</Link></li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi ve Telif Hakkı */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2024 <span className="text-white font-semibold">Aparthus</span>. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
