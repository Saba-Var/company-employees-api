import { check } from 'express-validator'

const employeeDetailsSchema = [
  check('firstName').trim().notEmpty().withMessage('First Name is required'),
  check('lastName').trim().notEmpty().withMessage('First Name is required'),
  check('startedAt').isDate().withMessage('Enter date format: yyyy-mm-dd'),
  check('birthDate').isDate().withMessage('Enter date format: yyyy-mm-dd'),
  check('position').trim().notEmpty().withMessage('Position is required'),
  check('id')
    .trim()
    .isLength({ min: 24, max: 24 })
    .withMessage('id must be 24 characters long'),
  check('personalNumber')
    .trim()
    .notEmpty()
    .withMessage('Personal number is required')
    .isLength({ min: 11, max: 11 })
    .withMessage('Personal number should be 11 characters long'),
]

export default employeeDetailsSchema
