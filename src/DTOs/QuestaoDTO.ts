import { IExame } from "../Models/Exame"
import { IFrente } from "../Models/Frente"
import { IMateria } from "../Models/Materia"

export interface IQuestaoDTO {
  exame: IExame
  ano: number
  caderno: string
  enemArea: string
  frente1: IFrente
  frente2: IFrente
  frente3: IFrente
  materia: IMateria
  numero: number
  textoQuestao: string
  textoAlternativaA: string
  textoAlternativaB: string
  textoAlternativaC: string
  textoAlternativaD: string
  textoAlternativaE: string
  alternativaCorreta: string
  imagemLink: string
}