import { Router } from 'express'
import FrenteController from '../controllers/FrenteController'

const routes = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.get('/frente', FrenteController.getall)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.get('/frente/:id', FrenteController.getById)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.post('/frente', FrenteController.post)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.delete('/frente/:id', FrenteController.delete)

export default routes
