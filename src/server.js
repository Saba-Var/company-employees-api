import express from 'express'
import dotenv from 'dotenv'
import { swaggerMiddleware, authMiddleware } from './middlewares/index.js'
import connectToMongo from './config/mongo.js'
import companyRouter from './routes/company.js'
import employeeRouter from './routes/employee.js'
import authRouter from './routes/auth.js'

const server = express()

dotenv.config()
connectToMongo()

server.use(express.json())
server.use('/api-docs', swaggerMiddleware())

server.use(authRouter)

server.use(authMiddleware)

server.use(companyRouter)
server.use(employeeRouter)

server.listen(process.env.SERVER_PORT, () => {
  console.log(
    `server listening on port http://localhost:${process.env.SERVER_PORT}`
  )
})
