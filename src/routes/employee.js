import express from 'express'
import employeeDetailsSchema from '../schemas/employee-details-schema.js'
import idSchema from '../schemas/id-schema.js'
import worksInCompanySchema from '../schemas/company-id-schema.js'
import {
  addEmployee,
  oneEmployee,
  deleteEmployee,
  changeEmployee,
  getAllEmployees,
} from '../controllers/employees-controller.js'
import { validateRequestSchema } from '../middlewares/index.js'

const router = express.Router()

router.get('/all-employee', getAllEmployees)

router.post('/get-one-employee', idSchema, validateRequestSchema, oneEmployee)

router.post(
  '/add-employee',
  employeeDetailsSchema,
  validateRequestSchema,
  addEmployee
)

router.delete(
  '/delete-employee',
  idSchema,
  validateRequestSchema,
  deleteEmployee
)

router.put(
  '/change-employee',
  employeeDetailsSchema,
  worksInCompanySchema,
  validateRequestSchema,
  changeEmployee
)

export default router
