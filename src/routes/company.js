import express from 'express'
import {
  addCompany,
  getAllCompanies,
  getOneCompany,
  deleteCompany,
} from '../controllers/company-controller.js'
import { authMiddleware } from '../middlewares/index.js'

const router = express.Router()

router.post('/add-company', authMiddleware, addCompany)
router.get('/all-company', authMiddleware, getAllCompanies)
router.get('/one-company', authMiddleware, getOneCompany)
router.delete('/delete-company', authMiddleware, deleteCompany)

export default router
