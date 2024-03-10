export default defineNuxtPlugin((nuxtApp) => {
    const scrollTo =  => {
        const element = document.getElementById(id)
        element.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
})