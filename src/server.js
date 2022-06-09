import dotenv from 'dotenv'
import connectToMongo from './config/mongo.js'

dotenv.config()
connectToMongo()
