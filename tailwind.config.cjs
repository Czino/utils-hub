/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#FAFCFF',
        black: '#4c5454',
        dark: '#523f38',
        highlight: {
          1: '#ff715b',
          2: '#FF381A',
          3: '#D11C00',
        },
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
