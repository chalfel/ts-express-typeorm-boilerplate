import 'reflect-metadata'
import { setupDb } from './infra/db/config'
import { setupExpress } from './infra/express/config'

const boostrap = async () => {
  try {
    await setupDb()
    const app = setupExpress()
    app.listen(process.env.PORT, () => console.log('Server is running'))
  } catch (err) {
    throw new Error(err.message)
  }
}

boostrap()
