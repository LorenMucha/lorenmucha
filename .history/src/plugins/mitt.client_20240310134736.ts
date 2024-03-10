import mitt from "mi"
const emitter = mitt()
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('bus', {
        $on: emitter.on,
        $emit: emitter.emit,
    })
})