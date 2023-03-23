import { type Request, type Response } from 'express'
import Exame from '../schemas/Exame'

class ExameController {
  public async getall (req: Request, res: Response): Promise<Response> {
    const exames = await Exame.find()
    return res.json(exames)
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await Exame.findById(req.params.id))
    } catch (err: any) {
      return res.status(400).json(`Não há nenhum exame com id: ${req.params.id}`)
    }
  }

  public async post (req: Request, res: Response): Promise<Response> {
    try {
      const exame = await Exame.create(req.body)
      return res.json(exame)
    } catch (err: any) {
      return res.status(400).json(err.message)
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      const remove = await Exame.deleteOne({ _id: req.params.id })
      return res.json(remove.deletedCount > 0)
    } catch (err: any) {
      return res.status(400).json(err.message)
    }
  }
}

export default new ExameController()
