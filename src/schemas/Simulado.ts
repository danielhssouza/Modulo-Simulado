import mongoose from '../database/config'
import { type ISimulado } from '../Models/Simulado'
import Questao from './Questao'
import TipoSimulado from './TipoSimulado'

const { Schema, model } = mongoose

const simuladoSchema = new Schema<ISimulado>({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  tipo: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: TipoSimulado
  },
  questoes: [{
    type: Schema.Types.ObjectId,
    required: false,
    ref: Questao
  }],
  aproveitamento: {
    type: Number,
    required: false,
    default: 0
  },
  vezesRespondido: {
    type: Number,
    required: false,
    default: 0
  },
  bloqueado: {
    type: Boolean,
    required: false,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('Simulado', simuladoSchema)
