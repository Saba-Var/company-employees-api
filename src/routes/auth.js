import { check } from 'express-validator'
import express from 'express'
import { authentication } from '../controllers/auth-controller.js'
import { validateRequestSchema } from '../middlewares/index.js'

const router = express.Router()

router.post(
  '/auth',
  check('email').isEmail().withMessage('Enter valid email format'),
  check('password')
    .trim()
    .notEmpty()
    .withMessage('Password should not be empty'),
  validateRequestSchema,
  authentication
)

export default router
