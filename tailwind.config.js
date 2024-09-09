/** @type {import('tailwindcss').Config} */
export default {
  // a baixo indicamos onde estão os arquivos que podem utilizar  o tailwind
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

