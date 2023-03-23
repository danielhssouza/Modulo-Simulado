import { Router } from 'express'
import MateriaController from '../controllers/MateriaController'

const routes = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.get('/materia', MateriaController.getall)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.get('/materia/:id', MateriaController.getById)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.post('/materia', MateriaController.post)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.delete('/materia/:id', MateriaController.delete)

export default routes
