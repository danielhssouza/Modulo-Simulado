import { Router } from 'express'
import ExameController from '../controllers/ExameController'

const routes = Router()

/**
 * @openapi
 * /exame:
 *   get:
 *     description: Retorna a lista de todos os Exames Cadastrados!
 *     responses:
 *       200:
 *         description: Retorna a lista de todos os Exames Cadastrados
 */
routes.get('/exame', ExameController.getall)

routes.get('/exame/:id', ExameController.getById)

routes.post('/exame', ExameController.post)

routes.delete('/exame/:id', ExameController.delete)

export default routes
