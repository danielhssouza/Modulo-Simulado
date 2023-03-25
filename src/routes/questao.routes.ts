import { Router } from 'express'
import QuestaoController from '../controllers/QuestaoController'

const routes = Router()

routes.get('/questao', QuestaoController.getall)

routes.get('/questao/:id', QuestaoController.getById)

routes.post('/questao', QuestaoController.post)

routes.delete('/questao/:id', QuestaoController.delete)

routes.get('/questao/rules/:id', QuestaoController.GetManyByRules)

export default routes
