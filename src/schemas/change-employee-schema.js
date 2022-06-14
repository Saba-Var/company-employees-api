import { check } from 'express-validator'

const changeEmployeeSchema = [
  check('firstName')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Enter valid First Name'),
  check('lastName')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('First Name is required'),
  check('startedAt')
    .optional()
    .isDate()
    .withMessage('Enter date format: yyyy-mm-dd'),
  check('birthDate')
    .optional()
    .isDate()
    .withMessage('Enter date format: yyyy-mm-dd'),
  check('position')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Position is required'),
  check('id')
    .trim()
    .isLength({ min: 24, max: 24 })
    .withMessage('id must be 24 characters long'),
  check('personalNumber')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Personal number is required')
    .isLength({ min: 11, max: 11 })
    .withMessage('Personal number should be 11 characters long'),
  check('companyId')
    .optional()
    .trim()
    .isLength({ min: 24, max: 24 })
    .withMessage('Company id must be 24 characters long'),
]

export default changeEmployeeSchema
