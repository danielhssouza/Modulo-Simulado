import { type Request, type Response } from 'express'
import Questao from '../schemas/Questao'
import QuestaoService from '../services/QuestaoService'

class QuestaoController {
  public async getall (req: Request, res: Response): Promise<Response> {
    const questoes = await Questao
      .find()
      .populate(['exame', 'frente1', 'frente2', 'frente3', 'materia'])
    return res.json(questoes)
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    try {
      const questao = await Questao
        .findById(req.params.id)
        .populate(['exame', 'frente1', 'frente2', 'frente3', 'materia'])
      return res.json(questao)
    } catch (err: any) {
      return res.status(400).json(`Não há nenhuma questao com id: ${req.params.id}`)
    }
  }

  public async post (req: Request, res: Response): Promise<Response> {
    try {
      const questoe = await Questao.create(req.body)
      return res.json(questoe)
    } catch (err: any) {
      return res.status(400).json(err.message)
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      const remove = await Questao.deleteOne({ _id: req.params.id })
      return res.json(remove.deletedCount > 0)
    } catch (err: any) {
      return res.status(400).json(err.message)
    }
  }

  public async GetManyByRules(req: Request, res: Response): Promise<Response> {
    try {
      const questoes = await QuestaoService.GetManyByRules(req.params.id)
      return res.status(200).json(questoes)
    } catch (err: any) {
      return res.status(400).json(err.message)
    }
  }
}

export default new QuestaoController()
