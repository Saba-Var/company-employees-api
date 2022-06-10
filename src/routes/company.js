import express from 'express'
import { addCompany } from '../controllers/company-controller.js'
import { authMiddleware } from '../middlewares/index.js'

const router = express.Router()

router.post('/add-company', authMiddleware, addCompany)

export default router
