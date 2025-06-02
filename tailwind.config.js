const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        comfortaa: ['var(--font-comfortaa)'],
      },
      colors: {
        'bordo-escuro': '#6D1A1A',
        'vermelho-rosado': '#C04848',
        'rosa-chiclete-suave': '#49D4DD',
        'bege-cremoso': '#FFF3E7',
        'marfim-palido': '#FFF9F4',
        'champanhe-rose': '#EAD3C1',
        'preto-avermelhado': '#3B1A1A',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'cute': '0 4px 15px rgba(0, 0, 0, 0.1)',
        'cute-lg': '0 10px 25px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}