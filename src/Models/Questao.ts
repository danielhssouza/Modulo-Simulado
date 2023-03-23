import { type IExame } from './Exame'
import { type IFrente } from './Frente'
import { type IMateria } from './Materia'

export interface IQuestao extends Document {
  _id: string
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

export const EnemArea = [
  'Ciências Humanas',
  'Linguagens',
  'Ciências da Natureza',
  'Matemática'
]

export const Caderno = [
  'Azul',
  'Amarelo',
  'Rosa',
  'Branco',
  'Cinza'
]

export const Alternativa = [
  'A',
  'B',
  'C',
  'D',
  'E'
]
