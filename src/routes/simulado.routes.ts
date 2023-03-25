import { Router } from 'express'
import SimuladoController from '../controllers/SimuladoController'


const routes = Router()

routes.get('/simulado', SimuladoController.getall)

routes.get('/simulado/:id', SimuladoController.getById)

routes.post('/simulado', SimuladoController.post)

routes.delete('/simulado/:id', SimuladoController.delete)

routes.get('/simulado/answer/:id', SimuladoController.getByAnswer)

export default routes
