'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import Head from 'next/head';
import { Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

<NextSeo
  title="Aparthus Blog | Apartman Yönetimi İpuçları ve Rehberler"
  description="Apartman ve site yönetiminde işinizi kolaylaştıracak pratik ipuçları, kapsamlı rehberler ve sektör trendlerini Aparthus Blog'da keşfedin."
  canonical="https://aparthus.com/blog"
  openGraph={{
    url: 'https://aparthus.com/blog',
    title: 'Aparthus Blog | Apartman Yönetimi İpuçları ve Rehberler',
    description: 'Apartman ve site yönetiminde işinizi kolaylaştıracak pratik ipuçları, kapsamlı rehberler ve sektör trendlerini Aparthus Blog\'da keşfedin.',
    images: [
      {
        url: 'https://aparthus.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aparthus Blog',
      },
    ],
    site_name: 'Aparthus Blog',
  }}
/>
const BlogDetail = () => {
  const params = useParams();
  const { id } = params;

  // Blog yazıları
  const posts = [
    {
      id: '1',
      title: 'Apartman Yönetimini Kolaylaştıran İpuçları',
      description:
        'Apartman ve site yönetimini kolaylaştıran pratik ipuçlarını keşfedin.',
      date: '2024-12-01',
      content: `
        Apartman yönetimi, herkesin bir arada yaşadığı bir ortamda karmaşık bir süreç olabilir. Ancak bazı temel adımlarla bu süreci çok daha kolay hale getirebilirsiniz. 

        İlk olarak, dijital yönetim araçlarını kullanmayı düşünün. Örneğin, aidat takibi, bakım işleri veya duyuru gibi işlemleri bir uygulama üzerinden yapmak hem sizi hem de sakinleri rahatlatır.

        İletişim de çok önemli. Sakinlerin birbirleriyle uyumlu bir şekilde yaşaması için açık ve şeffaf bir iletişim ortamı oluşturun. Örneğin, düzenli toplantılar veya anketlerle sakinlerin ihtiyaçlarını ve beklentilerini anlayabilirsiniz.

        Son olarak, uzun vadeli bir plan yapmayı unutmayın. Apartman bakımından güvenliğe kadar her alanda düzenli kontroller ve bakım işlemleri, ileride karşılaşabileceğiniz sorunların önüne geçer.
      `,
      image: '/blog/blog1.png',
    },
    {
      id: '2',
      title: 'Aidat Ödemelerinde Dijitalleşme',
      description:
        'Aidat ödemelerinde dijitalleşmenin avantajlarını öğrenin.',
      date: '2024-12-05',
      content: `
        Aidat ödemelerinde dijitalleşme, apartman ve site yönetiminde birçok kolaylık sağlıyor. 

        Birincisi, ödeme sürecini basitleştirir. Sakinler, ödemelerini birkaç tıklamayla yapabilir, böylece hem zaman kazanır hem de gecikmelerin önüne geçilir. Ayrıca, dijital sistemler sayesinde gelir ve gider tablolarını sakinlerle paylaşmak da çok daha kolaydır.

        Güvenlik de önemli bir avantajdır. Elden yapılan ödemeler yerine dijital platformları kullanmak, hem sakinlerin hem de yönetimin işini kolaylaştırır. Özetle, aidat ödemelerinde dijitalleşme, herkes için kazan-kazan durumu yaratır.
      `,
      image: '/blog/blog2.png',
    },
    {
      id: '3',
      title: 'Site Güvenliği Nasıl Sağlanır?',
      description:
        'Site ve apartmanlarda güvenliği artırmanın etkili yolları.',
      date: '2024-12-11',
      content: `
        Güvenlik, bir apartman veya site için vazgeçilmezdir. Peki, bu güvenliği nasıl sağlayabilirsiniz?

        İlk adım, kamera sistemleri kurmaktır. Giriş-çıkış noktalarını izlemek için bir kamera sistemi, sadece caydırıcı olmakla kalmaz, aynı zamanda herhangi bir olayı kayıt altına almanıza da yardımcı olur.

        Ortak alanlarda aydınlatma da önemli bir etkendir. İyi aydınlatılmış alanlar, hem sakinlerin hem de ziyaretçilerin kendini güvende hissetmesini sağlar. Son olarak, profesyonel bir güvenlik ekibiyle çalışmayı düşünün. Bu ekipler, düzenli devriyelerle site içindeki huzuru artırabilir.
      `,
      image: '/blog/blog3.png',
    },
    {
      id: '4',
      title: 'Enerji Tasarrufu için İpuçları',
      description:
        'Apartman ve sitelerde enerji tasarrufu yapmanın etkili yolları.',
      date: '2024-12-10',
      content: `
        Enerji tasarrufu hem maliyetleri düşürür hem de çevreye katkıda bulunur. Peki, apartman ve sitelerde nasıl enerji tasarrufu yapabilirsiniz?

        LED ampuller kullanmak basit ama etkili bir adımdır. Bu ampuller, geleneksel ampullere kıyasla çok daha az enerji tüketir. Ayrıca, ortak alanlardaki ışıkları hareket sensörleriyle kontrol ederek gereksiz enerji kullanımını önleyebilirsiniz.

        Isıtma ve soğutma sistemlerini düzenli olarak kontrol ettirerek enerji tasarrufu sağlayabilirsiniz. İyi izole edilmiş bir bina, enerji maliyetlerini önemli ölçüde azaltır.
      `,
      image: '/blog/blog4.png',
    },
    {
      id: '5',
      title: '2024 Yılında Site Yönetimi Trendleri',
      description:
        '2024 yılında site yönetiminde öne çıkan yenilikleri öğrenin.',
      date: '2024-12-09',
      content: `
        2024 yılı, site yönetiminde teknolojinin ön plana çıktığı bir yıl olacak. Dijitalleşme, yönetim süreçlerini daha şeffaf ve erişilebilir hale getiriyor.

        Yeni trendlerden biri, sakinlerin yönetimle daha kolay iletişim kurabilmesini sağlayan uygulamalardır. Aidat ödeme, duyurular ve etkinlik takibi gibi işlemler artık birkaç tıklama ile yapılabiliyor.

        Ayrıca, sürdürülebilirlik bu yılın ana temalarından biri. Geri dönüşüm programları ve enerji tasarrufu çözümleri, sitelerin hem çevreye hem de bütçeye katkı sağlamasına olanak tanıyor.
      `,
      image: '/blog/blog5.png',
    },
    {
      id: '6',
      title: 'Apartmanlarda Topluluk Yönetimi',
      description:
        'Apartmanlarda topluluk yönetimini iyileştirmenin yolları.',
      date: '2024-12-12',
      content: `
        Apartmanlarda uyumlu bir topluluk oluşturmak, yaşam kalitesini artırır. Bunu başarmanın yolu, sakinler arasında güçlü bir iletişim ağı kurmaktan geçer.

        Düzenli toplantılar düzenleyerek sakinlerin görüşlerini alabilirsiniz. Ayrıca, sosyal etkinlikler organize ederek komşuluk ilişkilerini güçlendirebilirsiniz. Örneğin, yılda bir kez düzenlenen bir apartman günü, herkesin bir araya gelmesi için harika bir fırsattır.

        Şeffaf bir yönetim, sakinlerin güvenini kazanmanın anahtarıdır. Gelir-gider tablolarını paylaşmak ve karar alma süreçlerine sakinleri dahil etmek, topluluk yönetimini kolaylaştırır.
      `,
      image: '/blog/blog6.png',
    },
  ];

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        <h1>Yazı bulunamadı.</h1>
      </div>
    );
  }

<NextSeo
  title={`${post.title} - Aparthus Blog`}
  description={post.description}
  canonical={`https://aparthus.com/blog/${post.id}`}
/>

  return (
    <>
      <Head>
        <title>{post.title} - Aparthus Blog</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gray-50 min-h-screen py-12 mt-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="relative w-full lg:w-3/4">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-6 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">{post.title}</h1>
              <p className="text-gray-500 text-sm mt-2">{post.date}</p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  onClick={() =>
                    window.open(
                      `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                      )}`,
                      '_blank'
                    )
                  }
                >
                  <Facebook className="w-5 h-5" />
                  Facebook&apos;ta Paylaş
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-400 rounded-lg hover:bg-blue-500"
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        window.location.href
                      )}&text=${encodeURIComponent(post.title)}`,
                      '_blank'
                    )
                  }
                >
                  <Twitter className="w-5 h-5" />
                  Twitter&apos;da Paylaş
                </button>
              </div>
            </div>
            <div className="prose prose-lg mt-8 text-gray-700 leading-relaxed lg:w-3/4">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
