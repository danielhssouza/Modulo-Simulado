import { ITipoSimuladoDTO } from '../DTOs/SimuladoDTO'
import { type ITipoSimulado } from '../Models/Simulado'
import TipoSimulado from '../schemas/TipoSimulado'
import { IServiceBase } from './Contracts/IServiceBase'

class TipoSimuladoService implements IServiceBase<ITipoSimulado, ITipoSimuladoDTO> {
  public async Add (tipoSimulado: ITipoSimuladoDTO): Promise<ITipoSimulado> {
    const tipoS = await TipoSimulado.create({
      nome: tipoSimulado.nome,
      quantidadeTotalQuestao: tipoSimulado.quantidadeTotalQuestao,
      regras: tipoSimulado.regras != null ? tipoSimulado.regras : []
    })

    return tipoS
  }

  public async GetAll (): Promise<ITipoSimulado[]> {
    return await TipoSimulado.find()
  }

  public async GetById (id: string): Promise<ITipoSimulado | null> {
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

  public async Delete (id: string): Promise<boolean> {
    try {
      await TipoSimulado.deleteOne({ _id: id })
      return true
    } catch (error) {
      return false
    }
  }
}

export default new TipoSimuladoService()
