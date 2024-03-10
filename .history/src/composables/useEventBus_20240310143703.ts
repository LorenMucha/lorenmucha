import mitt from 'mitt'

interface ApplicationEvents {
  'modal': any
}

const emitter = mitt<ApplicationEvents>()
