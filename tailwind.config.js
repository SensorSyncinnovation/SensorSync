/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d47a1', 
        secondary: '#1565c0', 
        highlight: '#29b6f6', 
        safety: '#00c853', 
        background: '#f4faff', 
        dark: '#1b1f23', 
        light: '#ffffff', 
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        112: '28rem',
        120: '30rem',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out',
      },
    },
  },
  plugins: [],
}