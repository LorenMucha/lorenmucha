export default defineNuxtPlugin((nuxtApp) => {
    scrollTo(id) {
        const element = document.getElementById(id)
        element.scrollIntoView({ behavior: 'smooth', block: 'end' })
    },
})