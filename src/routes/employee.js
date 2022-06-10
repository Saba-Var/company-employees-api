import express from 'express'
import { addEmployee } from '../controllers/employees-controller.js'
import { authMiddleware } from '../middlewares/index.js'

const router = express.Router()

router.post('/add-employee', authMiddleware, addEmployee)

export default router
