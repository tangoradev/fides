/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emeraldBrand: '#009B77',
        slateBrand: '#2F4F4F',
        skyBrand: '#4A90E2',
      },
      boxShadow: {
        soft: '0 16px 45px -24px rgba(47, 79, 79, 0.45)',
      },
      backgroundImage: {
        'hero-overlay':
          "linear-gradient(105deg, rgba(17,24,39,0.78) 5%, rgba(17,24,39,0.55) 52%, rgba(0,155,119,0.34) 100%)",
      },
    },
  },
  plugins: [],
};
