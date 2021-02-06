import { createConnection } from 'typeorm'

export const setupDb = async () => {
  await createConnection()
}
