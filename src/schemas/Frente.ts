import mongoose from '../database/config'
import { type Frente } from '../Models/Frente'
const { Schema, model } = mongoose

const frenteSchema = new Schema<Frente>({
  nome: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: false,
  versionKey: false
})

export default model('Frente', frenteSchema)
