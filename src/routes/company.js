import express from 'express'
import addCompanySchema from '../schemas/add-company-schema.js'
import companyIdSchema from '../schemas/company-Id-schema.js'
import {
  addCompany,
  getAllCompanies,
  getOneCompany,
  deleteCompany,
} from '../controllers/company-controller.js'
import { authMiddleware, validateRequestSchema } from '../middlewares/index.js'

const router = express.Router()

router.post(
  '/add-company',
  authMiddleware,
  addCompanySchema,
  validateRequestSchema,
  addCompany
)
router.get('/all-company', authMiddleware, getAllCompanies)
router.get(
  '/one-company',
  authMiddleware,
  companyIdSchema,
  validateRequestSchema,
  getOneCompany
)
router.delete(
  '/delete-company',
  authMiddleware,
  companyIdSchema,
  validateRequestSchema,
  deleteCompany
)

export default router
