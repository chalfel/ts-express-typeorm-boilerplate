import { UserController } from '../controller/user'

export const makeUserController = () => {
  const userController = new UserController()
  return userController
}
