import { defineMermaidSetup } from '@slidev/types'
import { defineConfig } from 'slidev'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})


export default defineConfig({
  shiki: {
    theme: 'github-dark-high-contrast',
  },
})