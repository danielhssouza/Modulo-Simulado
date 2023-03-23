import { Router } from 'express'
import QuestaoController from '../controllers/QuestaoController'

const routes = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.get('/questao', QuestaoController.getall)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.get('/questao/:id', QuestaoController.getById)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.post('/questao', QuestaoController.post)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.delete('/questao/:id', QuestaoController.delete)

export default routes
