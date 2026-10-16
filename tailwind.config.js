/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1a2942',
          900: '#0a192f',
          950: '#060f1c',
        },
        gold: {
          400: '#e6c27a',
          500: '#d4af37',
          600: '#b5952f',
        }
      },
    },
  },
  plugins: [],
};