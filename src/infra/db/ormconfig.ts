import * as dotenv from 'dotenv'
import path from 'path'
dotenv.config()
export default {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [path.join(__dirname, '/../../domain/entity/**/*')],
  migrations: [path.join(__dirname, '/../../infra/db/migration/**/*')],
  cli: {
    entitiesDir: 'src/domain/entity',
    migrationsDir: path.join(__dirname, '/../../infra/db/migration')
  }
}
