export default defineNuxtPlugin((nuxtApp) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element!.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }
  nuxtApp.provide('scrollTo', scrollTo)
})
