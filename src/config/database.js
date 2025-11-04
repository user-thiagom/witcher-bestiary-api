import mongoose from 'mongoose'

async function dbConnect() {
    try {
        await mongoose.connect(process.env.DB_STRING_CONEXAO)
        console.log("✅ MongoDB Conectado com sucesso!!")
    } catch (error) {
        console.log("❌ Erro ao conectar no MongoDB", error.message)
    }

}

export default dbConnect