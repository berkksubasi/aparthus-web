const config = {
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://aparthus.com',
    site_name: 'Aparthus',
    title: 'Aparthus - Modern Apartman Yönetimi',
    description:
      'Apartman ve site yönetiminde şeffaflık ve güven sunan Aparthus, aidat ödeme, kullanıcı iletişimi ve bina yönetimi için modern çözümlerle hayatınızı kolaylaştırır.',
    images: [
      {
        url: 'https://aparthus.com/images/icon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Aparthus - Modern Apartman Yönetimi',
      },
      {
        url: 'https://aparthus.com/images/feature-preview.png',
        width: 1200,
        height: 630,
        alt: 'Aparthus Özellikleri',
      },
    ],
    defaultImageWidth: 1200,
    defaultImageHeight: 630,
  },
  twitter: {
    handle: '@Aparthus',
    site: '@Aparthus',
    cardType: 'summary_large_image',
  },
};

export default config;
