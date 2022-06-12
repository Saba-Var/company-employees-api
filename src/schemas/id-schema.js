import { check } from 'express-validator'

const idSchema = [
  check('id')
    .trim()
    .isLength({ min: 24, max: 24 })
    .withMessage('id must be 24 characters long'),
]

export default idSchema
