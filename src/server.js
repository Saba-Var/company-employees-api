import dotenv from 'dotenv'
import express from 'express'
import connectToMongo from './config/mongo.js'
import { authRouter } from './routes/auth.js'

const server = express()
dotenv.config()
connectToMongo()

server.use(express.json())
server.use(authRouter)

server.listen(process.env.SERVER_PORT, () => {
  console.log(`server listening on port ${process.env.SERVER_PORT}`)
})
