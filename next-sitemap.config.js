/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aparthus.com', // Sitenizin ana URL'si
  generateRobotsTxt: true, // robots.txt oluştur
  sitemapSize: 5000, // Tek bir sitemap'teki maksimum URL sayısı
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/cookie-policy', '/terms-of-service', '/privacy'], // Hariç tutulan rotalar
  additionalPaths: async (config) => {
    // Dinamik rotaları eklemek için
    const blogPosts = [
      { id: '1', path: '/blog/1' },
      { id: '2', path: '/blog/2' },
      { id: '3', path: '/blog/3' },
      { id: '4', path: '/blog/4' },
      { id: '5', path: '/blog/5' },
      { id: '6', path: '/blog/6' },
    ];

    return blogPosts.map((post) => ({
      loc: post.path, // Dinamik rota
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};
