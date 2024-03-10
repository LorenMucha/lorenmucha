import mitt from 'mitt'

interface ApplicationEvents {
  'modal:shown': boolean
}

const emitter = mitt<ApplicationEvents>()
