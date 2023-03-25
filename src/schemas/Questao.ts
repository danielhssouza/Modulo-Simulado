import mongoose from '../database/config'
import { Alternativa, Caderno, EnemArea, type IQuestao } from '../Models/Questao'
import Exame from './Exame'
import Frente from './Frente'
import Materia from './Materia'
const { Schema, model } = mongoose

const questaoSchema = new Schema<IQuestao>({
  exame: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: Exame
  },
  ano: {
    type: Number,
    require: true
  },
  caderno: {
    type: String,
    enum: Caderno,
    require: true
  },
  enemArea: {
    type: String,
    enum: EnemArea,
    require: true
  },
  frente1: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: Frente
  },
  frente2: {
    type: Schema.Types.ObjectId,
    require: false,
    ref: Frente
  },
  frente3: {
    type: Schema.Types.ObjectId,
    require: false,
    ref: Frente
  },
  materia: {
    type: Schema.Types.ObjectId,
    require: false,
    ref: Materia
  },
  numero: {
    type: Number,
    require: true
  },
  textoQuestao: {
    type: String,
    required: true
  },
  textoAlternativaA: {
    type: String,
    required: true
  },
  textoAlternativaB: {
    type: String,
    required: true
  },
  textoAlternativaC: {
    type: String,
    required: true
  },
  textoAlternativaD: {
    type: String,
    required: true
  },
  textoAlternativaE: {
    type: String,
    required: true
  },
  alternativaCorreta: {
    type: String,
    enum: Alternativa,
    required: true
  },
  imagemLink: {
    type: String,
    required: true
  },
  acertos: {
    type: Number,
    required: false,
    default: 0
  },
  quantidadeTeste: {
    type: Number,
    required: false,
    default: 0
  },
  dificuldade: {
    type: Number,
    required: false,
    default: 0
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('Questao', questaoSchema)
