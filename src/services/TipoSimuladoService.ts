import { type ITipoSimulado } from '../Models/Simulado'
import TipoSimulado from '../schemas/TipoSimulado'
import type IServiceBase from './Contracts/IServiceBase'

class TipoSimuladoService implements IServiceBase<ITipoSimulado> {
  public async Add (tipoSimulado: ITipoSimulado): Promise<ITipoSimulado> {
    const tipoS = await TipoSimulado.create({
      nome: tipoSimulado.nome,
      quantidadeTotalQuestao: tipoSimulado.quantidadeTotalQuestao,
      regras: tipoSimulado.regras != null ? tipoSimulado.regras : []
    })

    return tipoS
  }

  public async getAll (): Promise<ITipoSimulado[]> {
    return await TipoSimulado.find()
  }

  public async getById (id: string): Promise<ITipoSimulado | null> {
    return await TipoSimulado
      .findById(id)
      .populate({
        path: 'regras',
        populate: {
          path: 'materia', model: 'Materia'
        }
      })
      .populate({
        path: 'regras',
        populate: {
          path: 'frente', model: 'Frente'
        }
      })
  }
}

export default new TipoSimuladoService()
