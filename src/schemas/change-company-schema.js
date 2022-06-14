import { check } from 'express-validator'

const changeCompanySchema = [
  check('name')
    .optional()
    .exists()
    .trim()
    .notEmpty()
    .withMessage('Name is required'),
  check('website')
    .optional()
    .trim()
    .isURL()
    .withMessage('Enter valid website address'),
  check('logoUrl')
    .optional()
    .trim()
    .isURL()
    .withMessage('Enter valid logo Url address'),
  check('establishmentDate')
    .optional()
    .trim()
    .isDate()
    .withMessage('Enter date format: yyyy-mm-dd'),
]

export default changeCompanySchema
