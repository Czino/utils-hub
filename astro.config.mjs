import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://utils-hub.com',
  vite: {
    optimizeDeps: { exclude: ['fsevents'] },
  },
  integrations: [react(), tailwind(), sitemap()],
})
