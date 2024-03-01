/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#F8FAFF',
        black: '#4c5454',
        dark: '#523f38',
        highlight: '#ff715b',
        success: {
          1: '#1ea896',
          2: '#198F7F',
          3: '#115F55',
        },
      },
    },
  },
  plugins: [],
}
