'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-20 flex items-center transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <Link className="flex items-center justify-center" href="#main">
        <Image src="/images/icon-logo.png" alt="Aparthus logo" width={50} height={50} className="h-8 w-auto" />
        <span className={`ml-2 text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Aparthus</span>
      </Link>
      <nav className="hidden md:flex ml-auto gap-8">
        {[
          { label: 'Anasayfa', href: '#' },
          { label: 'Hakkımızda', href: '#hakkımızda' },
          { label: 'Çözümler', href: '#özellikler' },
          { label: 'Fiyatlandırma', href: '#fiyatlandırma' },
          { label: 'İletişim', href: '#iletişim' },
        ].map((item) => (
          <Link
            key={item.label}
            className={`text-sm font-medium hover:text-[#FFD200] transition-colors ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Button className="hidden md:inline-flex ml-4 bg-[#FFD200] text-gray-900 hover:bg-[#FFD200]/90" href="/on-satis">
        Ön Satış
      </Button>
      <button className="ml-auto md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
        ) : (
          <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
        )}
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20">
          <nav className="flex flex-col items-center gap-6 p-6">
            {[
              { label: 'Anasayfa', href: '#' },
              { label: 'Hakkımızda', href: '#hakkımızda' },
              { label: 'Çözümler', href: '#özellikler' },
              { label: 'Fiyatlandırma', href: '#fiyatlandırma' },
              { label: 'İletişim', href: '#iletişim' },
            ].map((item) => (
              <Link
                key={item.label}
                className="text-lg font-medium text-gray-800 hover:text-[#FFD200] transition-colors"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="w-full bg-[#FFD200] text-gray-900 hover:bg-[#FFD200]/90"
              href="/on-satis"
              onClick={() => setIsMenuOpen(false)}
            >
              Ön Satış
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
