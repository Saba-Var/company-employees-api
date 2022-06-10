import express from 'express'
import {
  addCompany,
  getAllCompanies,
} from '../controllers/company-controller.js'
import { authMiddleware } from '../middlewares/index.js'

const router = express.Router()

router.post('/add-company', authMiddleware, addCompany)
router.get('/all-company', authMiddleware, getAllCompanies)

export default router
