import { check } from 'express-validator'

const addCompanySchema = [
  check('establishmentDate')
    .trim()
    .isDate()
    .withMessage('Enter valid date format: yyyy-mm-dd'),
  check('name').exists().trim().notEmpty().withMessage('Name is required'),
  check('website').trim().isURL().withMessage('Enter valid website address'),
  check('logoUrl').trim().isURL().withMessage('Enter valid logo Url address'),
]

export default addCompanySchema
