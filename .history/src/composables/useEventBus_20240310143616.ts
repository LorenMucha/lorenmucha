import mitt from 'mitt'

interface ApplicationEvents {
  'user:registered': User
}

const emitter = mitt<ApplicationEvents>()
