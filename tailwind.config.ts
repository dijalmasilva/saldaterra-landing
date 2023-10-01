import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '425px',
      },
      colors: {
        primary: {
          DEFAULT: '#183D5A',
          100: '#D2EEF6',
          200: '#A8DBEE',
          300: '#73AFCD',
          400: '#467B9C',
          500: '#183D5A',
          600: '#112F4D',
          700: '#0C2340',
          800: '#071934',
          900: '#04112B',
        },
        secondary: {
          DEFAULT: '#BF9461',
          100: '#FDF6F0',
          200: '#F9EAD9',
          300: '#F2D1B0',
          400: '#EABD8E',
          500: '#BF9461',
          600: '#8B6F4A',
          700: '#5A4B32',
          800: '#2A271B',
          900: '#0A0804',
        },
        white: '#F2F2F2'
      }
    },
  },
  plugins: [],
}
export default config
