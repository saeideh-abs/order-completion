import type { Config } from 'tailwindcss'
import { iranYekan } from './styles/fonts'

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        header: '56px',
      },
      margin: {
        header: '56px',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      boxShadow: {
        header: '0px 3px 15px 3px rgba(34,34,34,0.10)',
      },
      colors: {
        primary: {
          500: '#FFC453',
          contrast: '#000',
        },
        secondary: {
          500: '#000000',
          contrast: '#fff',
        },
        bmGray: {
          500: '#757575',
          300: '#B4B4B4',
          100: '#E0E0E0',
        },
        common: {
          black: '#222222',
        },
        annotation: {
          error: '#E61F10',
          success: '#34A862',
        },
      },
    },
  },
  plugins: [],
}
export default config
