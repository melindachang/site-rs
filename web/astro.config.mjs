// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'
import addIconsToH2 from './src/plugins/rehype-h2-icons'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx({ rehypePlugins: [addIconsToH2] })],
  markdown: { shikiConfig: { theme: 'kanagawa-wave' } },
})
