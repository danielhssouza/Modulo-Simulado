import { Router } from 'express'
import ExameController from '../controllers/ExameController'

const routes = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.get('/exame', ExameController.getall)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.get('/exame/:id', ExameController.getById)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.post('/exame', ExameController.post)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.delete('/exame/:id', ExameController.delete)

export default routes
