import express from 'express'
import {
  addEmployee,
  oneEmployee,
  deleteEmployee,
} from '../controllers/employees-controller.js'
import { authMiddleware, validateRequestSchema } from '../middlewares/index.js'
import addEmployeeSchema from '../schemas/add-employee-schema.js'
import idSchema from '../schemas/id-schema.js'

const router = express.Router()

router.post(
  '/add-employee',
  authMiddleware,
  addEmployeeSchema,
  validateRequestSchema,
  addEmployee
)

router.get(
  '/one-employee',
  authMiddleware,
  idSchema,
  validateRequestSchema,
  oneEmployee
)

router.delete(
  '/delete-employee',
  authMiddleware,
  idSchema,
  validateRequestSchema,
  deleteEmployee
)

export default router
