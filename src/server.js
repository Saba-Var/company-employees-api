import dotenv from 'dotenv'
import express from 'express'
import { swaggerMiddleware } from './middlewares/index.js'
import connectToMongo from './config/mongo.js'
import authRouter from './routes/auth.js'
import companyRouter from './routes/company.js'

const server = express()

dotenv.config()
connectToMongo()

server.use(express.json())

server.use(authRouter)
server.use(companyRouter)
server.use('/api-docs', swaggerMiddleware())

server.listen(process.env.SERVER_PORT, () => {
  console.log(`server listening on port ${process.env.SERVER_PORT}`)
})
