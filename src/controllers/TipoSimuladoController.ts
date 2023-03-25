import { type Request, type Response } from 'express'
import { ITipoSimuladoDTO } from '../DTOs/SimuladoDTO'
import TipoSimuladoService from '../services/TipoSimuladoService'

class TiposSimuladoController {
  public async post (req: Request, res: Response): Promise<Response> {
    const tipoS = await TipoSimuladoService.Add(req.body as ITipoSimuladoDTO)
    return res.json(tipoS)
  }

  public async getall (req: Request, res: Response): Promise<Response> {
    const tiposimulados = await TipoSimuladoService.GetAll()
    return res.json(tiposimulados)
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await TipoSimuladoService.GetById(req.params.id))
    } catch (err: any) {
      return res.status(400).json(`Não há nenhum Tipo de Simulado com id: ${req.params.id}`)
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await TipoSimuladoService.Delete(req.params.id))
    } catch (error) {
      return res.status(400).json(`Erro ao tentar deletar Tipo de Simulado: ${req.params.id}`)
    }
  }
}

export default new TiposSimuladoController()
