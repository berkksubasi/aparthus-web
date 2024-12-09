'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaUsers } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { NextSeo } from 'next-seo';

<NextSeo
  title="Kurumsal - Aparthus"
  description="Aparthus, apartman ve site yönetiminde yenilikçi çözümler sunar. Misyonumuzu ve vizyonumuzu öğrenin."
  canonical="https://aparthus.com/kurumsal"
/>

export default function CorporatePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/corporate-hero.png"
            alt="Kurumsal Görsel"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={80}
            className="opacity-50"
          />
        </div>
        <div className="relative container mx-auto px-4 py-32 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Kurumsal</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Aparthus olarak değerlerimiz, misyonumuz ve vizyonumuzla size en iyi hizmeti sunmaya kararlıyız.
          </p>
          <Link href="/iletisim">
            <button className="mt-8 inline-flex items-center bg-[#FFD200] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD200]/90 transition">
              <FaMessage className="mr-2" />
              Bize Ulaşın
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 space-y-24">
        {/* About Us Section */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Hakkımızda</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aparthus, apartman ve site yönetimini modern teknolojilerle birleştirerek daha verimli, şeffaf ve güvenilir bir sistem sunmak amacıyla kuruldu.
              Misyonumuz, apartman yönetimi süreçlerini kolaylaştırarak yöneticilere ve sakinlere zaman kazandırmaktır.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/about-us.png"
              alt="Hakkımızda Görseli"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/mission.png"
              alt="Misyonumuz"
              width={300}
              height={300}
              className="rounded-full shadow-md mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Misyonumuz</h2>
            <p className="text-gray-600 leading-relaxed">
              Apartman ve site yönetimi süreçlerini dijitalleştirerek şeffaflığı ve güvenilirliği artırmak, sakinlerin yaşam kalitesini yükseltmek ve yöneticilere modern çözümler sunmak.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/vision.png"
              alt="Vizyonumuz"
              width={300}
              height={300}
              className="rounded-full shadow-md mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vizyonumuz</h2>
            <p className="text-gray-600 leading-relaxed">
              Apartman ve site yönetimi alanında global ölçekte lider bir marka olmak ve sektöre öncülük eden yenilikçi çözümler sunarak sürdürülebilir bir gelecek inşa etmek.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 shadow-md rounded-lg text-center">
              <FaUsers className="text-[#FFD200] mx-auto mb-4 text-4xl" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Şeffaflık</h3>
              <p className="text-gray-600">
                Tüm süreçlerimizde açık ve anlaşılır bir iletişim sağlamaya özen gösteriyoruz.
              </p>
            </div>
            <div className="bg-gray-50 p-8 shadow-md rounded-lg text-center">
              <FaEnvelope className="text-[#FFD200] mx-auto mb-4 text-4xl" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Yenilikçilik</h3>
              <p className="text-gray-600">
                Teknolojiyi en etkili şekilde kullanarak sektörde öncü olmayı hedefliyoruz.
              </p>
            </div>
            <div className="bg-gray-50 p-8 shadow-md rounded-lg text-center">
              <FaUsers className="text-[#FFD200] mx-auto mb-4 text-4xl" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sürdürülebilirlik</h3>
              <p className="text-gray-600">
                Gelecek nesillere daha iyi bir yaşam sunmak için çevreye duyarlı çözümler üretiyoruz.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Call-to-Action */}
      <section className="bg-[#FFD200] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Aparthus ile tanışmaya hazır mısınız?
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Apartman ve site yönetiminizi bir üst seviyeye taşıyın.
          </p>
          <Link href="/aparthus-iletisim">
            <button className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition">
              <FaMessage className="mr-2" />
              İletişime Geçin
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
