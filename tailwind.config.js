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
        'pastel-pink': '#f8d7da',
        'rose-pink': '#f5c2c7',
        'burgundy': '#721c24',
        'dark-burgundy': '#541518',
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