import { check } from 'express-validator'

const addEmployeeSchema = [
  check('firstName').trim().notEmpty().withMessage('First Name is required'),
  check('lastName').trim().notEmpty().withMessage('First Name is required'),
  check('startedAt').isDate().withMessage('Enter date format: yyyy-mm-dd'),
  check('birthDate').isDate().withMessage('Enter date format: yyyy-mm-dd'),
  check('position').trim().notEmpty().withMessage('Position is required'),
  check('id').trim().notEmpty().withMessage('Company Id is required'),
  check('personalNumber')
    .trim()
    .notEmpty()
    .withMessage('Personal number is required')
    .isLength({ min: 11, max: 11 })
    .withMessage('Personal number should be 11 characters long'),
]

export default addEmployeeSchema
