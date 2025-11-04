import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import dbConnect from './config/database.js'
import monstersRoutes from './routes/monstersRoutes.js'

const server = fastify({logger:false})

await dbConnect()

server.register(cors, {
    origin: '*',
    methods: ["GET"]
})

server.register(monstersRoutes)

server.listen({port: process.env.PORT}, ()=>{
    console.log("🚀 Servidor Iniciado!!!")
})