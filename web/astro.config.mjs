// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'
import addIconsToHeadings from './src/plugins/remark-heading-icons.ts'
// import italiciseHeadingPreps from './src/plugins/remark-heading-prep-italic.ts'

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    mdx({
      remarkPlugins: [
        addIconsToHeadings,
        // italiciseHeadingPreps,
      ],
    }),
  ],
  markdown: { shikiConfig: { theme: 'kanagawa-wave' } },
})
