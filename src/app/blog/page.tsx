'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Apartman Yönetimini Kolaylaştıran İpuçları',
      description:
        'Apartman ve site yönetimini daha verimli hale getirmek için bilmeniz gerekenler.',
      date: '2024-12-01',
      image: '/blog/blog1.png',
    },
    {
      id: 2,
      title: 'Aidat Ödemelerinde Dijitalleşme',
      description:
        'Aidat ödemeleri ve finansal yönetim süreçlerini dijitalleştirmenin avantajları.',
      date: '2024-12-05',
      image: '/blog/blog2.png',
    },
    {
      id: 3,
      title: 'Topluluk Yönetimi için En İyi Yöntemler',
      description:
        'Apartman sakinleri ile daha güçlü bir iletişim kurmanın yollarını keşfedin.',
      date: '2024-12-08',
      image: '/blog/blog3.png',
    },
    {
      id: 4,
      title: '2024 Yılında Site Yönetimi Trendleri',
      description:
        'Site ve apartman yönetimi sektöründeki en son trendleri keşfedin.',
      date: '2024-12-09',
      image: '/blog/blog4.png',
    },
    {
      id: 5,
      title: 'Enerji Tasarrufu için İpuçları',
      description:
        'Apartman ve sitelerde enerji tasarrufu yapmanın kolay ve etkili yolları.',
      date: '2024-12-10',
      image: '/blog/blog5.png',
    },
    {
      id: 6,
      title: 'Site Güvenliği Nasıl Sağlanır?',
      description:
        'Site ve apartmanlarda güvenliği artırmak için alabileceğiniz önlemler.',
      date: '2024-12-11',
      image: '/blog/blog6.png',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 mt-28">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Aparthus Blog
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Apartman yönetimi, aidat çözümleri ve daha fazlası hakkında ipuçları ve rehberler.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600">{post.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link href={`/blog/${post.id}`}>
                    <i className="text-[#FFD200] hover:underline">
                      Devamını Oku →
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
