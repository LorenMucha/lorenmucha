import mitt from 'mitt'

interface ApplicationEvents {
  'modal:shown': any
}

const emitter = mitt<ApplicationEvents>()
