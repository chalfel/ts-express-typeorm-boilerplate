import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { setupDb } from './infra/db/config'
import { setupExpress } from './infra/express/config'

const bootstrap = async () => {
  try {
    dotenv.config()
    await setupDb()
    const app = setupExpress()
    app.listen(process.env.PORT, () => console.log('Server is running'))
  } catch (err) {
    throw new Error(err.message)
  }
}

bootstrap()
