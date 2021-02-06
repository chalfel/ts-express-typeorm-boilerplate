import { Router } from 'express'
import { ExpressAdapter } from '../../infra/adapter/express'
import { makeUserController } from '../factory/user'

export default (router: Router) => {
  const userController = makeUserController()
  router.get('/user', ExpressAdapter.adapt(userController.findUser))
}
