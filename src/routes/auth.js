import { body } from 'express-validator'
import express from 'express'
import { authentication } from '../controllers/auth-controller.js'

const router = express.Router()

router.post(
  '/auth',
  body('email').isEmail(),
  body('password').trim().notEmpty(),
  authentication
)

export default router
