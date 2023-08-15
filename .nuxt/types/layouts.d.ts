import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/loren/Entwicklung/Web/lorenmucha/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}