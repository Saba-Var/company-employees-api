import { check } from 'express-validator'

const addEmployeeSchema = [
  check('startedAt')
    .isDate()
    .withMessage('Enter valid date format: yyyy-mm-dd'),
  check('birthDate')
    .isDate()
    .withMessage('Enter valid date format: yyyy-mm-dd'),
  check('firstName').trim().notEmpty().withMessage('First Name is required'),
  check('lastName').trim().notEmpty().withMessage('First Name is required'),
  check('personalNumber')
    .trim()
    .notEmpty()
    .withMessage('Personal number is required')
    .isLength({ min: 11, max: 11 })
    .withMessage('Personal number should be 11 characters long'),
  check('position').trim().notEmpty().withMessage('Position is required'),
  check('id').trim().notEmpty().withMessage('Company Id is required'),
]

export default addEmployeeSchema
