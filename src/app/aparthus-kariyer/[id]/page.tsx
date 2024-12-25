'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

<NextSeo
  title="Aparthus Kariyer | Ekibimize Katılın"
  description="Aparthus'ta kariyer fırsatlarını keşfedin. Esnek çalışma saatleri, yüksek prim oranları ve yenilikçi projelerde çalışma imkanı."
  canonical="https://aparthus.com/aparthus-kariyer"
/>
const positions = [
  {
    id: 'saha-satis-danismani',
    title: 'Saha Satış Danışmanı',
    location: 'Türkiye Geneli',
    type: 'Serbest Zamanlı',
    description:
      'Üniversite öğrencileri ve esnek çalışanlar için prime dayalı, yüksek kazanç sağlayabileceğiniz bir iş fırsatı! Yeni nesil site yönetim uygulamamız Aparthus için sahada aktif çalışarak yüksek gelir elde etmeye hazır mısınız? Maaşlı değil, performansa dayalı gelir modeliyle kazancınızı kendi satış başarılarınıza göre belirleyebilirsiniz!',
    responsibilities: [
      'Aparthus uygulamasını tanıtmak ve apartman/sitelerle görüşmeler yapmak.',
      'Yeni müşteriler kazanmak ve satış sürecini yönetmek.',
      'İletişim becerilerini kullanarak uzun vadeli iş bağlantıları kurmak.',
    ],
    qualifications: [
      'Üniversite öğrencisi veya yeni mezun.',
      'İnsan ilişkilerinde başarılı, çözüm odaklı.',
      'Hedef odaklı çalışmayı seven ve sahada aktif görev alabilecek.',
    ],
    benefits: [
      'Esnek çalışma saatleri ile okul ve iş dengesini kolayca sağlama.',
      'Kazancını kendi performansınla belirleme fırsatı.',
      'Performansa göre artan yüksek prim oranları: %20-%25 arası prim oranları.',
      'Yaptığınız her satıştan 6 ay boyunca düzenli prim kazancı.',
      'Başarı odaklı kariyer ilerleme ve kişisel gelişim fırsatları.',
    ],
    commissionSystem: [
      '1.000 TL’lik satışlar için %20 prim.',
      '3.000 TL’lik paket satışlar için %22 prim.',
      '6.000 TL ve üzeri satışlar için %25 prim.',
      'Satışlar yıllık sözleşme içermektedir ve her satıştan 6 ay boyunca düzenli prim kazancı elde edersiniz!',
    ],
  },
];

export default function CareerDetailPage() {
  const { id } = useParams();
  const position = positions.find((pos) => pos.id === id);

  if (!position) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-800">Pozisyon Bulunamadı</h1>
        <Link href="/aparthus-kariyer">
          <span className="mt-4 text-[#FFD200] font-medium hover:underline">Kariyer Sayfasına Dön</span>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Saha Satış Danışmanı",
              "description":
                "Üniversite öğrencileri ve esnek çalışanlar için prime dayalı, yüksek kazanç sağlayabileceğiniz bir iş fırsatı.",
              "datePosted": "2024-12-25",
              "employmentType": "CONTRACTOR",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Aparthus",
                "sameAs": "https://aparthus.com",
                "logo": "https://aparthus.com/images/logo.png",
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "TR",
                },
              },
            }),
          }}
        />
      </Head>

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{position.title}</h1>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Lokasyon:</strong> {position.location}
          </p>
          <p className="text-lg text-gray-700 mb-8">
            <strong>Çalışma Türü:</strong> {position.type}
          </p>
          <p className="text-gray-800 leading-relaxed mb-12">{position.description}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sorumluluklar</h2>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              {position.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aranan Nitelikler</h2>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              {position.qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Avantajlar</h2>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              {position.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prim Sistemi</h2>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              {position.commissionSystem.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="text-center">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf3pBR_fICBQRQj_alLcsItzqLVaKH79ZwlLJCCFC29xsBm3w/viewform?usp=dialog">
              <button className="inline-block bg-[#FFD200] text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-[#FFD200]/90 transition">
                Başvuru Yap
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );

}
