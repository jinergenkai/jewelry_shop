/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'monospace'],
        manhattan: ['Manhattan', 'sans-serif'],
        dejaVuSerif: ['DejaVuSerif', 'serif'],
        bogart: ['bogart', 'serif'],
      },
    },
  },
  plugins: [],
}