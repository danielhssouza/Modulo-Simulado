import mongoose from '../database/config'
import { type IMateria } from '../Models/Materia'
const { Schema, model } = mongoose

const materiaSchema = new Schema<IMateria>({
  nome: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: false,
  versionKey: false
})

export default model('Materia', materiaSchema)
