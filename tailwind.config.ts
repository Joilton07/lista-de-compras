import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        'purple-light': '#A881E6',
        purple: '#7450AC',
        'purple-dark': '#523480',
        gray: {
          100: '#FBF9FE',
          200: '#AFABB6',
          300: '#252529',
          400: '#17171A',
          500: '#111112',
          600: '#0C0C0D',
        },
        'success-light': '#4E995E',
        success: '#2F723D',
        pink: '#DB5BBF',
        orange: '#E07B67',
        yellow: '#BB9F3A',
        green: '#8CAD51',
        blue: '#7B94CB',
        'pink-dark': '#251622',
        'orange-dark': '#261A17',
        'yellow-dark': '#211E12',
        'green-dark': '#1C2015',
        'blue-dark': '#1A1D23',
      },
    },
  },
  plugins: [],
}
export default config
