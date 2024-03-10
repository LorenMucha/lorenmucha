import mitt from 'mitt'

interface ApplicationEvents {
  'modal:shown': boolean
}

const emitter = mitt<ApplicationEvents>()

export const useEvent = emitter.emit
export const useListen = emitter.on
