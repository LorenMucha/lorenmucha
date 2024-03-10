import mitt from 'mitt'

interface ApplicationEvents {
  'user:registered': any
}

const emitter = mitt<ApplicationEvents>()
