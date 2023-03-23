import mongoose from '../database/config'
import { type Exame } from '../Models/Exame'
const { Schema, model } = mongoose

const exameSchema = new Schema<Exame>({
  nome: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: false,
  versionKey: false
})

export default model('Exame', exameSchema)
