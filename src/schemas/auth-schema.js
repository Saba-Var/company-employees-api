import { check } from 'express-validator'

const authSchema = [
  check('email').isEmail().withMessage('Enter valid email format'),
  check('password').notEmpty().withMessage('Password is required'),
]

export default authSchema
