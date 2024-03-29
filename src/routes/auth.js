import express from 'express'
import { authentication } from '../controllers/auth-controller.js'
import { validateRequestSchema } from '../middlewares/index.js'
import authSchema from '../schemas/auth-schema.js'

const router = express.Router()

router.post('/auth', authSchema, validateRequestSchema, authentication)

export default router
