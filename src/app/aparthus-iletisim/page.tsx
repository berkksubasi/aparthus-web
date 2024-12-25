'use client';

import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';

<NextSeo
  title="Aparthus İletişim | Apartman Yönetimi Sorularınız İçin Bize Ulaşın"
  description="Aparthus ekibine ulaşın! Apartman ve site yönetimi ile ilgili tüm sorularınızı yanıtlıyor, ihtiyaçlarınıza özel çözümler sunuyoruz."
  canonical="https://aparthus.com/iletisim"
  openGraph={{
    url: 'https://aparthus.com/iletisim',
    title: 'Aparthus İletişim | Apartman Yönetimi Sorularınız İçin Bize Ulaşın',
    description: 'Aparthus ekibine ulaşın! Apartman ve site yönetimi ile ilgili tüm sorularınızı yanıtlıyor, ihtiyaçlarınıza özel çözümler sunuyoruz.',
    images: [
      {
        url: 'https://aparthus.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aparthus İletişim',
      },
    ],
  }}
/>

export default function ContactPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Aparthus İletişim",
              "url": "https://aparthus.com/iletisim",
              "description": "Aparthus ekibine ulaşın! Apartman ve site yönetimi ile ilgili tüm sorularınızı yanıtlıyor, ihtiyaçlarınıza özel çözümler sunuyoruz.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90 555 123 4567",
                "contactType": "Customer Service",
                "areaServed": "TR",
                "availableLanguage": "tr",
              },
            }),
          }}
        />
      </Head>

      <div className="bg-white min-h-screen mt-20">
        <header className="bg-[#FFD200] py-12 ">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Bize Ulaşın</h1>
            <p className="text-lg text-gray-700 mt-4">
              Her türlü soru, görüş ve öneriniz için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 space-y-12">
          {/* Contact Form */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">İletişim Formu</h2>
            <form className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Adınız ve Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD200]"
                  placeholder="Adınızı ve soyadınızı giriniz"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD200]"
                  placeholder="E-posta adresinizi giriniz"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD200]"
                  placeholder="Mesajınızı buraya yazınız"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFD200] text-gray-900 font-semibold py-3 rounded-lg hover:bg-[#FFD200]/90 transition"
              >
                Gönder
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}
