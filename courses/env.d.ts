import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $frontmatter: Record<string, any>
    $slidev: any
  }
}