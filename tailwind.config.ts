/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',   // Next.js yeni yapısında app dizini olabilir
    './pages/**/*.{js,ts,jsx,tsx}', // pages dizinini tarar
    './components/**/*.{js,ts,jsx,tsx}', // components dizinini tarar
    './src/**/*.{js,ts,jsx,tsx}',   // src dizininde olabilir
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Ana tema rengi
        accent: '#10B981',  // Vurgu rengi
        background: '#F9FAFB', // Arkaplan renkleri için ek bir renk
        card: '#FFFFFF', // Kartlar için kullanılabilir
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Varsayılan font ailesi
      },
      backgroundImage: {
        'pattern': "url('/images/pattern.svg')", // Desen dosyası
        'hero-pattern': "url('/images/hero-pattern.svg')", // Alternatif desen
      },
      spacing: {
        '128': '32rem', // Özel genişlik/yükseklik değerleri
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1.5rem', // Büyük yuvarlatma için
      },
    },
  },
  plugins: [],
};
