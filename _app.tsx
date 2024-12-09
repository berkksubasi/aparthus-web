import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEOConfig from './next-seo.config';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Default SEO ayarları */}
      <DefaultSeo {...SEOConfig} />
      {/* Sayfa bileşeni */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
