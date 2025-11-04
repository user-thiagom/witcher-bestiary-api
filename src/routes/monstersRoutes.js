import Monstro from '../models/Monster.js'

async function monstersRoutes(fastify, options) {
    //Listar todos os monstros
    fastify.get("/monstros", async (req, res) => {
        const monstros = await Monstro.find()
        return monstros
    })

    //Trazer um monstro pelo nome
    fastify.get("/monstros/:nome", async (req, res) => {
        const { nome } = req.params
        const monstro = await Monstro.findOne({ nome: nome })
        if (monstro == undefined) return res.code(404).send({ message: `Nenhum monstro com o nome ${nome} foi encontrado` })
        return monstro
    })

    //Listar monstros pelo seu tipo
    fastify.get("/monstros/tipo/:tipo", async (req, res) => {
        const { tipo } = req.params
        const monstros = await Monstro.find({ tipo: tipo })
        if (monstros.length == 0) return res.code(404).send({ message: `Não foi posível listar os monstros do tipo ${tipo}` })
        return monstros
    })

    //Listar monstros pelo nível de perigo
    fastify.get("/monstros/perigo/:nivel", async (req, res) => {
        const { nivel } = req.params
        const monstros = await Monstro.find({ nivelDePerigo: nivel })
        if (monstros.length == 0) return res.code(404).send({ message: `Não foi posível listar os monstros do nível ${nivel}` })
        return monstros
    })
}

export default monstersRoutes