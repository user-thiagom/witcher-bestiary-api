import mongoose from 'mongoose'

//Cria o Schema de Monstros
const monsterSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    tipo: {
        type: String,
        required: true,
        enum: [
            "Construto",
            "Draconídeo",
            "Espectro",
            "Fera",
            "Híbrido",
            "Insectoide",
            "Necrófago",
            "Ogroide",
            "Amaldiçoado",
            "Relicto",
            "Vampiro"
        ]
    },
    descricao: {
        type: String,
        required: true
    },
    fraqueza: {
        type: [String],
        default: []
    },
    regiao: {
        type: [String],
        default: []
    },
    nivelDePerigo: {
        type: Number,
        min: 1,
        max: 5
    },
    imageUrl: {
        type: String,
        trim: true
    }
},{versionKey: false})

const monster = mongoose.model("monstros", monsterSchema)

export default monster