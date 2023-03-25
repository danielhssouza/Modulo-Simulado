import { IQuestaoDTO } from "../DTOs/QuestaoDTO";
import { IQuestao } from "../Models/Questao";
import { IRegra, ITipoSimulado } from "../Models/Simulado";
import Questao from "../schemas/Questao";
import TipoSimulado from "../schemas/TipoSimulado";

class QuestaoService {
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
