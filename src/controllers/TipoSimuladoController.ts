import { type Request, type Response } from 'express'
import { type ITipoSimulado } from '../Models/Simulado'
import TipoSimuladoService from '../services/TipoSimuladoService'

class TiposSimuladoController {
  public async post (req: Request, res: Response): Promise<Response> {
    const tipoS = await TipoSimuladoService.Add(req.body as unknown as ITipoSimulado)
    return res.json(tipoS)
  }

  public async getall (req: Request, res: Response): Promise<Response> {
    const tiposimulados = await TipoSimuladoService.getAll()
    return res.json(tiposimulados)
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await TipoSimuladoService.getById(req.params.id))
    } catch (err: any) {
      return res.status(400).json(`Não há nenhum Tipo de Simulado com id: ${req.params.id}`)
    }
  }
}

export default new TiposSimuladoController()
