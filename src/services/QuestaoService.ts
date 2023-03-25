import { IQuestaoDTO } from "../DTOs/QuestaoDTO";
import { IQuestao } from "../Models/Questao";
import { IRegra, ITipoSimulado } from "../Models/Simulado";
import Questao from "../schemas/Questao";
import TipoSimulado from "../schemas/TipoSimulado";
import { IServiceBase } from "./Contracts/IServiceBase";

class QuestaoService implements IServiceBase<IQuestao, IQuestaoDTO> {
  public async Add(item: IQuestaoDTO): Promise<IQuestao> {
    const questao = Questao.create(item)
    return questao
  }

  public async GetAll(): Promise<IQuestao[]> {
    return await Questao
      .find()
      .populate(['exame', 'frente1', 'frente2', 'frente3', 'materia'])
  }

  public async GetById(idQuestao: string): Promise<IQuestao | null> {
    return await Questao
        .findById(idQuestao)
        .populate(['exame', 'frente1', 'frente2', 'frente3', 'materia'])
  }

  public async Delete(idQuestao: string): Promise<boolean> {
    const remove = await Questao.deleteOne({ _id: idQuestao })
    return remove.deletedCount > 0
  }

  public async GetManyByRules(idTipo: string): Promise<IQuestao[] | null> {
    const tipo = await TipoSimulado.findById(idTipo)
    let questoes: any[] = []
    if(tipo){
      await Promise.all(tipo.regras.map(async (regra) => {
        const q = await this.GetQuestionByRule(regra)
        console.log(q.length)
        questoes = questoes.concat(q)
      }))
    }
    return questoes
  }

  private async GetQuestionByRule(regra: IRegra){
    let regras: {[key: string]: any} = {}
    regras['materia'] = regra.materia._id.toString()
    if(regra.frente) regras['frente1'] = regra.frente._id.toString()
    if(regra.ano) regras['ano'] = regra.ano
    if(regra.caderno) regras['ano'] = regra.caderno
    return await Questao
      .find(regras)
      .sort({ 'quantidadeTeste': 1})
      .limit(regra.quantidade as number)
  }
}

export default new QuestaoService()
