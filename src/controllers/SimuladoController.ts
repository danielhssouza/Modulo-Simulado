import { type Request, type Response } from 'express'
import { ISimuladoDTO } from "../DTOs/SimuladoDTO"
import SimuladoService from "../services/SimuladoService"

class SimuladoController {
  public async post (req: Request, res: Response): Promise<Response> {
    try {
      const simulado = await SimuladoService.Add(req.body as ISimuladoDTO)
      return res.json(simulado)
    } catch (err: any) {
      return res.status(400).json(`Erro ao cadastra Simulado. Erro: ${err.message}`)
    }
  }

  public async getall (req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await SimuladoService.GetAll())
    } catch (err: any) {
      return res.status(400).json(err.message)
    }
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await SimuladoService.GetById(req.params.id))
    } catch (err: any) {
      return res.status(400).json(`Não há nenhum Simulado com id: ${req.params.id}. Erro: ${err.message}`)
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await SimuladoService.Delete(req.params.id))
    } catch (err: any) {
      return res.status(400).json(`Erro ao tentar deletar Simulado: ${req.params.id}. Erro: ${err.message}`)
    }
  }

  public async getByAnswer (req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await SimuladoService.GetToAnswer(req.params.id))
    } catch (err: any) {
      return res.status(400).json(`Não há nenhum Simulado com id: ${req.params.id}. Erro: ${err.message}`)
    }
  }
}

export default new SimuladoController()
