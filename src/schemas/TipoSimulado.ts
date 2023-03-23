import mongoose from '../database/config'
import { type ITipoSimulado } from '../Models/Simulado'
import Frente from './Frente'
import Materia from './Materia'

const { Schema, model } = mongoose

const tipoSimuladoSchema = new Schema<ITipoSimulado>({
  nome: {
    type: String,
    required: true
  },
  quantidadeTotalQuestao: {
    type: Number,
    required: true
  },
  regras: [{
    materia: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: Materia
    },
    quantidade: {
      type: Number,
      required: true
    },
    frente: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: Frente
    },
    ano: {
      type: Number,
      required: false
    },
    caderno: {
      type: Number,
      required: false
    },
    _id: false
  }]
}, {
  timestamps: true,
  versionKey: false
})

export default model('TipoSimulado', tipoSimuladoSchema)
