import { check } from 'express-validator'

const idSchema = [
  check('id')
    .exists()
    .trim()
    .notEmpty()
    .isLength({ min: 24, max: 24 })
    .withMessage('Enter valid id'),
]

export default idSchema
