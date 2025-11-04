import 'dotenv/config'
import dbConnect from "../config/database.js";
import Monster from "../models/Monster.js";
import monstersData from './monstersData.js'


async function seedMonsters() {
    await dbConnect()

    try {
        await Monster.deleteMany()
        await Monster.insertMany(monstersData)
        console.log("✅ Bestiário atualizado com sucesso!!!")
        
    } catch (error) {
        console.log("❌ Erro ao popular o banco: ", error.message)
    }
}

seedMonsters()