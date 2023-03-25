import { ISimulado } from '../Models/Simulado';
import { IServiceBase } from './Contracts/IServiceBase'
import { ISimuladoDTO } from '../DTOs/SimuladoDTO'
import Simulado from '../schemas/Simulado';
import QuestaoService from './QuestaoService';

class SimuladoService implements IServiceBase<ISimulado, ISimuladoDTO> {
  public async Add(item: ISimuladoDTO): Promise<ISimulado> {
    const questoes = await QuestaoService.GetManyByRules(item.tipo)
    const simulado = await Simulado.create({
      nome: item.nome,
      descricao: item.descricao,
      tipo: item.tipo,
      questoes: questoes
    })
    return simulado
  }

  public async GetById(id: string): Promise<ISimulado | null> {
    return await Simulado.findById(id)
      .populate(['tipo', 'questoes'])
      .populate({ path: 'questoes', 
        populate: ['frente1', 'frente2','frente3', 'materia'],
        select: ['+alternativaCorreta', '+acertos', '+quantidadeTeste']})
  }

  public async GetAll():  Promise<ISimulado[]> {
    return await Simulado.find()
  }

  public async Delete(id: string): Promise<boolean> {
    const remove = await Simulado.deleteOne({ _id: id })
    return remove.deletedCount > 0
  }

  public async GetToAnswer(id: string): Promise<ISimulado | null> {
    return await Simulado.findById(id)
      .populate(['tipo', 'questoes'])
      .populate({ path: 'questoes', 
        populate: ['frente1', 'frente2','frente3', 'materia']})
  }
}

export default new SimuladoService()
