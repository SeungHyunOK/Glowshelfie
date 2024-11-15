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
        notoSerif: ['"Noto Serif Display"', 'serif'],
        notoSans: ['"Noto Sans"', 'sans-serif'],
        notoSerifRegular: ['"Noto Serif"', 'serif'],
      },
      colors: {
        primary: '#FFF5E4',
        secondary: '#FFE3E1',
        tertiary: '#FBE7F2',
        inverse: '#FF9494',
        highlight: '#FFFFFF',
      },
      backgroundImage: {
        base: "url('/images/glowshelfe_background.png')",
      },
      screens: {
        ph: { max: '767px' },
        tab: { min: '768px', max: '1024px' },
        pc: '1025px',
      },
    },
  },
  plugins: [],
}

export default config
