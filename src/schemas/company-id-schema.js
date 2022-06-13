import { check } from 'express-validator'

const worksInCompanyIdSchema = [
  check('worksInCompanyId')
    .trim()
    .isLength({ min: 24, max: 24 })
    .withMessage('Company id must be 24 characters long'),
]

export default worksInCompanyIdSchema
