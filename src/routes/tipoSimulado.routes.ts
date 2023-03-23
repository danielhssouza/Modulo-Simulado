import { Router } from 'express'
import TipoSimuladoController from '../controllers/TipoSimuladoController'

const routes = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.post('/tiposimulado', TipoSimuladoController.post)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.get('/tiposimulado', TipoSimuladoController.getall)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.get('/tiposimulado/:id', TipoSimuladoController.getById)

export default routes
