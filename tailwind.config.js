const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Certifique-se de que o Tailwind escaneie os arquivos corretamente
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ["var(--font-abril)", ...fontFamily.serif],
        averia: ["var(--font-averia)", ...fontFamily.serif],
        "open-sans": ["var(--font-open-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}