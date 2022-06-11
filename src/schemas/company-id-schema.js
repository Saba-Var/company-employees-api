import { check } from 'express-validator'

const companyIdSchema = [
  check('companyId')
    .trim()
    .notEmpty()
    .withMessage('Company id is required')
    .isLength({ min: 24, max: 24 })
    .withMessage('Company id must be 24 characters long'),
]

export default companyIdSchema
