import { type IFrente } from './Frente'
import { type IMateria } from './Materia'
import { type IQuestao } from './Questao'

export interface IRegra {
  materia: IMateria
  quantidade: number
  frente: IFrente | null
  ano: number | null
  caderno: string | null
}

export interface ITipoSimulado extends Document {
  nome: string
  quantidadeTotalQuestao: number
  regras: IRegra[]
}

export interface ISimulado extends Document {
  nome: string
  descricao: string
  tipo: ITipoSimulado
  questoes: IQuestao[]
  aproveitamento: number
  vezesRespondido: number
  bloqueado: boolean
}
