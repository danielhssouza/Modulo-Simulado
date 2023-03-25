import { Router } from 'express'
import frenteRouter from './frente.routes'
import materiaRouter from './materia.routes'
import exameRouter from './exame.routes'
import questaoRouter from './questao.routes'
import tipoSimuladoRouter from './tipoSimulado.routes'
import simuladoRouter from './simulado.routes'

const routes = Router()

// #region Aplica Novas Rotas
routes.use(frenteRouter)
routes.use(materiaRouter)
routes.use(exameRouter)
routes.use(questaoRouter)
routes.use(tipoSimuladoRouter)
routes.use(simuladoRouter)
// #endregion

export default routes
