import express from 'express'
import { setupRoutes } from './route'

export const setupExpress = () => {
  const app = express()
  setupRoutes(app)
  return app
}
