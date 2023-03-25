import { IQuestao } from "../Models/Questao"
import { ITipoSimulado } from "../Models/Simulado"

export interface ISimuladoDTO {
  nome: string
  descricao: string
  tipo: string
  questoes: IQuestao[]
}

export interface IRegraDTO {
  materia: number
  quantidade: number
  frente: number | null
  ano: number | null
  caderno: string | null
}

export interface ITipoSimuladoDTO {
  nome: string
  quantidadeTotalQuestao: number
  regras: IRegraDTO[]
}