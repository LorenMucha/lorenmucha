import mitt from 'mitt'

type ApplicationEvents = {
  'user:registered': User
};

const emitter = mitt<ApplicationEvents>()