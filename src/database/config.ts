import mongoose from 'mongoose'

export async function database (): Promise<void> {
  try {
    await mongoose.connect('mongodb://localhost:27017/vcnafacul')
  } catch (error) {
    console.log('error', error)
  }
}

export default mongoose
