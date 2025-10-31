import mongoose from 'mongoose'

//Cria o Schema de Monstros
const monstroSchema = new mongoose.Schema({
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
    }
})

const monstro = mongoose.model("monstros", monstroSchema)

export default monstro

//mongodb+srv://witcher:witcher123@cluster0.qmtf3bn.mongodb.net/?appName=Cluster0