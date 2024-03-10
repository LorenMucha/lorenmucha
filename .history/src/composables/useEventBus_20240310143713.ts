import mitt from 'mitt'

interface ApplicationEvents {
  'modal:shown': Boolean
}

const emitter = mitt<ApplicationEvents>()
