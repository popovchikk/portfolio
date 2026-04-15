/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#111111',
        accent: {
          DEFAULT: '#8B0000',
          light: '#DC2626',
          dark: '#6B0000',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 40px rgba(139, 0, 0, 0.3)',
        'glow-lg': '0 0 60px rgba(139, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};