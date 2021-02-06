import express from 'express'
import { setupRoutes } from '../route/config'

export const setupExpress = () => {
  const app = express()
  setupRoutes(app)
  return app
}
