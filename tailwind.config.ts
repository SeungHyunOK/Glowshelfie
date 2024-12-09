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
        notoSans: ['"Noto Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#FFF5E4',
        secondary: '#FFE3E1',
        tertiary: '#FBE7F2',
        inverse: '#FF9494',
        highlight: '#FFFFFF',
        gradientStart: '#FFDEE9',
        gradientEnd: '#B5FFFC',
        purple: {
          500: '#9D7FEA',
        },
        pink: {
          500: '#FF77A9',
        },
        yellow: {
          500: '#FFCC70',
        },
      },
      backgroundImage: {
        base: "url('/images/glowshelfe_background.png')",
      },
      screens: {
        ph: { max: '767px' },
        tab: { min: '768px', max: '1024px' },
        pc: '1025px',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeInTranslate: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        fadeOutScale: {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.9)' },
        },
        pulseGrow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        pulse: 'pulse 1.5s infinite',
        fadeIn: 'fadeIn 0.5s ease-in',
        fadeOut: 'fadeOut 0.5s ease-out',
        fadeInScale: 'fadeInScale 0.3s ease-in-out',
        fadeOutScale: 'fadeOutScale 0.3s ease-in-out',
        fadeInTranslate: 'fadeInTranslate 0.3s ease-in-out',
        pulseGrow: 'pulseGrow 1.5s infinite',
        blink: 'blink 1s infinite',
      },
    },
  },
  plugins: [],
}

export default config
