import { findUser } from './user.swagger'

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'your description here',
    termsOfService: '',
    contact: {
      name: 'Caio Felix',
      email: 'caiohalcsik@gmail.com',
      url: 'https://github.com/chalfel'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  tags: [
    {
      name: 'User'
    }
  ],
  paths: {
    '/user': {
      get: findUser
    }
  }
}
