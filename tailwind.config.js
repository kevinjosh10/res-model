/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#0a0a0a',
          surface: '#111111',
          light: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#cfa871',
          hover: '#b8915b',
        },
        text: {
          main: '#f5f5f5',
          muted: '#a0a0a0',
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
