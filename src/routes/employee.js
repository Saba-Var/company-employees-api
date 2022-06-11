import express from 'express'
import { addEmployee } from '../controllers/employees-controller.js'
import { authMiddleware, validateRequestSchema } from '../middlewares/index.js'
import addEmployeeSchema from '../schemas/add-employee-schema.js'

const router = express.Router()

router.post(
  '/add-employee',
  authMiddleware,
  addEmployeeSchema,
  validateRequestSchema,
  addEmployee
)

export default router
