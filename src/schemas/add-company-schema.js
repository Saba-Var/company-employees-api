import { check } from 'express-validator'

const addCompanySchema = [
  check('name').exists().trim().notEmpty().withMessage('Name is required'),
  check('website').trim().isURL().withMessage('Enter valid website address'),
  check('logoUrl').trim().isURL().withMessage('Enter valid logo Url address'),
  check('establishmentDate')
    .trim()
    .isDate()
    .withMessage('Enter date format: yyyy-mm-dd'),
]

export default addCompanySchema
