import { check } from 'express-validator'

const companyIdSchema = [
  check('id').exists().trim().notEmpty().withMessage('Company Id is required'),
]

export default companyIdSchema
