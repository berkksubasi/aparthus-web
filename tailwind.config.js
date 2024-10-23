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
        primary: '#1E3A8A',
        accent: '#10B981',
        
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
