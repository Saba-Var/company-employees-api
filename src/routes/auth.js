import { body } from 'express-validator'
import express from 'express'
import { authentication } from '../controllers/auth-controller.js'

const authRouter = express.Router()

authRouter.post(
  '/auth',
  body('email').isEmail(),
  body('password').trim().notEmpty(),
  authentication
)

export { authRouter }
